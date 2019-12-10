import React, { Component } from 'react'
import UserTable from './UserTable'
import UserForm from './UserForm'
import { connect } from "react-redux";
 import {createUser,getUserList,deleteUser} from 'action/master';
 import PropTypes from 'prop-types'; 
 import { withApollo } from 'react-apollo';
 

 class UserPage extends Component {
    static propTypes = {
        loading: PropTypes.bool,
        data: PropTypes.object,
    
        usersAll: PropTypes.func,
      };

    state = {
        table: true
    }
    componentDidMount() {
        this.props.getUserList(this.props.client);
    }
    createUser = data => {
        this.props.createUser(data,this.props.client)
    }
    deleteUser = data => {
        this.props.deleteUser(data, this.props.client)
        .then( res => {
            this.props.getUserList(this.props.client)
        })
    }

    render() {
        const { table } = this.state
        const {userList} = this.props 
        return (
            <main className="content">
                <div className="container-fluid p-0">
                    <h1 className="h3 mb-3">User</h1>
                    <div className="row">
                        <div className="col-12">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="card-title">{table ? "User List" : "User Form"}</h5>
                                    <button className="btn btn-primary right" onClick={() => this.setState({ table: !this.state.table })}>{table ? "Add User" : "View Users"}</button>
                                </div>
                                <div className="card-body">
                                    {table ? <UserTable  userList ={userList} deleteUser ={this.deleteUser}/> 
                                    : <UserForm createUser ={this.createUser}/>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}
    const mapStateToProps = (state) => {
        return {
            userList: state.master.userList !== undefined ?  state.master.userList: []
        }
     }
    const mapDispatchToProps = (dispatch) => {
        return {
            getUserList: (data) => dispatch(getUserList(data)),
            createUser: (data,client) => dispatch(createUser(data,client)),
            deleteUser: (data,client) => dispatch(deleteUser(data,client)),
            //editCustomer: (data) => dispatch(editCustomer(data)),
        }
    }
    
const UserPageGrapgql = withApollo(UserPage);
export default connect (mapStateToProps, mapDispatchToProps)(UserPageGrapgql)