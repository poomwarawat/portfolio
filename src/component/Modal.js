import React from 'react';
import Logo from '../picture/logo.png'
import {Link} from 'react-router-dom';
import API from './API/api';
import Auth from './auth';

export default class Modal extends React.Component{
    constructor(props){
        super(props)
        this.state={
            'email' : '',
            'password' : '',
            'btnLogin' : '',
            'btnLogout' : 'none'
        }
        
        this.handleChangeEmail = this.handleChangeEmail.bind(this)
        this.handleChangePassword = this.handleChangePassword.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }
    
    async componentDidMount(){
        API.get('/login').then(response =>{
            if(response.data.status == true){
                this.setState({
                    'btnLogout' : '',
                    'btnLogin' : 'none'
                })
            }else if(response.data.status == false){
                this.setState({
                    'btnLogout' : 'none',
                    'btnLogin' : ''
                })
            }
        })
    }
    handleChangeEmail = (e) =>{
        this.setState({
            'email' : e.target.value
        }) 
    }
    handleChangePassword = (e) =>{
        this.setState({
            'password' : e.target.value,
            
        })      
    }
   
    onSubmit = (e) =>{
        e.preventDefault()
        const user = {
            'email' : this.state.email,
            'password' : this.state.password
        }
        API.post('/login', user).then(response =>{
            if(response == true){
                console.log("login success")
            }
        })
        
        window.location.reload()
    }
    onLogOut = (e) =>{
        e.preventDefault()
        API.post('/logout', false)
        window.location.reload()
    }
    render(){
        const hidden = {
            display : this.state.btnLogout
        }
        const show = {
            display : this.state.btnLogin
        }
        
        return(
            <div className="col-12 col-md-12">
                {/* <button style={show} id="SignIn" type="button" class="btn btn-primary w-100 " data-toggle="modal" data-target="#exampleModal">
                Sign In
                </button> */}
                <div class="btn-group" style={show}>
                <button type="button" class="btn btn-info dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    username
                </button>
                <div class="dropdown-menu dropdown-menu-right">
                    <Link to="/editData">
                        <button class="dropdown-item" type="button">Edit Data</button>
                    </Link>
                    <Link to="/uploadData">
                        <button class="dropdown-item" type="button" onClick={this.toUpload}>Upload Data</button>
                    </Link>
                    <Link to="/basket">
                        <button className = "dropdown-item" type="button" >Cart</button>
                    </Link>
                    <button class="dropdown-item" type="button" onClick={this.onLogOut}>Sign Out</button>
                </div>
                </div>
                <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <img src={Logo}></img>
                        <div className="text-left">
                            <input type="email" class="form-control w-100" placeholder="Enter email" onChange={this.handleChangeEmail}></input>
                            <input type="password" class="form-control w-100"  placeholder="Enter password" onChange={this.handleChangePassword}></input>
                            <div class="form-check">
                                <input checked type="checkbox" class="form-check-input" id="exampleCheck1"></input>
                                <label class="form-check-label" for="exampleCheck1">Remember me!</label>
                            </div>
                        </div>
                        <Link to="/register" >
                        <button className="btn btn-primary w-75" >Register</button>
                        </Link>
                        <button id="SignIn" className="btn btn-primary w-75" data-dismiss="modal" onClick={this.onSubmit}>Sign In</button>
                    </div>
                    <div class="modal-footer">
                    </div>
                    </div>
                </div>
                </div>
            </div>
        )
    }
    
}
