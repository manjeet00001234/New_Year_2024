// Q.1


// let even = 0;
// while (even <= 30) {
//     console.log(even);
//     even = even +2
// }

// Q.2

// let odd = 1;
// while (odd<= 13) {
//     console.log(odd)
//     odd=odd+2
// }

// Q.3
// let even1 = 1;
// let num = 10;
// let even_sum = 0;
// while (even1 <= num) {
//     even_sum = even_sum+even1
//     even1 =even1+2
// }
// console.log(even_sum);

// Q.4

// let odd1 = 1;
// let num = 9;
// let odd_sum = 0;
// while (odd1 <= num) {
//     odd_sum = odd_sum+odd1
//     odd1 =odd1+2
// }
// console.log(odd_sum);



// Q.1 even number
// let a = 0;
// let num = 10;
// while (a <= num) {
//     if (a % 2==0) {
//         console.log(a);
//     }
//     a++;
// }


// Q.2 odd number
// let a = 0;
// let num = 10;
// while (a <= num) {
//     if (a % 2==1) {
//         console.log(a);
//     }
//     a++;
// }



// Q.3 even sum
// let a = 1;
// let num = 10;
// let sum = 0;
// while (a <= num) {
//     if (a % 2 == 0) {
//         sum = sum + a;
//     }
//     a++;
// }
// console.log(sum);


// Q.4 odd sum
// let a = 1;
// let num = 5;
// let sum = 0;
// while (a <= num) {
//     if (a % 2 == 1) {
//         sum = sum + a;
//     }
//     a++;
// }
// console.log(sum);



// Question 1:
// Write a JavaScript program using a while loop to print the numbers from 1 to 10.

// let num = 1;
// let num_end = 10;
// while (num <= num_end) {
//     console.log(num);
//     num++
// }


// Question 2:
// Implement a JavaScript function that uses a while loop to find and print the factorial of a given number.

// let num = 5;
// let a = 1;
// while (0 < num) {
//     a = a * num;
//     num--;
//     console.log(a);
// }

//     Question 3:
// Create a JavaScript program using a while loop to print the first 5 even numbers.


// let a = 0;
// let b = 8;
// let c = 0;
// while (a <= b) {
//     c = a;
//     console.log(c);
//     a = a + 2;
// }

//     Question 4:
// Write a JavaScript function that takes a number as input and uses a while loop to check if it is a prime number.


// function isPrime (number) {
//     if (number <= 1) {
//         console.log(false);  // 1 and numbers less than 1 are not prime
//     }


//     let divisor = 2;

//     // Use a while loop to check for factors until the square root of the number
//     while (divisor <= Math.sqrt(number)) {
//         if (number % divisor === 0) {
//             console.log(false); // If the number is divisible by any other number, it's not prime
//         }
//         divisor++;
//     }

//     console.log(true); // If no factors were found, the number is prime
// }

// isPrime(100);


//     Question 5:
// Develop a JavaScript program with a while loop that reverses a given string and prints the reversed string.

// function reverseString (inputString) {
//     let reversedString = "";
//     let index = inputString.length - 1;

//     // Use a while loop to iterate through the characters in reverse order
//     while (index >= 0) {
//         reversedString += inputString.charAt(index);
//         index--;
//     }

//     console.log(reversedString);
// }

// reverseString("hello wo");


// let num = 1;
// let num_end = 5;
// let count = 0;
// while (num <= num_end) {
//     count = count + num;
//     num=num+2
// }
// console.log(count);