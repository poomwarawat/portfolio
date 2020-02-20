import React, { Component } from 'react'
import firebase from 'firebase'

export default class Supplier_product extends Component {
    constructor(props){
        super(props)
        this.state = {
            name : '',
            detail : '',
            price : '',
            contact : '',
            owner : '',
            id : ''
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
    componentDidMount(){
        var handle = this.props.match.params
        var Data_add = handle.id
        this.setState({
            id : Data_add
        })     
    }
    getMetaDataFromDatabase () {
        var handle = this.props.match.params
        var Data_add = handle.id
        console.log(Data_add)
        const databaseRef = firebase.database().ref(`/Data_supplierProduct/${Data_add}`);
        databaseRef.on('value', snapshot =>{
            let data = snapshot.val()
            let Detail = data.Data_product
            console.log(Detail)
            this.setState({
                name : Detail.nameProduct,
                detail : Detail.detailProduct,
                price : Detail.priceProduct,
                contact : Detail.contactProduct,
                owner : Detail.ownerProduct
            })
        })
    }
    handleClicked = (e) =>{
        window.location.href = "/uploadData/uploadProduct_Supplier"
    }
    render() {
        return (
            <div className="container-fluid p-4">
                <h2>{this.state.id}</h2>
                <h2>{this.state.name}</h2>
                <h2>{this.state.detail}</h2>
                <h2>{this.state.price}</h2>
                <h2>{this.state.contact}</h2>
                <h2>{this.state.owner}</h2>
                <button className="btn btn-primary" onClick={this.handleClicked}>Back</button>
            </div>
        )
    }
}
