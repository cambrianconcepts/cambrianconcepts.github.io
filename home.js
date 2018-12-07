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
operator = document.getElementById("operator").value;

if(operator == "+"){
  total = parseInt(first_number) + parseInt(second_number);
}

else if(operator == "-"){
  total = parseInt(first_number) - parseInt(second_number);
}

else if(operator == "+"){
  total = parseInt(first_number) / parseInt(second_number);
}

else if(operator == "+"){
  total = parseInt(first_number) * parseInt(second_number);
}

document.getElementById("result").value = total;
}

//creation of conditional logic

var greet = "afternoon";
if(greet == "morning"){
console.log("This is Morning"); // if greet==morning, then console.log executes this line, if false move to next step
}

else if(greet == "afternoon"){
  console.log("This is Morning"); 
}

else if(greet == "evening"){
  console.log("This is Morning");
}

else if(greet == "evening"){
  console.log("This is Morning");
}

else{
  console.log("This is Morning");
}


// primeNumber

var greetings = ["Morning", "Afternoon", "Evening"]; 
console.log(greetings);
console.log(greetings.length);

console.log(greetings [1]);
console.log(greetings [2]);
console.log(greetings [3]);

var primeNumber = [1, 3, 5, 7, 9, 13]; 
console.log(primeNumber.length - 1);

// looping 

var step = 0;
while( step < primeNumber.lenghth ){  
  console.log(step); 
  step = step + 1; 
}

var number = [1,2,3,4,5,6,7,8,9,10];

//if number -> "Even number"
//not even number
// while + if else

step = 0;
while( step <number.length){  
  var isEven = number[step] % 2;

  if(isEven == 0) { 
    console.log(number[step] + "is even number"); 
  } else {
    console.log(number[step] + "is not even number");
  }
  
  step = step + 1;
  }
  

  var numbers_2 = [1,2,3,4,5,6,7,8,9,10]; 
  for( var a = 0; a < numbers_2.length; a++); {
    console.log(numbers_2[a]);

  }
  var collections = []; 
  console.log(collections);
  collections.push("Test");
  console.log(collections);
  collections.push("Test 2");
  console.log(collections); 

  
  var myCollections = [ ]; 
  function addMe(){
    var myText = document.getElementById("myText").value; 
    myCollections.push(myText); // initialize and add myText as another value in the array of myCollections
    
    document.getElementById("myResult").innerHTML = ""; // empty this element. 
    for( var a = 0; a < myCollections.length ; a++){
      var currValue = myCollections[a] + "<br>";
      var currResultValue = document.getElementById("myResult").innerHTML;
      document.getElementById("myResult").innerHTML = currResultValue + currValue; 
    }
    
    //document.getElementById("myResult").innerHTML = "This in Test only";
  }
  
  var test = document.getElementById("myResult").innerHTML; 
  console.log(test);


