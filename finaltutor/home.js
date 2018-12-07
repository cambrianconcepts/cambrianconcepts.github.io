/*
document.getElementById('my_shopping_cart').innerHTML = 
"IPhone x2: $600 <br>";

document.getElementById('my_shopping_cart').innerHTML = 
document.getElementById('my_shopping_cart').innerHTML +
"IPhone x2: $600 <br>";

*/

var myCarts = []; 
var totalPayable = 0; 

var myCarts = [];
var totalPayable = 0; 
function addToCart(exPrice, exProductName){
    var myQuantity = document.getElementById("quantity").value;
    var price = exPrice; // means price is now mapping from exPrice variable
    var productName = exProductName; 
    var totalPrice = parseInt(myQuantity) * price; //to turn into integer, require to use parseInt
    var item = productName + " x" + myQuantity + " : $" + totalPrice; 

    var totalPayable = totalPayable + totalPrice; 

    myCarts.push(item); 
    
    //display it: 
    document.getElementById("my_shopping_cart").innerHTML = ""; 
    for( var a = 0 ; a < myCarts.length ; a++) {
        var currItem = myCarts[a]; 
        var currResult = document.getElementById("my_shopping_cart").innerHTML; //innerHTML used where string in html is not an Inputvalue but Div
        
        document.getElementById("my_shopping_cart").innerHTML = currResult + currItem; 
    }

//display total payable
 document.getElementById("totalPayable").value = totalPayable; 

}