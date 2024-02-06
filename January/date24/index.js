// Amazon
// function getProduct (n) {
//     var arr = ["earphone", "headphone", "ipad"];
//     if (n < 0) {
//         return null;
//     }
//     return arr[n];
// }
// var result = getProduct(1);
// if (result == null) {
//     console.log("Invalid Input");
// }else{
//     console.log(result);
// }


// Objects
// var user = {
//     name: "Rahul",
//     age: 25,
//     gender: "male",
//     city: "Bangalore",
//     hobbies: "coding",
//     marks: [25, 100, 80, 90, 80]
// };


// 1. Bracket Notation
// console.log(user["gender"]);
// console.log(user["marks"]);
// console.log(user["marks"][2]);
// console.log(user["marks"].length);


// 2. Dot Notation
// console.log(user.gender);
// console.log(user.marks);
// console.log(user.marks[2]);
// console.log(user.marks.length);


// let obj = {
//     name: "Hariram",
//     mob: 9986487524,
//     city: "jaipur",
//     state: "jaipur",
// }
// obj.dob = "24-01-2024";
// obj.marks = [24, 52, 46, 78, 25, 124, 800];

// obj.new_obj = {
//     fname: "xyz",
//     fmob: 9999998546,
//     fcity: "jaipur",
//     fmarks:[21,52,46,85,97,85,42]
// }

// console.log(obj);
// console.log(obj.new_obj.fmarks[2]);



// let obj = {
//     name: "rajasth",
//     mob: 3256487596,
//     city: "jhunjhunu",
//     state:"rajasthan"
// }

// console.log(obj);

// for (let key in obj) {
//     console.log(key,"-",obj[key]);
// }



// let person = {
//     name: 'John',
//     age: 30,
//     isStudent: false
// };

// function Person (name, age, isStudent) {
//     this.name = name;
//     this.age = age;
//     this.isStudent = isStudent;
// }

// let person1 = new Person('John', 30, false);

// console.log(person1);


// function addres (name, age, city) {
//     this.Name=name;
//     this.Age = age;
//     this.City = city;
// }

// let Address = new addres("Mohan", 25, "jaipur");
// console.log(Address);

// for (let key in addres) {
//     console.log(key,"-",addres[key]);
// }



// let parson = new Object();
// parson.name = 'homan';
// parson.city = "jaipur";
// parson.age = 25;
// parson.age = 20;
// parson["name"]="syam"
// console.log(parson.name);
// console.log(parson["age"]);


// let statement = {
//     name: "Raju",
//     city: "jaipur",
//     age: 25,
//     work_start: function () {
//         console.log("start for work");
//     },
//     work_stop: function () {
//         console.log("end for work");
//     }

// }
// statement.work_start();
// console.log(statement.work_start());



// IW Problem1
// var arr = ["Ramesh", "Suresh", "Ramesh", "Kamlesh", "Suresh", "Rupak"];

// var party = [];
// var present = false;
// for (var i = 0; i < arr.length; i++) {
//     for (var j = 0; j < party.length; j++) {
//         if (arr[i] == party[j]) {
//             present = true;
//             break;
//         }
//     }
//     if (present == false) {
//         party.push(arr[i]);
//     }
//     else {
//         present = false;
//     }
// }
// console.log(party);
// console.log(present);








var arr = ["Ramesh", "Suresh", "Ramesh", "Kamlesh", "Suresh", "Rupak"];

var party = [];
var present = false;
for (var i = 0; i < arr.length; i++) {
    for (var j = 1; j < arr.length; j++) {
        if (arr[i] == party[j]) {
            party.push(arr[i])
            console.log("hello");

        } else {
            console.log("world");
        }

    }
}
console.log(party);