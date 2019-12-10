import React, { Component } from 'react'

export default class UserTable extends Component {
    
     handleDelete = data => {
        this.props.deleteuser(data)
     }

    render() {
        const { userList } = this.props
        return (
            <table id="datatables-buttons" className="table table-striped" style={{ width: '100%' }}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Mobile</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody >
                {
                    userList.length > 0 ? userList.map((item, key) => {
                        console.log(item)
                        return (
                            <tr key={key}>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.mobile}</td>
                                <td>
                                    <button>edit</button>
                                    <button onClick = {()=> this.handleDelete({id:item.id})}>delete</button>
                                </td>
                            </tr>
                        )
                    }) : <tr><td>No Data Found</td></tr>
                }
                </tbody>
            </table>
        )
    }
}
