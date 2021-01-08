
 products = [
    {name:'CremeBrule', price:0.750, quantity:0 },
    {name:'Oreo', price:0.5, quantity:0 },
    {name:'Dates', price:0.5, quantity:0 }
   ]
  
 let cart = [];
 
 
 function addToCart(index){
     let product = products[index];
     let q = document.getElementById(index).value;
     product.quantity = q;
     cart.push(product);
     document.getElementById("list").innerHTML = "";
     let Total = 0;
     
     for (let index = 0; index < cart.length; index++) {
         let element = cart[index];
         let p = element.price * element.quantity
         Total = Total + p ;     
         let list = document.getElementById("list");
         list.innerHTML += `<li> ${element.quantity}  ${element.name} for ${element.price} </li>`;   
     }
      
     document.getElementById("total").innerText = `Total: ${Total} KD`;
 }