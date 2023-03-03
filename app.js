const express = require('express');
const app = express();
const mongoose = require('mongoose');
//conneting to mangodb
const dbman = 'mongodb+srv://mhemanth02reddy:<630248>@cluster0.g8uw9bb.mongodb.net/netninja?retryWrites=true&w=majority';
mongoose.connect(dbman,{userNewUrlParser: true,useUnifiedTopology:true})
   .then((result)=> console.log('connected to db'))
   .catch((err)=> console.log(err))
//listen for request
app.listen(3000);
app.get('/',(req,res)=>{
   //res.send('<p> home page</p>')
   res.sendFile('index.html',{root: __dirname});
});
app.get('/about',(req,res)=>{
    //res.send('<p> about page</p>')
    res.sendFile('about.html',{root: __dirname});
 });
 app.get('/about-us',(req,res)=>{
    res.redirect('about');
 });
 app.use((req,res)=>{
    res.status(404).sendFile('404.html',{root: __dirname})
 });