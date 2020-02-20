import React, { Component } from 'react'
import CardShowproduct from './ProductCard'

import firebase, { database } from 'firebase';
import {Link} from 'react-router-dom'

export default class containerProduct extends Component {
    constructor(props){
        super(props)
        this.state = {
            filesMetadata : []
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
        // if(!firebase.app.length){
        //     firebase.initializeApp(config);
        // }
        if (!firebase.apps.length) {
            firebase.initializeApp(config);
        }
    }
    componentWillMount() {
        this.getMetaDataFromDatabase()
        
      }
    handleClicktest = (e) =>{
        this.setState({
            list : this.state.list.concat(6)
        })
    }
    //โหลดข้อมูล Metadata จาก Firebase
    getMetaDataFromDatabase () {
        const databaseRef = firebase.database().ref('/Data_supplierProduct');
        databaseRef.on('value', snapshot => {
            let data = snapshot.val()
            let key = Object.keys(data)
            
            for( var i = 0; i < key.length; i++){
                var k = key[i]
                console.log(k)
                var Data = data[k].Data_product

                var Datas = {
                    name : Data.nameProduct,
                    detail : Data.detailProduct,
                    price : Data.priceProduct,
                    contact : Data.contactProduct,
                    owner : Data.ownerProduct,
                    id : k
                }
                this.setState({
                    filesMetadata : this.state.filesMetadata.concat(Datas)
                })
            }    
        });
    }

    render() {
        return (
            <div>
                <div className="container pt-4">
                    
                {/* <button className="btn btn-primary"><Link style={{color:"white"}} to="product/Upload_product">Upload Data</Link></button> */}
                <div className="row">
                    <div className="col-xs-12 col-md-3 pt-3">
                    <div class="list-group" id="list-tab" role="tablist">
                        <a class="list-group-item list-group-item-action active" id="list-phone-list" data-toggle="list" href="#list-home" role="tab" aria-controls="home">Phone</a>
                        <a class="list-group-item list-group-item-action" id="list-profile-list" data-toggle="list" href="#list-profile" role="tab" aria-controls="profile">Profile</a>
                        <a class="list-group-item list-group-item-action" id="list-messages-list" data-toggle="list" href="#list-messages" role="tab" aria-controls="messages">Messages</a>
                        <a class="list-group-item list-group-item-action" id="list-settings-list" data-toggle="list" href="#list-settings" role="tab" aria-controls="settings">Settings</a>
                        </div>
                    </div>
                    <div className="col-xs-12 col-md-9">
                        <div class="tab-content" id="nav-tabContent">
                        <div class="tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby="list-phone-list">
                            <div className="row">
                            {this.state.filesMetadata.map(filesMetadatas =>(
                                <div className="col-xs-12 col-md-4">
                                    <CardShowproduct filesMetadata={filesMetadatas}></CardShowproduct>
                                </div>
                            ))}
                                
                            </div>
                        </div>
                        <div class="tab-pane fade" id="list-profile" role="tabpanel" aria-labelledby="list-profile-list">...</div>
                        <div class="tab-pane fade" id="list-messages" role="tabpanel" aria-labelledby="list-messages-list">...</div>
                        <div class="tab-pane fade" id="list-settings" role="tabpanel" aria-labelledby="list-settings-list">...</div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}
