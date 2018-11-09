var modal = document.getElementById('id01');

modal.onclick = function() {
    document.write("Hey, what are you doing?");
    };

var modal = document.getElementById('id02');

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    };
};


let result=document.getElementById("result");
let button=document.getElementById("priceCheck");
button.onclick=()=>{
	let input =document.querySelectorAll(".enteredNumber");
		let totalQuotes=0;
		for(let item of input){
			let newValue= parseFloat(item.value);
			totalQuotes+=newValue;
			if(item.value ==="" || newValue<=0){
				result.innerHTML=`Enter the weight of the courier`;					
				return false;
			};
};
       result.innerHTML=`The price is ${totalQuotes*100}RWF`;
};





 let addparcel=document.getElementById("addingchecker");
 addparcel.onclick=()=>{
 	let div=document.createElement("div");
 	let price=document.getElementById("price");
 	div.innerHTML=`<div class='textbox'>
 	<input type ="text" name="" placeholder="Courier description please"
 	</div>
 	<div class='textbox'>
 	<input type ="Country" name="" placeholder="Collection location">
 	<input type="text" name="" placeholder="Delivery location">
 	</div>
 	<div class='textbox'>
 	  <input type="number" name="" placeholder="weight" class='enteredNumber'>
 	  </div>
 	  `;
 	  price.appendChild(div);
};


















