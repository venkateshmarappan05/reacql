import React, { Component } from 'react'
import { MSG } from 'config/languages/english';
import Validator from "validator";

export default class UserForm extends Component {
    state = {
        data: {
            name: '',
            email: '',
            mobile: '',
            createdBy: 1,
        },
        errors: {}
    }
    handleChange = e => {
        this.setState({
            data: { ...this.state.data, [e.target.name]: e.target.value }
        });
    }

    handleSumbit = e => {
        e.preventDefault();
        const errors = this.validate(this.state.data);
        this.setState({ errors });
        if (Object.keys(errors).length === 0) {
             this.props.createUser(this.state.data)
        }
    }
    validate = data => {
        const errors = {};
        if (Validator.isEmpty(data.name)) {
            errors.name = MSG["name"];
        }
        if (Validator.isEmpty(data.email)) {
            errors.email = MSG["email"];
        } 
        
        else if (!Validator.isEmail(data.email)){
            errors.email = MSG["email_invalid"];
        }
        if (Validator.isEmpty(data.mobile)) {
            errors.mobile = MSG["mobile"];
        }
        else if (data.mobile.length < 10) {
            errors.mobile = MSG['mobile_length'];
        }
        else if (!Validator.matches(data.mobile, /^(\+[\d]{1,3}|0)?[6-9]\d{9}$/)) {
            errors.mobile = MSG['invalid_mobile']
        }
        return errors
    }
    handleKeyPress = (event) =>{
        let regex = new RegExp("^[0-9+]*$"); 
        let key = String.fromCharCode(event.charCode ? event.which : event.charCode); 
        if (!regex.test(key)) { 
         event.preventDefault();
         this.setState({
           data: { ...this.state.data, [event.target.name]: event.target.value }
         });
          return false; 
        } 
    }

    render() {
        const { errors, data } = this.state
        return (
            <form onSubmit = {this.handleSumbit} >
                <div className="form-group">
                    <label className="form-label">Name</label>
                    <input type="text" name="name" className="form-control" value={data.name}  onChange={this.handleChange} placeholder="Name" />
                    {errors.name && <span className="messages">{errors.name}</span>}
                </div>
                <div className="form-group">
                    <label className="form-label">Email</label>
                    <input type="text"  value={data.email} name="email" className="form-control" onChange={this.handleChange} placeholder="Email" />
                    {errors.email && <span className="messages">{errors.email}</span>}
                </div>
                <div className="form-group">
                    <label className="form-label">Mobile</label>
                    <input type="text" name="mobile" onKeyPress={this.handleKeyPress} onChange={this.handleChange} value={data.mobile} className="form-control" placeholder="Mobile" />
                    {errors.mobile && <span className="messages">{errors.mobile}</span>}
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        )
    }
}
