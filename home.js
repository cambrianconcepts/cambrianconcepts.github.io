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
  myHtmlValue = document.getElementById("my_name").value;
  console.log(myHtmlValue); 

// Location 

  function calculate(myLocation, myLocation2, myLocation3) {    
      var myName = "This is Stackup at" + myLocation;
      console.log(myName); 
    }

  calculate("One North", "JTC Launchpad");
  calculate("test","test");

  // this is a function 

  function getMyFullName(){
    var firstName = "stackup";
    var lastName = "One North";
    var fullName = firstName + "" + lastName; 
    return fullName;
  }

  // this is 

  var getMyFullName = getMyFullName();
  console.log(getMyFullName);