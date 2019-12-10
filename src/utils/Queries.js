import gql from 'graphql-tag'

export const allUser = gql`
  {
    usersAll {
        id 
        name
        mobile
        email
       }
  } 
`;

export  const createUsers = gql`
  mutation($name:String!,$mobile:String!,$email:String!)
{
  createUsers(data: {name:$name,mobile:$mobile,email:$email}) 
  {
    name
    mobile
    email
  }
}`;

export const deleteUsers = gql`
  mutation($id:String!){
    deleteUsers(id:$id)
  {
    message
  }
}`;