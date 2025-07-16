var val=67;
let val2=37;
//console.log(val);
//console.log("45" == 45);
//console.log("45" == 45);

const prompt=require("prompt-sync")();

//let age=prompt("Enter the age:");
let urName=prompt("Enter your name:");
let clg=prompt("Enter your clg name:");
console.log(age);
console.log(clg);
console.log(urName);
var age=prompt("enter the age");
if(age>=70){
    console.log("retired");
}
else{
    console.log("working");
}
//const prompt =require('prompt-sync')();
let subjectName = prompt("Enter the subject name:");
let marksInput = prompt("Enter marks for" + subjectName + ":");
let marks = parseInt(marksInput);

let grade ="";
if(marks === 100) {
    grade = "First grade";
}
else if (marks >= 70) {
    grade = "Second grade";
}
else if (marks >=60) {
    grade = "Third grade";
}
else {
    grade = "Fail";
}