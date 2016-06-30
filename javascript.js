// this is a popup alert
alert ("this is an alert message")

// this is a console message
console.log("this is a console message")

// this is a way to change text
function change() {
	document.getElementById( "text" ).innerHTML = "This is exactly what javascript can do";
}

// this is a way to exemplify what javascript can do
function addNums(){   num1 = document.getElementById('num1').value;   num2 = document.getElementById('num2').value;   document.getElementById('result').innerHTML = (parseInt(num1) + parseInt(num2)); }

// this is a variable string data type
var name = "Kyu";

// this is a variable number data type
var numberOfPies = 10;

// this is a variable boolean data type
var iLikePies = true;

// there are also undefined variable types

// arrays hold a collection of data, of any data types
["Kyu", "Taek", "Hwang"];

// arrays can hold multiple data types
[10, 20, "Kyu", "Taek"];

// arrays can also be stored in variables
var full_name = ["Kyu", "Taek", "Hwang"];

// an array can store other arrays called multidimensional array

var full_name = ["Kyu", "Taek", "Hwang"];
var favorite_food = ["Noodles", "Chicken"];

var profile = [full_name, favorite_food];

//debugging on console, arrayception
console.log(full_name[0], favorite_food[1]);

// data type array, keys definition
var full_name = {first: "Kyu", last: "Hwang"};

//debugging on console
console.log(full_name.last);