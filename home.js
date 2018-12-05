var my_name; 
var my_age;
var my_birthday;

my_name = "stackup";
my_age = 40;
my_age = "1/3/1984";


console.log(my_name);   
console.log(my_age);
console.log(my_birthday);

var my_address = "JTC LaunchPad";

var my_test;

console.log( typeof(my_test) );
console.log( typeof(my_name) );
console.log( typeof(my_name) );

var firstName;
var lastName;

firstName = "John";
lastName = "Doe";
space = " ";

var fullName = firstName + space + lastName;

console.log(fullName);

  var myHtmlValue;
  myHtmlValue = document.getElementById("my_name").value; // Get the element with id="my_name"
  console.log(myHtmlValue); 

// this is new function

  function calculate(myLocation, myLocation2, myLocation3) {    
      var myName = "This is Stackup at" + "" + myLocation + "" + myLocation2; // Get the element with id="my_name"
      console.log(myName); 
    }

  calculate("One North", "JTC Launchpad");
  calculate("test","test");

  // this is new function

  function getMyFullName(){
    var firstName = "stackup";
    var lastName = "One North";
    var fullName = firstName + "" + lastName; 
    return fullName;
  }

  // this is new function

  var getMyFullName = getMyFullName();
  console.log(getMyFullName);

    // this is new function 

     

  function greet(firstName, lastName, bornYear) {
        var age = 2018 - bornYear;
        var greetings= "Hello, Omega Moonlanding" + firstName + "" + lastName + "" + age;
      console.log(greet)
  }

  greet("michael","jordan", 1988);
  greet("michael","jackson", 1988);
  greet("michael","wong", 1988);

  function testMe(){
    alert("hi you hit the button");

  }

  // Day 7 

  // to get value of html element
//document.getElementById("firstNumber"), value;
  
// to display value 
//document.getElementById("Result"), value = "";

function calculateseven(firstName, lastName, bornYear) {
  var firstNumber;
  var secondNumber;
  var total;
 
//the below defines the variable of the above by calling to get value from Element in tml 
first_number = document.getElementById("firstNumber").value;
second_number = document.getElementById("secondNumber").value;

total = parseInt(first_number) + parseInt(second_number);

document.getElementById("result").value = total;

}