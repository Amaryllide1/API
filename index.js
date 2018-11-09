const express=require('express');
const http= require('http');
const path = require('path');
const expressvalidator=require('express-validator');
const bodyparser=require('body-parser');
const app= express();
app.use(bodyparser.json());

// Mock data
const parcels=[
{id:1, Username:'Uwimana', CollectionLocation:'Uganda', DeliveryLocation:'Burundi', Weight:4, Price:400, status:'Delivered'},
{id:2, Username:'Solange', CollectionLocation:'Rwanda', DeliveryLocation:'Kenya', Weight:5, Price:500, status:'In Transit'},
{id:3, Username:'Kamikazi', CollectionLocation:'South Africa', DeliveryLocation:'Rwanda', Weight:7, Price:700, status:'Not Delivered'},
{id:4, Username:'Didier', CollectionLocation:'Ghana', DeliveryLocation:'SouthAfrica', Weight:6, Price:600, status:'Delivered'},
];

// Routes
app.get('/',(req,res)=>{
	res.sendFile(path.join(__dirname+'/index.html'));
});
app.get ('/signup',(req,res)=>{
	res.sendFile(path.join(__dirname+'/sign.html'));
});
app.get ('/User',(req,res)=>{
	res.sendFile(path.join(__dirname+'/User.html'));
});
app.get ('/Admin',(req,res)=>{
	res.sendFile(path.join(__dirname+'/Admin.html'));
});
app.get ('/Order',(req,res)=>{
	res.sendFile(path.join(__dirname+'/Order.html'));
});
app.get('/api/parcels',(req,res)=>{
	return res.send(parcels);
});

app.post ('/api/parcels',(req,res)=>{
	const id=parcels.length+1;
	const Username=req.body.Username;
	const CollectionLocation=req.body.CollectionLocation;
	const DeliveryLocation=req.body.DeliveryLocation;
	const weight=req.body.weight;
	const price=parseFloat(weight)*100;
	const status=req.body.status;
	const createParcel={
		id,Username,CollectionLocation,DeliveryLocation,weight,price,status
	}
});
// if (!(weight) || !(price)){
// 	res.send("Please, Enter an integer weight in order to get the Price")
// }else{
// 	parcels.push(createParcel);
// 	res.send(createParcel);
// };

app.get('/api/parcels/:id',(req,res)=>{
	const parcel=parcels.find(c=>c.id===parseInt(res.params.id));
	if(!parcel){
		return res.status(404).send('this user is not found');
	}
	return res.send(parcel);
});
app.get('/api/user/:Username',(req,res)=>{
	const User=parcels.find(c=>c.Username===toString(req.params.Username));
	if(!user){
		return res.status(404).send ('The username is not found');}
		else{ res.send(User);}
	});
app.put('/api/parcels/:id/cancel',(req,res)=>{
	const UpdateOrders=parcels.find(c=>c.id.parseInt(req.params.id));
	parcels.remove(id);
	if(!UpdateOrders){return res.status(404).send('There is no such Id');}
	UpdateOrders.Username=req.body.Username;
	res.send(UpdateOrders);

});
const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Server started on ${port}`);
});
