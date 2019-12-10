import {GraphQLObjectType,GraphQLString} from 'graphql'
import {UserType} from './schema'
import {User} from '../db/schema'
export default new GraphQLObjectType({
    name: 'mutation',
    fields: {
        usersAdd: {
            type:UserType,
            args: {
                id:{type:GraphQLString},
                name: { type: GraphQLString },
                email: { type: GraphQLString },
                password: { type: GraphQLString },
                mobile: { type: GraphQLString },
                paramaters:{type:GraphQLString}
            }, 
            resolve(parents, args){
                let data = args.paramaters ? args.paramaters.toLowerCase() : ''
                let query = {_id: args.id}
                 switch(data) {
                    case 'edit':
                        return User.updateOne(query, {$set: args,$currentDate: { "updated_at": true }})
                        .then(res => {return User.findByIdAndUpdate(query)})
                        .catch (err => err)
                        break;
                    case 'delete':
                        return User.deleteOne(query).then(res => {
                            return User.findByIdAndDelete(query)
                        })
                      break;
                    default:
                            // args['created_at'] = new Date()
                            // args['updated_at'] = new Date()
                           let user = new User(args)
                          return  user.save().then(res => {
                                console.log(res)
                                return res
                            }).catch(err => err)
                  }
            }
        }
    }
})
