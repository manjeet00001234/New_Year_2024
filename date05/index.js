// let a = 20;
// let b = 20;
// if(a==b){
//     console.log(true);
// }else{
//     console.log(false);
// }

// let gender = "female";
// let age = 25;
// if((gender=="male" && age >= 21)){
//     console.log("male marriage");
// }else if((gender=="female" && age >=18)){
//     console.log("female marriage");
// }else{
//     console.log("this is unmarriade");
// }

// let sub = "english";
// let mark = 30;

// let subjecta = "english";
// let pass_mark = 35;

// if(subjecta == sub && pass_mark <= mark){
//     console.log("pass");
// }else{
//     console.log("fail");
// }

// // Case 1 : Integers & Number's
// var a = 2;
// var b = 3;
// var c = "hello";
// console.log(a,b,c);
// console.log(a+b+c);

// // Case 2 : Integers
// var a = 2;
// var b = 3;
// console.log(a+b);
// console.log(a,b);

// // Case 3 : Strings
// var a = "Hello";
// var b = "World";
// console.log(a+b);
// console.log(a,b);

// // Case 4 : Integer with Strings
// var a = 2;
// var b = "hello";
// console.log(a,b);
// console.log(a+b);

// // Case 5 : "\n"
// var a = 2;
// var b = "hello";
// console.log(a,"\n",b);

// let palak_avalable =false;
// let panner_avalable = true;

// if( palak_avalable || panner_avalable){
//     console.log("Today, we will have a party");
// }else{
//     console.log("Today, No have a party");
// }

// one id prof avalable for purchase vichal
// let Pan_card = false;
// let Aadhar_card = true;
// let Voter_card = true;
// let Domicial_card = false;

// if((Pan_card || Aadhar_card || Voter_card || Domicial_card)){
//     console.log("Valid for vichal purchase");
// }else{
//     console.log("You are not valid ID prof for vichal purchase");
// }

// All id prof avalable for purchase vichal
// let Pan_card = true;
// let Aadhar_card = true;
// let Voter_card = true;
// let Domicial_card = false;

// if((Pan_card && Aadhar_card && Voter_card && Domicial_card)){
//     console.log("Valid for vichal purchase");
// }else{
//     console.log("You are not valid ID prof for vichal purchase");
// }

// let value = 11;
// switch (value) {
//   case 1:
//     console.log("January");
//     break;
//   case 2:
//     console.log("February");
//     break;
//   case 3:
//     console.log("March");
//     break;
//   case 4:
//     console.log("April");
//     break;
//   case 5:
//     console.log("May");
//     break;
//   case 6:
//     console.log("June");
//     break;
//   case 7:
//     console.log("July");
//     break;
//   case 8:
//     console.log("August");
//     break;
//   case 9:
//     console.log("September");
//     break;
//   case 10:
//     console.log("October");
//     break;
//     case    11:
//      console.log("November");
//     break;
//   case 12:
//     console.log("December");
//     break;
//   default:
//     console.log("Write your month name");
// }

//Q.1  Write a program that calculates the ticket price based on age with the following conditions: age below 12 pay a ticket price of 5, age below 18 pay a ticket price of 10, age below 60 pay a ticket price of 20, age over 60 play a ticket price of 15.

// let age = 80;
// if (age >= 60) {
//   console.log("ticket price of 15");
// } else if (age < 60 && age >18) {
//   console.log("ticket price of 20");
// } else if (age <= 18 && age >12) {
//   console.log("ticket price of 10");
// } else if (age <= 12) {
//   console.log("ticket price of 5");
// }

//Q.2  Write a program that calculates a discount based on the purchase amount.Prices equal or over 100 discount have a discount of 20. Prices equal or over 50 have a discount of 10. Otherwise discount is 0

// let pric = 50;
// if (pric >= 100) {
//   console.log("have a discount of 20");
// } else if (pric >= 50 && pric < 100) {
//   console.log("have a discount of 10");
// } else {
//   console.log("discount is 0");
// }

// Q.3 Write a simple number guessing game.Provide a secret number and a guess.Based on those numbers give players clues if their guess is higher, lower or correct.

// let num = 50;
// let res_value = 20;
// if (res_value < num) {
//   console.log("You'r guessing value is higher");
// } else if (res_value == num) {
//   console.log("You'r guessing value is Right");
// } else if (res_value > num) {
//   console.log("You'r guessing value is  Lower");
// } else {
//   console.log("please try agen");
// }

// Q.4  Write a program that calculates the Body Mass Index(BMI) and categorizes it.The formula for BMI is: weight / (height * height).

// print
// Underweight category BMI ===20-30
// Normal weight category BMI ==31-40
// Over weight category BMI  above==41
// default condition you are Obese

// let weight = 70; // weight in kg
// let height = 6; //height in foot
// let height1 = height * 0.3048;
// let res = weight / (height1 * height1);
// console.log(res);

// if (res >= 20 && res <= 30) {
//   console.log(`Category is Underweight and bmi is ${res}`);
// } else if (res >= 31 && res <= 40) {
//   console.log(`Category is Normal weight and bmi is ${res}`);
// } else if (res >= 41) {
//   console.log(`Category is Over weight and bmi is ${res}`);
// } else {
//   console.log("you are obese");
// }

// 
