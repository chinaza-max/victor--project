const express=require('express');
const http=require('http');
const path=require('path');
const app=express();
const port=3000;
const server=http.createServer(app);

app.set('view engine','ejs');
app.use('/static',express.static('public'));
app.get('/',function(req,res){
    res.sendFile(path.join(__dirname,'/home.html'));
});

app.get('/about',(req,res)=>{
    res.sendFile(__dirname+'/about.html');
})
app.get('/pricing',(req,res)=>{
    res.sendFile(__dirname+'/pricing.html');
})
app.get('/pricing',(req,res)=>{
    res.render('succcess',"{your success massage}");
})
server.listen(port,()=>{
    console.log("working on port 3000")
})