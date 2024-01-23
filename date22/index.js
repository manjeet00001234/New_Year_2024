// let arr = ["suhail", "Manjeet", "Sunil", "samrat", "aman", "amar", "suhail", "amar"]
// let arr=[1,2,3,4,5,60,7,8,9,12,18,89,25,36]
// let data = arr.filter(function (ele) {
//     return ele!==2 && ele!==4
// })
// console.log(data)

// arr.forEach(function (ele) {
//     let data=ele%2==0
//     console.log(data)
// })

// let resultArray = arr.filter(function (ele) {
//     console.log(ele);
//     return ele % 2 == 0;
// });
// console.log(resultArray)
// const array = [1, 2, 3, 4, 7, 6, 7,4,];
// const testBoolean = array.every(m => m >= 8);
// console.log(testBoolean);

let students = [
    {
        firstName: 'Johnny',
        lastName: 'Lee',
        age: 20,
        marks:78
    },

    {
        firstName: 'Anna',
        lastName: 'Zax',
        age: 19,
        marks: 50

    },

    {
        firstName: 'Zion',
        lastName: 'Sanches',
        age: 22,
        marks: 90

    },
    {
        firstName: 'Zionl',
        lastName: 'Sanchesl',
        age: 28,
        marks: 25

    }
];

let newValue = students.sort((a, b) => {
    return a.age-b.age
})
console.log(newValue);