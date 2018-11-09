const express = require('express');
const path= require ('path');
const app = express(); 
const Order=express();
app.get('./Order',(req,res)=>{
	res.sendFile(path.join(__dirname+'/Order.html'));
});

app.listen(8080/Order);