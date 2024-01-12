// let arr = [1, 2, 3, 4, 5, 6, 7];
// let max;
// for (i = 0; i < arr.length; i++){
//     if (arr[i] >= arr[i + 1]) {
//         max = arr[i];
//     }
// }
// console.log(max);

// let arr = [1, 200, 30, 40, 5, 6, 7];
// let max=-Infinity;
// for (i = 0; i < arr.length; i++) {
//     if (arr[i] >= max) {
//         max = arr[i];
//     }
// }
// console.log(max);



let arr = [1, 200, 30, 40, 5, 6, 7];
let min = Infinity;
for (i = 0; i < arr.length; i++) {
    if (arr[i] <= min) {
        min = arr[i];
    }
}           
console.log(min);