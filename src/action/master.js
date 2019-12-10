import {allUser,createUsers,deleteUsers} from '../utils/Queries'

export const USER_LIST = 'USER_LIST';

export const userData = data => ({
    type: USER_LIST,
    data
});
export const getUserList = client => async dispatch =>  {
    client.query({query:allUser})
    .then(res => {return res.data.usersAll})
    .then(rslt => dispatch(userData(rslt)))
}

export const createUser = (val,client) => async dispatch => {
    let data = await client.mutate({ variables:  val ,
        mutation: createUsers,
       // refetchQueries: () => [{ query: allUser }],
       
    })
    return data
}


export const deleteUser = (data, client) => async dispatch => {
    await  client.mutate({variables: data, 
    mutation: deleteUsers,
    onCompleted :() => console.log('console')
    })

}