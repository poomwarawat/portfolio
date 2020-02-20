import React, { Component } from 'react'
import firebase from 'firebase'

export default class EditData extends Component {
    constructor(props){
        super(props)
        this.state = {
            Data : [],
            valueConfirm : ''
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
            console.log(this.state.Data.Name)
        });
    }
    handleUpdateData = (e) =>{
        var firebaseRef = firebase.database().ref('/Dataregister')
        firebaseRef.on('value', snapshot =>{
            let data = snapshot.val()
            let key = Object.keys(data)
            var databaseUpdateRef = firebase.database().ref(`/Dataregister/${key}`)
            databaseUpdateRef.update({Dataregist : {StatusConfirm : this.state.valueConfirm, Name : this.state.Data.Name, Email : this.state.Data.Email,
        No : this.state.Data.No, Address : this.state.Data.Address, Address2 : this.state.Data.Address2, City : this.state.Data.City, Zip : this.state.Data.Zip
        }})
        })
        alert("Update Confirm Status is : " + this.state.valueConfirm)
        console.log(this.state.valueConfirm)
    }
    handleChangeConfirm = (e) =>{
        console.log(e.target.value)
        this.setState({
            valueConfirm : e.target.value
        })
    }
    render() {
        if(this.state.Data.StatusConfirm == "true"){
            var colorStatus = {
                color : "green"
            }
        }else{
            var colorStatus = {
                color : "red"
            }
        }
        return (
            <div className="container p-4">
                <div>
                    <h2>Confirm supplier registeration</h2>
                    <table class="table">
                    <thead>
                        <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">No.</th>
                        <th scope="col">Address</th>
                        <th scope="col">Address2</th>
                        <th scope="col">City</th>
                        <th scope="col">Zip</th>
                        <th scope="col">Status</th>
                        <th scope="col">StatusConfirm</th>
                        </tr>
                    </thead>
                        <tbody>
                        <tr>
                        <th scope="row">{this.state.Data.Name}</th>
                        <td>{this.state.Data.Email}</td>
                        <td>{this.state.Data.No}</td>
                        <td>{this.state.Data.Address}</td>
                        <td>{this.state.Data.Address2}</td>
                        <td>{this.state.Data.City}</td>
                        <td>{this.state.Data.Zip}</td>
                        <td><p style={colorStatus}>{this.state.Data.StatusConfirm}</p></td>
                        <td>
                        <select value={this.state.valueConfirm} onChange={this.handleChangeConfirm} id="inputState" class="form-control">
                            <option value="false">false</option>
                            <option value="true">true</option>
                        </select>
                        </td>
                        </tr>
                    </tbody>
                    </table>
                    <button className="btn btn-primary float-right" onClick={this.handleUpdateData}>Update Confirm status</button>
                </div>
                <div style={{height:"350px", color:"white"}}>
                    <h1>Hello</h1>
                </div>
            </div>
        )
    }
}
