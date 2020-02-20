import React, { Component } from 'react'
import firebase from 'firebase'
import BasketCard from './basketCard'

export default class basket extends Component {
    constructor(props){
        super(props)
        this.state = {
            Detail : [],
            id : [],
            ProductArea : "",
            NotFound : "none"
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
        this.getID_Basket() 
    }
    getID_Basket () {
        const databaseRef = firebase.database().ref('/Basket_Products');
        databaseRef.on('value', snapshot => {
            let data = snapshot.val()
            if (!data){
                this.setState({
                    ProductArea : "none",
                    NotFound : ""
                })
            }else{
                this.setState({
                    ProductArea : "",
                    NotFound : "none"
                })
                let key = Object.keys(data)
                for( var i = 0; i < key.length; i++){
                var keyword = key[i]
                this.setState({
                    id : this.state.id.concat(keyword)
                })
                var idBasket = data[keyword].Basket_product.id
                const idBasketRef = firebase.database().ref(`/Data_supplierProduct/${idBasket}`)
                idBasketRef.on('value', snapshot =>{
                    let data = snapshot.val()
                    let Detail = data.Data_product
                    var Details = {
                        contact : Detail.contactProduct,
                        detail : Detail.detailProduct,
                        name : Detail.nameProduct,
                        owner : Detail.ownerProduct,
                        price : Detail.priceProduct,
                        id : this.state.id[2]
                    }
                    this.setState({
                        Detail : this.state.Detail.concat(Details)
                    })
                })
            } 
            }
            
        });
    }
    handleClear = (e) =>{
        for (let index = 0; index < this.state.id.length; index++) {
            console.log(this.state.id[index])
            var firebaseRef = firebase.database().ref(`/Basket_Products/${this.state.id[index]}`)
            firebaseRef.remove().then(function(){
            window.location.reload()
            alert("Remove success!!!")
            
        })
            
        }
    }
    render() {
        const Area = {
            display : this.state.ProductArea
        }
        const Not  ={
            display : this.state.NotFound
        }
        return (
            <div>
                <div style={Not} className="container text-center" >
                    <h2 style={{padding:"15%"}}>Your cart no have product</h2>
                </div>
                <div style={Area} className="container">
                    <div className="row">
                    {
                        this.state.Detail.map((Details) =>(    
                                <div className="col-xs-12 col-md-3">
                                    <BasketCard filesMetadata={Details}></BasketCard>
                                </div>
                        ))
                    }
                    </div>
                    <div>
                    <button className="btn btn-primary w-100 mt-3">Next</button>
                    <button className="btn btn-danger w-100 mt-2" onClick={this.handleClear}>Clear</button>
                    </div>
                </div>
            </div>
        )
    }
}
