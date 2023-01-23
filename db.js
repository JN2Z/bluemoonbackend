const mongoose = require("mongoose");

var mongoDBURL = 'mongodb+srv://admin:admin@cluster0.9cbq1dr.mongodb.net/blue-moon?retryWrites=true&w=majority'


mongoose.connect(mongoDBURL , {useUnifiedTopology:true , useNewUrlParser:true})

var dbconnect = mongoose.connection

dbconnect.on('error' , ()=>{
    console.log(`Mongo DB Connection Failed`);
})

dbconnect.on('connected' , ()=>{
    console.log(`Mongo DB Connection Successfull`);
})

module.exports = mongoose