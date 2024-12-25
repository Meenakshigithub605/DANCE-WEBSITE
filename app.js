const express=require("express");
const path=require("path");
const exp = require("constants");
const app=express();
const port=8000;


//EXPRESS SPECIFIC STUFF
app.use('/static',express.static('static'));
app.use(express.urlencoded());

//PUG SPECIFIC STUFF
app.set('view engine','pug');//set the view engine as pug
app.set('views',path.join(__dirname,'views'));

//ENDPOINTS
app.get('/',(req,res)=>{
    const con="This is best content on internet so far so use it wisely";
    const params={};
    res.status(200).render('home.pug',params);
})
app.get('/contact',(req,res)=>{
    const params={};
    res.status(200).render('contact.pug',params);
})
app.get('/about',(req,res)=>{
    const con="This is best content on internet so far so use it wisely";
    const params={};
    res.status(200).render('about.pug',params);
})

//START THE SERVICE
app.listen(port,()=>{
    console.log(`The app started successfully on port ${port}`);
})