import React, { Component } from 'react'
import firebase from 'firebase'
import {Link, Route} from 'react-router-dom'

export default class registerProduct extends Component {
    constructor(props){
        super(props)
        this.state = {
            Name : '',
            Email : '',
            No : '',
            Address :'',
            Address2 : '',
            City :'',
            State : '',
            Zip :'',
            Data : []
        }
        // Initialize Firebase
        var config = {
            apiKey: "AIzaSyDvxeK2VfWn7GZ9VaM2pGqG2syZJrqSsPM",
            authDomain: "opencamera-573ed.firebaseapp.com",
            databaseURL: "https://opencamera-573ed.firebaseio.com",
            projectId: "opencamera-573ed",
            storageBucket: "opencamera-573ed.appspot.com",
            messagingSenderId: "156071790204",
            appId: "1:156071790204:web:465522ce019f8c95ba6bf9"
        };
        if (!firebase.apps.length) {
            firebase.initializeApp(config);
        }
    }
    componentWillMount(){
        this.getMetaDataFromDatabase()
    }
    getMetaDataFromDatabase () {
        const databaseRef = firebase.database().ref('/Dataregister');
        databaseRef.on('value', snapshot => {
            let data = snapshot.val()
            let key = Object.keys(data)

            for( var i = 0; i < key.length; i++){
                var k = key[i]
                var Dataregist = data[k].Dataregist
                console.log(Dataregist)
                this.setState({
                    Data : Dataregist
                })
            } 
        });
    }
    handleChangeEmail = (e) =>{
        this.setState({
            Email : e.target.value
        })
    }
    handleChangeName = (e) =>{
        this.setState({
            Name : e.target.value
        })
    }
    handleChangeNo = (e) =>{
        this.setState({
            No : e.target.value
        })
    }
    handleChangeAddress = (e) =>{
        this.setState({
            Address : e.target.value
        })
    }
    handleChangeAddress2 = (e) =>{
        this.setState({
            Address2 : e.target.value
        })
    }
    handleChangeCity = (e) =>{
        this.setState({
            City : e.target.value
        })
    }
    handleChangeZip = (e) =>{
        this.setState({
            Zip : e.target.value
        })
    }
    onClicked = (e) =>{
        console.log(this.state.Zip)
        let Dataregist = {
            Name : this.state.Name,
            Email : this.state.Email,
            No : this.state.No,
            Address : this.state.Address,
            Address2 : this.state.Address2,
            City : this.state.City,
            Zip : this.state.Zip,
            StatusConfirm : "false"
        }
        var firebaseRef = firebase.database().ref('/Dataregister')
        firebaseRef.on('value', snapshot =>{
            let data = snapshot.val()
            let key = Object.keys(data)
            var databaseUpdateRef = firebase.database().ref(`/Dataregister/${key}`)
            databaseUpdateRef.update({Dataregist : {StatusConfirm : Dataregist.StatusConfirm, Name : Dataregist.Name, Email : Dataregist.Email,
        No : Dataregist.No, Address : Dataregist.Address, Address2 : Dataregist.Address2, City : Dataregist.City, Zip : Dataregist.Zip
        }})
        })
        alert("Upload success")
    }
    handleClear = (e) =>{
        var firebaseRef = firebase.database().ref('/Dataregister')
        firebaseRef.on('value', snapshot =>{
            let data = snapshot.val()
            let key = Object.keys(data)
            var databaseUpdateRef = firebase.database().ref(`/Dataregister/${key}`)
            databaseUpdateRef.update({Dataregist : {StatusConfirm : "", Name : "", Email : "",
        No : "", Address : "", Address2 : "", City : "", Zip : ""
        }})
        })
    }
    // handleclicked = (e) =>{
    //     window.location.href = "/uploadData/uploadProduct_Supplier"
    // }
    render() {
        if(this.state.Data.Email != "" ){
            var disabled = "none"
            var hidden = {
                display : ""
            }
            if(this.state.Data.StatusConfirm == "true"){
                var nextBox = {
                    display : ""
                }
            }
            else{
                var nextBox = {
                    display : "none"
                }
            }
        }else{
            var disabled = ""
            var hidden = {
                display : "none"
            }
        }
        return (
            <div className="container pt-4">
                <h2>Product register</h2>
                <form>
                    <label>Factory name</label>
                    <input disabled={disabled} placeholder={this.state.Data.Name} type="email" class="form-control" id="inputEmail3" onChange={this.handleChangeName}></input>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                        <label for="inputEmail4">Email</label>
                        <input disabled={disabled} placeholder={this.state.Data.Email} type="email" class="form-control" id="inputEmail4" onChange={this.handleChangeEmail}></input>
                        </div>
                        <div class="form-group col-md-6">
                        <label for="inputPassword4">No</label>
                        <input placeholder={this.state.Data.No} disabled={disabled} type="text" class="form-control" id="inputPassword4" onChange={this.handleChangeNo}></input>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="inputAddress">Address</label>
                        <input placeholder={this.state.Data.Address} disabled={disabled} type="text" class="form-control" id="inputAddress" onChange={this.handleChangeAddress}></input>
                    </div>
                    <div class="form-group">
                        <label for="inputAddress2">Address 2</label>
                        <input placeholder={this.state.Data.Address2} disabled={disabled} type="text" class="form-control" id="inputAddress2"  onChange={this.handleChangeAddress2}></input>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                        <label for="inputCity">City</label>
                        <input placeholder={this.state.Data.City} disabled={disabled} type="text" class="form-control" id="inputCity" onChange={this.handleChangeCity}></input>
                        </div>
                        <div class="form-group col-md-4">
                        <label for="inputState">State</label>
                        <select disabled={disabled} id="inputState" class="form-control">
                            <option selected>Choose...</option>
                            <option>1</option>
                        </select>
                        </div>
                        <div class="form-group col-md-2">
                        <label for="inputZip">Zip</label>
                        <input placeholder={this.state.Data.Zip} disabled={disabled} type="text" class="form-control" id="inputZip" onChange={this.handleChangeZip}></input>
                        </div>
                    </div>
                    <button disabled={disabled} type="button" onClick={this.onClicked} class="btn btn-primary">Sign in</button>
                    <button className="btn btn-danger float-right" onClick={this.handleClear}>Clear</button>
                    </form>
                    <div style={hidden} class="alert alert-success mt-4" role="alert">
                    {this.state.Data.Name} was register now please waiting for confirm<a href="#" class="alert-link"> Your status : {this.state.Data.StatusConfirm}</a>
                    
                    <Link to="/uploadData/uploadProduct_Supplier">
                        <button className="btn btn-primary ml-3" style={nextBox}>Go to product</button>
                    </Link>
                    
                    </div>
            </div>
        )
    }
}
