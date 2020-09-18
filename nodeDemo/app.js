const express = require('express');
const app = express();
const http = require('http');

const dbConfig = require('./db.config');
const mongoose = require('mongoose');
const Employee = require('./models/employee')

// define a simple route
app.get('/', (req, res) => {
  res.send('Server is running on port : 4500')
});

app.post('/addEmployee', (req,res)=>{

    let json ={
        firstName : 'test',
        lastName :'test'
    }

        Employee.create(json, (err,result) =>{
            if(err){
                res.send({error : err})
            }else{
                res.send({data : result})
            }
        })

})

app.get('/Employees', (req,res)=>{
        Employee.find({}, (err,result) =>{
            if(err){
                res.send({error : err})
            }else{
                res.send({data : result})
            }
        })

})

// Connecting to the database
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});


// listen for requests
app.listen(4500, () => {
    console.log("Server is listening on port 4500");
});
