import React, { Component } from 'react'
import firebase from 'firebase'
import {Link, Switch ,Route} from 'react-router-dom'
import Supplier_products from './Supplier_product'


export default class UploadSupplier extends Component {
    constructor(props){
        super(props)
        this.state = {
            Name : '',
            Detail : '',
            Price : '',
            Contact : '',
            Owner : '',
            Product : []
        }
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
        const databaseRef = firebase.database().ref('/Data_supplierProduct');
        databaseRef.on('value', snapshot => {
            let data = snapshot.val()
            let key = Object.keys(data)
            for( var i = 0; i < key.length; i++){
                var k = key[i]
                var Data_product = {
                    Data : data[k].Data_product,
                    Keys : key[i],
                    No : i+1
                }
                this.setState({
                    Product : this.state.Product.concat(Data_product)
                })
            } 
        });
    }
    handleChangeName = (e) =>{
        this.setState({
            Name : e.target.value
        })
    }
    handleChangeDetail = (e) =>{
        this.setState({
            Detail : e.target.value
        })
    }
    handleChangePrice = (e) =>{
        this.setState({
            Price : e.target.value
        })
    }
    handleChangeContact = (e) =>{
        this.setState({
            Contact : e.target.value
        })
    }
    handleChangeOwner = (e) =>{
        this.setState({
            Owner : e.target.value
        })
    }
    handleClicked = (e) =>{
        let Data_product = {
            nameProduct : this.state.Name,
            detailProduct : this.state.Detail,
            priceProduct : this.state.Price,
            contactProduct : this.state.Contact,
            ownerProduct : this.state.Owner
        }
        let databaseRef = firebase.database().ref('/Data_supplierProduct');
        databaseRef.push({  Data_product });
        alert("Add Data success")
        window.location.reload()
    }
    handleAbout = (e) =>{
        
    }
    handleDelete = (e) =>{
        var firebaseRef = firebase.database().ref(`/Data_supplierProduct/${e.target.id}`)
        firebaseRef.remove().then(function(){
            window.location.reload()
            alert("Remove success!!!")
            
        })
    }
    handleAdd = (e) => {
        let Basket_product = {
            id : e.target.id
        }
        let databaseRef = firebase.database().ref('/Basket_Products')
        databaseRef.push({ Basket_product })
        alert("Added to basket success")
    }
    render() {
        return (
            <div className="container pt-4">
                <h2>Upload product for supplier</h2>
                <table class="table">
                <thead class="thead-dark">
                <tr>
                <th scope="col">No</th>
                <th scope="col">Name</th>
                <th scope="col">Detail</th>
                <th scope="col">Price</th>
                <th scope="col">Contact</th>
                <th scope="col">Owner</th>
                <th scope="col">Click to Datail</th>
                <th scope="col"> Delete</th>
                </tr>
                </thead>
                {this.state.Product.map((Products) =>(
                    <tbody>
                        <tr>
                        <th scope="row">{Products.No}</th>
                        <th>{Products.Data.nameProduct}</th>
                        <th>{Products.Data.detailProduct}</th>
                        <th>{Products.Data.priceProduct}</th>
                        <th>{Products.Data.contactProduct}</th>
                        <th>{Products.Data.ownerProduct}</th>
                        <th>
                            <Link to={{
                                pathname: `/uploadData/Product_supplier/${Products.Keys}`,
                                Data:{
                                    key : Products.Keys
                                }
                            }}>
                                <button id={Products.Keys} onClick={this.handleAbout} className="btn btn-primary">About</button>
                            </Link>
                        </th>
                        <th>
                            <button id={Products.Keys} onClick={this.handleDelete} className="btn btn-danger">Delete</button>
                        </th>
                        </tr>
                    </tbody>
                ))}
                
                </table>
                <div class="form-group">
                    <label for="exampleInputEmail1">Name Product</label>
                    <input onChange={this.handleChangeName} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Datail</label>
                    <input onChange={this.handleChangeDetail} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Price</label>
                    <input onChange={this.handleChangePrice} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Contact</label>
                    <input onChange={this.handleChangeContact} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Owner</label>
                    <input onChange={this.handleChangeOwner} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                </div>
                <button onClick={this.handleClicked} className="btn btn-primary mt-2">Add</button>
            </div>
        )
    }
}
