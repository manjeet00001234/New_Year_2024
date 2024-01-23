// function five_even (num) {
//     let count = 0;
//     for (i = num; count < 5; i++){
//         if (i % 2 == 0) {
//             count++;
//             console.log(i);
//         }
//         // if (count == 5) {
//         //     break;
//         // }
//     }
// }
// five_even(20);


// let a = "rajasthan police jaipur";
// for (i = 0; i < a.length; i++){
//     console.log(a);
// }

// let a = "";
// for (i = 0; i <= 2; i++){
//     for (i = 0; i <= 2; i++){
//         a=a+"*"
//         console.log(a);
//     }
//     // console.log("hello");
// }



// for (let i = 1; i <= 5; i++){
//     let fild = "";
//     for (let j = 0; j <= 5; j++){
//         fild = fild + "*";
//     }
//     console.log(fild,`fild ${i}`);
// }


// for (let row = 5   ; row >= 1; row--){
//     let bag = "";
//     for (col = 1; col <= row; col++){
//         bag = bag + "*";
//     }
//     console.log(bag);
// }


// for (i = 0; i <= 5; i++){
//     for (j = 0; j < i; j++){
//         // console.log(i);
//         console.log(i,j);
//     }
// }




// for (i = 5; i > 0;i--){
//     console.log(i);
// }


// let num = 5;
// for (i = 1; i <= num; i++){
//     let bag = "";
//     for (j = 1; j <= num; j++){
//         if (j == 1 || j == 5) {
//             bag = bag + "*";
//         } else if(i==1 || i==5){
//             bag = bag + "*";
//         } else {
//             bag = bag + "-";
//         }
//     }
//     console.log(bag);
// }



// let num = 15;
// for (i = 1; i <= num; i++){
//     let bag = "";
//     for (j = 1; j <= num; j++){
//         if (i == 1 || i == 3 || i == 5) {
//             bag = bag + "*";
//         } else if (i==2 && j==1) {
//             bag=bag+"*"
//         } else if (i==4 && j==num) {
//             bag=bag+"*"
//         }
//         else {
//             bag=bag+" "
//         }
//     }
//     console.log(bag);
// }


// let num = 5;
// for (i = 1; i < num-1; i++){
//     let bag = "";
//     for (j = 1; j <= num; j++){
//         if (i == 1 && j == Math.ceil(num / 2)) {
//             bag = bag + "*";
//         } else if (i == 2 && (j > 1 && j < num)){
//             bag = bag + "*";
//         } else if (i == 3) {
//             bag = bag + "*";
//         }
//         else {
//             bag=bag+" "
//         }
//     }
//     console.log(bag);
// }


let a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let val = 2; 
for (i = 0; i <= a.length - 1; i++){
    if (i == val) {
        break;
    }
    console.log(a[i]);
}

