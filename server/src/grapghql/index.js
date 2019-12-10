
//import {GraphQLSchema} from 'graphql';

// import RootQuery from './queries'
// import Mutation from './mutations'
// export default new GraphQLSchema({
//     mutation: Mutation,
//     query: RootQuery,
// })
//import { find } from "lodash";

import { User , Subuser} from '../db/schema'
import {
    makeExecutableSchema
} from 'graphql-tools';

const typeDefs = `
type msg {
    status:String,
    message:String,
    statusCode:Int
}

 type User {
  id: String!
  name: String!
  mobile: String!
  email:String!
  subUser:[subUser], 
  query : Int! , 
 }
 type subUser {
    id:String!
    name:String!
    mobile:String!
    created_by:String!
    user: User
 }

type Query {
    users(id: ID): User
    usersAll: [User]
    subUsersAll:[subUser]
    subUsers(id: ID): subUser
}
 input UserInput {
    name: String!
    mobile: String!
    email:String!,
    created_by:Int,
    subuser:[SubUserInput]
 }
 input SubUserInput {
     name:String!
     mobile:String!
     created_by:String!
 }
 type Mutation {
    createUsers(data:UserInput) :User
    updateUser(id: String!, input: UserInput): User
    deleteUsers(id:String!): msg
    createSubUsers(data:SubUserInput):subUser
    }
`;

const resolvers = {
    Query: {
        async users(obj, args, context, info) {
            return User.findById({ _id: args.id })
            .then( res => res)
            .catch(err => {
                throw new Error(err)
            })
        },
        async usersAll() {
            return await User.find();
        },
        async subUsersAll(){
            return await Subuser.find()
        },
        async subUsers(obj, args, context, info) {
            return Subuser.findOne({ created_by: args.id })
            .then(res => res)
            .catch(err => {
                throw new Error('No User Found ')
            })
        },
    },
    User:{
        subUser: async (obj,args ,context, info) => {
           return Subuser.find({ created_by: obj._id })
        }
    }, 
    Mutation: {
        async createUsers(obj, args, context, info) {
            let insert = new User(args.data)
            return await insert.save()
        },
        async deleteUsers(parents, args) {
            return User.findByIdAndRemove({ _id: args.id })
            .then(res => {
                return { message: 'test' }
             })
        },
        async createSubUsers(obj,args,context,info){
            let insert = new Subuser(args.data)
            return await insert.save()
        }
    }, 
};

const schema = makeExecutableSchema({
    typeDefs,
    resolvers
});
export default schema;