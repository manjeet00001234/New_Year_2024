// let arr = [1, 2, 3, 4,2, 5, 6, 7, 8, 9];
// let var_new = arr.map(function (ele) {
//     return ele;
// })
// console.log(var_new);

// let arr = ["Rahul", "Mukesh", "Ramu singh", "kelash choudhary", "Rajesh choudhary"];
// let arr=[1,2,3,4]

//  arr.reduce(function (ele,index) {
// console.log(ele+index*(2));
// })

// let str = "ram";
// let bag = "";

// for (let i=str.length-1; i>=0; i--) {
//   bag=bag+str[i]

// }
// console.log(bag);
// console.log(str.length)

// output taerg

// let data = "mohan";
// let indexOfChar = data.indexOf("a");

// if (indexOfChar !== -1) {
//     console.log("Index of 'a':", indexOfChar);
// } else {
//     console.log("'a' not found in the string");
// }
// let data = "mohan";

// for (let i = 1; i < data.length; i++) {
//     console.log(`Index of '${data[i]}': ${i}`);
// }

// let data = "mohan";
// data="sohan"
// for (let i = 0; i < data.length; i++) {
//     console.log(`Index of '${data[i]}': ${i}`);
// }

// let str = "jaipur"
// let newValue = []
// for (let i = 0; i < str.length; i++){
//     newValue.push(str[i])
// }
// newValue[0] = "S"

// let bag = ""
// for (let i = 0; i <= str.length - 1; i++){
//     bag = bag + newValue[i]
// }
// console.log(bag);

// let str = "jaipur";
// let newstr = [];
// for (let i = 0; i < str.length; i++) {
//      newstr.push(str[i]);
// }
// let bag = "";
// let bag1 = " ";
// for (let i = 0; i < newstr.length; i++) {
//      if (newstr[i] === "p") {
//           newstr[i] = "m";
//          bag = bag + newstr[i];

//      } else {

//          bag=bag+newstr[i]
//     }
// }
// console.log(bag);



// let str = "jaipur";
// let newstr = str.split("");
// let bag = "";

// for (let i = 0; i < str.length; i++){
//     if (str[i] === "p") {
//         newstr[i] = "m";
//     bag = bag+newstr[i] ;
//     } else {
//         bag = bag + newstr[i];
//     }
// }
// console.log(bag);


// let str = "rajasthan";
// for (let i = str.length-1; i >= 0; i--){
//     console.log(str[i]);
// }


// let str = "rajasthan";
// let newstr = [];
// for (let i = 0; i < str.length; i++){
//     newstr.push(str[i]);
// }
// let bag = "";
// for (let i = 0; i < newstr.length; i++){
//     if (newstr[i] == "r") {
//         newstr[i] = "T";
//         bag = bag + newstr[i];
//     } else {
//         bag = bag + newstr[i];
//     }
// }
// console.log(bag);


// let str = "Rajasthan police Rajshmand Rajgarh ramu singh";
// let newstr = str.split(" ");
// let count = 0;
// for (let i = 0; i < newstr.length; i++){
//     let str1 = newstr[i];

//     if (str1[0] == "R" || str1[0] == "r") {
//         count++;
//     }
// }
// console.log(count);


let str = "jaipur";
let bag = "";
for (let i = 0; i < str.length; i++){
    if (str[i] != "a" && str[i] != "p") {
bag+=str[i]
    }
}
console.log(bag);