
import { GraphQLObjectType, GraphQLList, GraphQLID, GraphQLString } from 'graphql'
import { UserType } from './schema'
import { User } from '../db/schema'
export default new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        user: {
            type: new GraphQLList(UserType),
            args: {
                id: { type: GraphQLID },
                mobile: { type: GraphQLString },
            },
            resolve(parent, args) {
                let where;
                if (args.id) {
                    where = { _id: args.id }
                } else if (args.mobile){
                    where = { mobile: args.mobile }
                } else {
                    where = {}
                }
                return User.find(where)
            }
        }
    }
});