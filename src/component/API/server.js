const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');
const loadJsonFile = require('load-json-file');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(cors());

app.listen(8000, () =>{
    console.log("Server is running")
})

app.get('/register', (req,res) =>{
    let rawdata = fs.readFileSync('./data.json');
    let student = JSON.parse(rawdata);

})

app.post('/register', (req,res) =>{
    const Data = req.body
    const dataTojson = {
        "email" : Data.email,
        "password" : Data.password,
        "phone" : Data.phone
    }
    const jsonString = JSON.stringify(dataTojson)
    
    fs.writeFileSync('./data.json', jsonString, err => {
        if (err) {
            console.log('Error writing file', err)
        } else {
            console.log('Successfully wrote file')
            res.send(jsonString)
        }
    })
})
app.get('/login', (req,res) =>{
    let rawdata = fs.readFileSync('./status.json');
    let student = JSON.parse(rawdata);
    console.log(student)
    res.send(student)
})
app.post('/logout', (req,res) =>{
    SendStatus(false)
    function SendStatus (status){
        const Status = {
            "status" : status
        }
    
        const jsonString = JSON.stringify(Status)
        fs.writeFileSync('./status.json', jsonString, err => {
            if (err) {
                console.log('Error writing file', err)
            } else {
                console.log('Successfully wrote file')
            }
        })
    }
})
app.post('/login', (req,res) =>{
    function jsonReader(filePath, cb) {
        fs.readFile(filePath, (err, fileData) => {
            if (err) {
                return cb && cb(err)
            }
            try {
                const object = JSON.parse(fileData)
                return cb && cb(null, object)
            } catch(err) {
                return cb && cb(err)
            }
        })
    }
    jsonReader('./data.json', (err, customer) => {
        const user = req.body
        if (err) {
            console.log(err)
            return
        }
        console.log(customer.email)
        console.log(user.email) // => "Infinity Loop Drive"
        if(customer.email == user.email && customer.password == user.password){
            console.log("logined")
            SendStatus(true)
        }else{
            SendStatus(false)
        }
        jsonReader('./status.json', (err, SignInstatus) =>{
            console.log("Status json file : " + SignInstatus.status)      
        })
    })
    function SendStatus (status){
        const Status = {
            "status" : status
        }
    
        const jsonString = JSON.stringify(Status)
        fs.writeFileSync('./status.json', jsonString, err => {
            if (err) {
                console.log('Error writing file', err)
            } else {
                console.log('Successfully wrote file')
            }
        })
    }
    
})





