import React, { Component } from 'react'
import { Editor } from '@tinymce/tinymce-react';
import firebase from 'firebase';
//Import npm react-filepond
import { FilePond, File, registerPlugin } from 'react-filepond';

// Import FilePond styles
import 'filepond/dist/filepond.min.css';

// FilePond Register plugin
import FilePondImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
registerPlugin(FilePondImagePreview);
export default class uploadProduct extends Component {
    constructor(props){
        super(props)
        this.state = {
            Files : {},
            NameProduct : '',
            Price : '',
            Email : '',
            picture : '',
            messag : ''

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
    handleEditorChange = (e) => {
        console.log('Content was updated:', e.target.getContent());
      }

    handleInit() {
        // handle init file upload here
        console.log('now initialised', this.pond);
    }
    
    handleProcessing(fieldName, file, metadata, load, error, progress, abort) {
        // handle file upload here
        console.log(" handle file upload here");
        console.log(file);
        this.setState({
            Files : file
        })
        
    }
    handleUpload = (e) =>{
        console.log(this.state.Files.name)
        console.log(this.state.NameProduct)
        console.log(this.state.Price)
        console.log(this.state.Email)
        const storageRef = firebase.storage().ref(`filepond/${this.state.Files.name}`);
        const task = storageRef.put(this.state.Files)

        task.on(`state_changed` , (snapshort) => {
            let percentage = (snapshort.bytesTransferred / snapshort.totalBytes) * 100;
            //Process
            this.setState({
                uploadValue:percentage
            })
        } , (error) => {
            //Error
            this.setState({
                messag:`Upload error : ${error.message}`
            })
        } , () => {
            //Success
           
            this.setState({
                messag:`Upload Success`,
            })
            storageRef.getMetadata().then((metadata) =>{
                let metadataFile = {
                    name : metadata.name,
                    size: metadata.size, 
                    contentType: metadata.contentType, 
                    fullPath: metadata.fullPath,
                    downloadURLs: `gs://opencamera-573ed.appspot.com/filepond/${metadata.name}`,
                    ProductName : this.state.NameProduct,
                    PriceProduct : this.state.Price,
                    EmailProduct : this.state.Email
                }
                const databaseRef = firebase.database().ref('/filepond');
                databaseRef.push({  metadataFile });
                console.log("Upload success!!")
                alert("Upload success")
                window.location.reload()
            }).catch((err) =>{
                this.setState({
                    messag : `Upload error : ${err.message}`
                })
            })     
        })
        
    }
    handleNameProduct = (e) =>{
        this.setState({
            NameProduct : e.target.value
        })
    }
    handlePrice = (e) =>{
        this.setState({
            Price : e.target.value
        })
    }
    handleEmail = (e) =>{
        this.setState({
            Email : e.target.value
        })
    }
    render() {
        return (
            <div className="container pt-4">
                <FilePond allowMultiple={true}
                  maxFiles={3}
                  ref= {ref => this.pond = ref}
                  server={{ process: this.handleProcessing.bind(this) }}
                  oninit={() => this.handleInit()}>    
                </FilePond>
                
                <div class="form-group">
                    <label for="exampleInputEmail1">Product Name</label>
                    <input type="email" class="form-control" id="Email" onChange={this.handleNameProduct}></input>
                </div>
                <Editor
                apiKey='s5zpaqrpyv70h0n46hfo0xxvb6rn5ydppy7ilanfv8jasfyo'
                initialValue=""
                init={{
                height: 500,
                menubar: false,
                plugins: [
                    'advlist autolink lists link image charmap print preview anchor',
                    'searchreplace visualblocks code fullscreen',
                    'insertdatetime media table paste code help wordcount'
                ],
                toolbar:
                    'undo redo | formatselect | bold italic backcolor | \
                    alignleft aligncenter alignright alignjustify | \
                    bullist numlist outdent indent | removeformat | help'
                }}
                onChange={this.handleEditorChange}
                />
                <div class="form-group pt-4">
                    <label for="exampleInputPassword1">Price</label>
                    <input type="text" class="form-control" onChange={this.handlePrice} id="price"></input>
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Tell</label>
                    <input type="text" class="form-control" onChange={this.handleTell} id="tell"></input>
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Email</label>
                    <input type="email" class="form-control"onChange={this.handleEmail} id="exampleInputPassword1"></input>
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <button class="btn btn-primary" onClick = {this.handleUpload}>Submit</button>
                
            </div>
        )
    }
}
