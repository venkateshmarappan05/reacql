
import { GraphQLObjectType, GraphQLID, GraphQLString} from 'graphql';

const UserType = new GraphQLObjectType({
    name: 'user',
    fields:{
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        mobile: { type: GraphQLString },
        msg: { type: GraphQLString },
    }
});

export {
    UserType
}




