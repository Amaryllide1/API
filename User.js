const express=require('express');
const http= require('http');
const path = require('path');
const app= express();
const router=express.Router();
router.get('/parcels', findAll);
router.get('/parcels/:id', findById);
router.post('/parcels', createParcel);
router.put('/parcels/:id', updateParcel);
router.put('/parcels/:id/cancel', cancelParcel);

app.get ('.Route./api./User',(req,res)=>{
    res.sendFile(path.join(__dirname+'/User.html'));
});
app.get ('.Route./api./parcel'),(req,res)=>{
	res.sendFile(path.join(__dirname+''))
}
let Tocancel=document.getElementsByClassName('Cbutton');
for(let button of Tocancel) {
button.onclick=()=>{
	let start = button.parentNode.parentNode;
	let status = start.children[4].innerHTML;
	if (status === "<b>Not Delivered</b>"){
		let end=start.parentNode;
		end.removeChild(start);
	}else{
		alert("Nop!, You can't cancel this. It's Delivered or In Transit")
	};
};
};
const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Server started on ${port}`);
});