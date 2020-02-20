import React, { Component } from 'react'
import firebase from 'firebase'

export default class basketCard extends Component {
    constructor(props){
        super(props)
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
                        </div>
                </div>
            </div>
        )
    }
}
