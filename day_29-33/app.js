let age = 32;

let name = "Hi I am JavaScript";

let hobbies = ["coding", "reading", "gaming"];

let job = {
title: "Developer",
place:"Istanbul",
salary: 5000
};

let adultYears;

function calculateAdultYears(userAge){
   return userAge -18;
   
}


console.log(calculateAdultYears(age)); 
age =45;

console.log(calculateAdultYears(age));


let person = {
   name: "John",
   greet(){
      console.log("Hi, I am " );
   }
}

person.greet();