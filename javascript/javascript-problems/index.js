/*
Tips to improve your JavaScript logic:

1. Practice regularly with coding challenges (e.g., LeetCode, HackerRank).
2. Break problems into smaller steps and solve each step.
3. Use pseudocode to plan your solution before coding.
4. Read and understand others' code to learn new techniques.
5. Debug your code to understand errors and edge cases.
6. Learn and use built-in JavaScript methods (like map, filter, reduce).
7. Write clean, readable code with meaningful variable names.
8. Review basic data structures and algorithms.
9. Ask for feedback and collaborate with others.
10. Stay curious and keep learning new concepts.

Consistent practice and problem-solving will help you develop stronger logic in JavaScript.
*/











// 1.find the remainder of two number?

// let num1 = 16
// let num2 = 18

// let remainder = num2 % num1;
// console.log(" the remainder is " + remainder);










// 2.find the average of an array of numbers?

// let number = [16,18,21,9]
// let sum = 0

// for (let i = 0; i < number.length; i++){
//     sum += number[i];
// }
// let average = sum / number.length
// console.log(average);










// 3.add two matrices?

// let matrix1 = [
//     [21,9],
//     [16,18]
// ]
// let matrix2 = [
//     [2,3],
//     [20,30]
// ]
// let result = [];

// for (let i = 0; i < matrix1.length; i++){
//     result[i] = []
//     for (let j = 0; j < matrix2.length; j++){
//         result[i][j] = matrix1[i][j] + matrix2[i][j]
//         console.log("result of the matrix is :");
//         console.log(result);
//     }
// }










// 4.calculate the area of the triangle ,given its length and breadth?

// let length = 16
// let breadth = 18

// let area = length * breadth

// console.log("the area of the rectangle is " + area);










// 5.check if the given matrix is diagonal matrix?

// function isDiagonalMatrix(matrix){
// let rows = matrix.length;
// let cols = matrix[0].length;

// if (rows !== cols) {
//     return false;
// }
// for (let i = 0; i < rows; i++){
//     for (let j = 0; j < cols; j++){
//     if (i !== j && matrix[i][j] !== 0) {
//         return false;
//     }
//     }
// }
// return true;
// }

// let matrix1 = [
//     [3,0,0],
//     [0,5,0,],
//     [0,0,9]
// ];
// console.log(isDiagonalMatrix(matrix1));

// let matrix2 = [
//     [3,1,0],
//     [0,5,0],
//     [0,0,9]
// ]
// console.log(isDiagonalMatrix(matrix2));










// 6.check if the given matrix is identity matrix?

// function isIdentityMatrix(matrix){
// let rows = matrix.length
// let cols = matrix[0].length

// if (rows !== cols) {
//     return false;
// }

// for (let i = 0; i < rows; i++){
//     for(let j = 0; j < cols; j++){
//         if (i === j && matrix[i][j] !== 1) {
//             return false;
//         }
//         else if (i !== j && matrix[i][j] !== 0) {
//             return false;
//         }
//     }
// }
// return true;
// }
// let matrix1 = [
//     [1,0,0],
//     [0,1,0],
//     [0,0,1]
// ]
// console.log(isIdentityMatrix(matrix1));

// let matrix2 = [
//     [1,0,0],
//     [0,5,0],
//     [0,0,1]
// ]
// console.log(isIdentityMatrix(matrix2));

// let matrix3 = [
//     [1,0],
//     [0,1]
// ]
// console.log(isIdentityMatrix(matrix3));










// // 7.program that returns the transpose of a given matrix?

// function transposeMatrix(matrix){
// let rows = matrix.length
// let cols = matrix[0].length
// let transpose = []

// for (let i = 0; i < cols; i++){
//     transpose[i] = []
// }
// for (i = 0; i < rows; i++){
//     for (j = 0; j < cols; j++){
//         transpose[j][i] = matrix[i][j]
// }
// }
// return transpose
// }

// let matrix = [
//     [1,2,3],
//     [4,5,6]
// ]
// console.log(transposeMatrix(matrix));










// 8.find the most repeated value in an array

// function mostRepeatedValue(arr){
// let freq = {};
// let maxcount = 0;
// let mostRepeatedValue = 0;

// for (let num of arr ){
//     freq[num] = (freq[num] || 0 ) + 1;
// if (freq[num] > maxcount) {
//     maxcount = freq[num];
//     mostRepeatedValue = num;
// }
// }
// return mostRepeatedValue
// }


// let arr = [1,3,5,2,4,1,1,3,1,3,6,7,1]
// console.log("most repeated value is :" + mostRepeatedValue(arr));









// 9.reverse a string without using function?

// let str = "malayalam";
// let reversed = "";
// for (let i = str.length - 1; i >= 0; i--){
//     reversed += str[i]
// }
// if (str === reversed) {
//     console.log("its the rare case revsersed string name : " +reversed);
// }
// else{
// console.log("reversed string is : "+reversed);
// }











// 9.1 reverse a string using function?

// function reverse(str){
// let reversed = "";
// for (let i = str.length-1; i >= 0; i--) {
//     reversed += str[i]
// }
// return reversed
// }

// let string = "malayalam";
// console.log("reversed string is: " + reverse(string));

// if (string === reverse(string)) {
//     console.log(string + " is palindrome");
// }
// else{
//     console.log(string + " is not palindrome");
// }










// 10.print numbers from 1-10 without function?

// for (i = 1; i <= 10; i++){
//     console.log(i);
    
// }










// 10.1 print numbers from 1-10 using function?

// function printNum(n){
//     for (let i = 1; i <= n; i++){
//     console.log(i);
//     }
// }
// printNum(10)










// 11.multiplication table of a Number without function?

// let num = 5
// for (let i = 1; i <= 10; i++){
//     console.log(num * i);
// }










// 11.1 multiplication table of a Number using function?

// function multiplication(num){
//     for (let i = 1; i <= 10; i++){
//         console.log(i * num);
//     }
// }
// multiplication(5)










// 12.sum of number from 1 - n without function?

// let n = 10;
// let sum = 0 

// for (let i = 1; i <=n; i++){
//     sum += i    
// }
// console.log(sum);










// 12.1 sum of number from 1- n using function

// function totalSum(num){
//     let sum = 0
//     for (i = 0; i <= num; i++){
//         sum += i 
//     }
//     return sum
// }
// console.log(totalSum(10));










// 13.reverse a string without function?

// let string = "aimen"
// let reversed = ""

// for (let i = string.length - 1; i >= 0; i--){
//     reversed += string[i]
// }
// console.log(reversed);










// 13.1 revese a string using function

// function ReversedString(str){
//     let reversed = ""
//     for (let i = str.length - 1; i >= 0; i--){
//         reversed += str[i]
//     }
//     return reversed
// }
// console.log(ReversedString("aimen"));










// 14.factorial of a number without function?

// let n = 5;
// let fact = 1;

// for (i = 1; i <= n; i++){
//     fact *= i;
// }
// console.log(fact);










// 14.1 factorial of a number using function?

// function FactorialNum(num){
//     let fact = 1
//     for (i = 1; i <= num; i++){
//         fact *= i
//     }
//     return fact
// }
// console.log(FactorialNum(5));









// 15.find
// find largest number in an array without function?

// let arr = [13,635,224,567,835,194,]
// let max = arr[0]
// for (let i = 1; i < arr.length; i++){
//     if (arr[i] > max) {
//         max = arr[i]
//     }
// }
// console.log("largest number is: ", max);










// 15.1 find largest number in an array using function?

// function FindMax(arr){
//     let max = arr[0]
//     for (let i = 1; i < arr.length; i++){
//         if (arr[i] > max) {
//             max = arr[i]
//         }
//     }
//     return max
// }
// console.log(FindMax([12,13,2,5,6,453,3,23,45,324,4343,45,3,342344,3243,34,344,6657,3453,5]));










// 16.find the smallest number in an array without using function?

// let arr = [12,45,432,4,3,323,31,6]
// let min = arr[0]
// for (let i = 1; i < arr.length; i++){
//     if (arr[i] < min) {
//         min = arr[i]
//     }
// }
// console.log("the smallest number is ",min);










// 16.1 find the smallest number in an array using functions?

// function SmallestArr(arr){
// let min = arr[0]
// for (let i = 1; i < arr.length; i++){
//     if (arr[i] < min) {
//         min = arr[i]
//     }
// }
// return min
// }
// console.log( "the smallest number is ",SmallestArr([12,13,43,11,5,5,6,24345,24,243]));










// 17.count even and odd number in array without using function?

// let arr = [12,1,4,25,76,7,2,5,13]
// let even = 0, odd = 0

// for (let num of arr){
//     if (num % 2 === 0){
//         even++;
//     } else {
//         odd++;
//     }
// }
// console.log("even numbers: " , even , "odd numbers: " , odd);










// 17.1 count even and odd numbers in array using function?

// function EvenOddNum(arr){
// let even = 0, odd = 0
//     for (let num of arr){
//     if (num % 2 === 0) {
//         even++
//     }
//     else{
//         odd++
//     }
//     }
//     return {even , odd}
// }
// console.log(EvenOddNum([12,1,4,25,76,7,2,5,13]));










// 18.palindrom check without function?

// let str = "aimen"
// let reversed = ""

// for(let i = str.length - 1; i >= 0; i--){
//     reversed += str[i]
// }
// console.log(reversed);










// 18.1 palindrome check using function?

// function ReversedString(str){
//     let reversed = ""
//     for(let i = str.length - 1; i >= 0; i--){
//         reversed += str[i]
//     }
//     console.log(reversed);
//     return str === reversed
// }
// console.log(ReversedString("malayalam"));










// 19.fibonacci series up to n terms without function?

// let n = 10
// let a = 0, b = 1
// console.log(a);
// console.log(b);

// for ( let i = 2; i <= 10; i ++){
//     let next = a + b 
//     console.log(next);
//     a = b
//     b = next 
// }










// 19.1 fibonacci series up to n terms without function?

// function fibonacci(num){
//     let a = 0, b = 1
//     console.log(a);
//     console.log(b);

//     for (let i = 5; i <= num; i++){
//         let sumNext = a + b
//         console.log(sumNext);
//         a = b
//         b = sumNext
//     }
// }
// fibonacci(10)









// intermediate problems










// 20.check if a number is prime without function?

// let num = 18
// let isPrime = true

// if (num <= 1){
// isPrime = false;
// }
// else{
//     for (let i = 2; i < num; i++){
//         if (num % i === 0) {
//             isPrime = false;
//             break;
//         }
//     }
// }
// console.log(isPrime);










// 20.1 check if a number is prime using function?

// function isPrime(num){
//     if (num <= 1) 
//         return false
//         for (let i = 2; i < num; i++){
//             if (num % i === 0) 
//                 return false
//         }
//      return true
// }
// console.log(isPrime(21));










// 21.find gcd of two number without function? 

// let a = 16, b = 18
// let gcd = 1 
// for (let i = 1; i <= Math.min(a , b); i++){
// if (a % i === 0 && b % i === 0) {
//     gcd = i
// }
// }
// console.log("the gcd",gcd);

// // GCD (Greatest Common Divisor) is the largest positive integer that divides both numbers without leaving a remainder.










// 21.1 find the gcd of two number using function?

// function gcd(a , b){
//     let result = 1
//     for (let i = 1; i <= Math.min(a , b); i++){
//         if (a % i === 0 && b % i === 0 ) {
//             result = i
//         }
//     }
//     return result
// }
// console.log(gcd(16 , 18));










// 22.print all number up to n without function ?

// let n = 20
// for ( let i = 2; i <= n; i++){
//     let prime = true

//     for (let j = 2; j < i; j++){
//         if (i % j === 0) {
//             prime = false
//             break
//         }
//     }
//     if (prime) console.log(i);
    
// }










// 22.1 print all number up to n using function?

// function PrimeNum(num){
// for (let i  = 2; i <= num; i++){
//     let prime = true
//     for (let j = 2; j < i; j++){
//         if (i % j === 0) {
//             prime = false
//             break
//         }
//     }
//     if(prime) console.log(i);
// }
// }
// PrimeNum(20)










// Arrow function

// let name = ()=>{
//     console.log("this is a arrow function");    
// }
// name()











// object

// const person = {
//     name : "diddy",
//     place : "ekm",
//     phonenumber : "909090909090"
// }


// console.log(person["name"]);












