import React from 'react'
import API from './API/api'

export default class Register extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            'Email' : '',
            'Password' : '',
            'Password2' : '',
            'Phone' : '',
            'data' : []

        }
    }
    handleChangeEmail = (e) =>{
        this.setState({
            Email : e.target.value
        })
    }
    handleChangePassword = (e) =>{
        this.setState({
            Password : e.target.value
        })
    }
    handleChangePassword2 = (e) =>{
        this.setState({
            Password2 : e.target.value
        })
    }
    handleChangePhone = (e) =>{
        this.setState({
            Phone : e.target.value
        })
    }
    handleSubmit = (e) =>{
        console.log("registing...")
        const Datas = {
            "email" : this.state.Email,
            "password" : this.state.Password,
            "phone" : this.state.Phone
        }
        if(this.state.Password == this.state.Password2){
            API.post('/register', Datas)
            console.log("success")
        }
        else if(this.state.Password != this.state.Password2){
            console.log("error")
        }
        e.preventDefault()
        
    }
    render(){
        return(
            <div className="container pt-4">
            <div className="registerpage">
            <h3>Create your accout.</h3>
            <div className="row pt-4">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <p>Email</p>
                    <input type="email" class="form-control" id="Email" onChange={this.handleChangeEmail}></input>
                    <p className="pt-2">Password</p>
                    <input type="password" class="form-control" id="Password" onChange={this.handleChangePassword}></input>
                    <p className="pt-2">Confirm Password</p>
                    <input type="password" class="form-control" id="Password2" onChange={this.handleChangePassword2}></input>
                    <p className="pt-2">Phone</p>
                    <input type="text" class="form-control" id="Phone" onChange={this.handleChangePhone}></input>
                    <button className="btn btn-primary w-100 mt-4" onClick={this.handleSubmit}>Sign Up</button>
                </div>
                <div className="col-md-3"></div>
            </div>
            </div>
        </div>
        )
    }
}