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



// let arr = [1, 200, 30, 40, 5, 6, 7];
// let min = Infinity;
// for (i = 0; i < arr.length; i++) {
//     if (arr[i] <= min) {
//         min = arr[i];
//     }
// }
// console.log(min);



// const map1 = new Map();
// map1.set('a', 1);
// map1.set('b', 2);
// map1.set('c', 3);

// console.log(map1.get('a'));
// // Expected output: 1

// map1.set('a', 97);

// console.log(map1.get('a'));
// // Expected output: 97

// console.log(map1.size);
// // Expected output: 3

// map1.delete('b');

// console.log(map1.size);
// // Expected output: 2


let a = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let b = a.map((ele) => {
    return ele*2
})
console.log(b, "line-59")

function map_methode (value) {
    return value;
}
console.log(map_methode(b,"line-64"));
