import React from 'react'
import firebase from 'firebase'
import {Link, Route} from 'react-router-dom'

export default class productCard extends React.Component {
    constructor(props){
        super(props)
    }
    handleClickAdd = (e) =>{
        let Basket_product = {
            id : e.target.id
        }
        let databaseRef = firebase.database().ref('/Basket_Products')
        databaseRef.push({ Basket_product })
        alert("Added to basket success")
    }
    render() {
        return (
            <div>
                <div class="card">
                    <img src="https://store.ais.co.th/media/catalog/product/i/p/iphonexr-red-pureangles-1_4.jpg" className="card-img w-75" style={{margin:"auto"}} alt="..."></img>
                        <div class="card-body">
                            <h5 class="card-title">{this.props.filesMetadata.name}</h5>
                            <p class="card-text">{this.props.filesMetadata.detail}</p>
                            <p className="card-text">{this.props.filesMetadata.price}</p>
                            <p className="card-text">{this.props.filesMetadata.contact}</p>
                            <p className="card-text">{this.props.filesMetadata.owner}</p>
                            <button className="btn btn-info w-100" id={this.props.filesMetadata.id} onClick={this.handleClickAdd}>Add to cart</button>
                            <Link to="product/detail_product"><button className="btn btn-primary w-100 mt-2">Buy</button></Link>
                        </div>
                </div>
            </div>
        )
    }
}
