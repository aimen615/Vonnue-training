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

// const e = require("express");











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










// 23.callback Function

// let cameraAngleDecision = []


// function processThirdumpireReview(groundumpireReq, callback){
//     if (!groundumpireReq) return 

//     groundumpireReq && callback()

    

//     const [cameraAngle1Result, cameraAngle2Result] = cameraAngleDecision // array destructring

//     cameraAngle1Result && cameraAngle2Result ? displayMessageScreen("Out") : displayMessageScreen("Not Out")
    
//     if (cameraAngleDecision.length > 1){
//     cameraAngle1Result && cameraAngle2Result ? displayMessageScreen("Out") : displayMessageScreen("Not Out")
//     }


// }


// function displayMessageScreen(finalScreenDecision){
//     const screenEl = document.getElementById("screen")
//     screenEl.innerHTML = finalScreenDecision
// }



// function getThirdUmpireResponse(){
//     let decision = prompt("what is your decision?")
//     decision = decision.toLowerCase() === "out" ? true : false
//     cameraAngleDecision.push(decision)
//     return decision
// }




// function checkCameraAngle1(){
//     //umpire is checking some visuals
//     //umire has a final decision now
//     getThirdUmpireResponse()
// }   

// function checkCameraAngle2(){
//     // umpire is checking some visuals
//     // umpire has a final decision now
//     getThirdUmpireResponse()
// }   





// processThirdumpireReview(true , checkCameraAngle1)
// processThirdumpireReview(true, checkCameraAngle2)











// 23.1 call back function !!!

// function add(a,b){
//     return a + b
// }

// function divide(a,b){
//     return a / b
// }

// function multiply(a,b){
//     return a * b
// }

// function calculate( x,y, operation){
//     return operation( x,y)
// }

// console.log("sum: ",calculate(2,2, add));
// console.log("divide: " ,calculate(2,2, divide));
// console.log("multiply: ",calculate(2,2, multiply));











// 24.arrow function and this keyword!!!

// const screenEl = document.getElementById("screen")

// const showMessage = (element) => {
//     console.log(this);
// }



// screenEl.addEventListener("click",showMessage












// 25. asyncrnous function exicution?

// console.log("1. Third umpire review requested.");
// let screenEl = document.getElementById("screen")
// let umpireDecision
// const TIMEOUT = 5000

// function getThirdUmpireResult(){
//     console.log("2. third umpire review started.");
//     console.log("3. Third umpire is checking camera.");
  


//     return new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve (umpireDecision = "OUT")
//         console.log(`4. Third umpire result is ${umpireDecision}`)
//     }, TIMEOUT);
//     })

// }



// function displayThirdUmpireResults(){
//     console.log(`5. Ready to show in ground screen: ${umpireDecision}`);
//     screenEl.innerText = umpireDecision
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//         resolve(screenEl.innerHTML = umpireDecision)
//         // reject("404")
//         }, 2000)
//     })
// }



// function passInfoGroundUmpire(){
//     console.log("6. hey ground umpire, please revert your decision!");
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             // resolve("Success")
//             reject("There is some technical issue found.")
//         },3000)
//     })
// }



// function restartMatch(){
//     console.log("7. match restarted after review.");
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Restart the match")
//         },4000)
//     })
// }


// function showtheError(err){
//     console.log(err);
    
// }




// async function initThirdUmpire(){   
// try{
//     await getThirdUmpireResult()
//     await displayThirdUmpireResults()
//     await passInfoGroundUmpire()
//     await restartMatch()
// }
//     catch(err){
//     showtheError(err)
// }
// }


// initThirdUmpire()



// // getThirdUmpireResult()
// // .then(displayThirdUmpireResults)
// // .then(passInfoGroundUmpire)
// // .then(restartMatch)
// // .catch(showtheError)
// // .finally()






// console.log("-------------------");
// console.log("Other codes are executing");
// console.log("Other codes are executing");
// console.log("Other codes are executing");
// console.log("Other codes are executing");
// console.log("Other codes are executing");
// console.log("-------------------");





















// FOR EACH 

// const arr = [
//     {
//         Name: 'Aimen',
//         Mark: 9,
//         Place: 'Malappuram'
//     },
//     {
//         Name: 'Sebin',
//         Mark: 6,
//         Place: 'Wayanad'
//     },
//     {
//         Name: 'Roshan',
//         Mark: 4,
//         Place: 'Kundilangadi'
//     },
//     {
//         Name: 'Anugrah',
//         Mark: 5,
//         Place: 'Kundilangadi'
//     }
// ];


// FOR EACH

// arr.forEach((item) => {
// console.log(item.Name);     






// FIND

// let found = arr.find((item) => {
//     return item.Mark < 8
// });

// console.log(found);






// FILTER

// let found = arr.filter((item, index) => {
//     return index < 2;
// });

// console.log(found);






// MAP

// let newArr = arr.map((item) => {
//     return {
//         ...item,
//         country: 'India'
//     }
// });

// console.log(newArr);





// REDUCE

// let value = arr.reduce((total, item) => {
//     total.push(item.Name);
//     return total
// }, []);

// console.log(value);











// ------------------------------------------- 
















let classOBJ = {
    "name" : "class A",
    "teacherName" : "Mary",
    "students" : [
        {
            'name' : 'Suni',
            'id' : '101',
            'marks' : [
                {'subject' : 'English', 'marks' : 25},
                {'subject' : 'Maths', 'marks' : 48},
                {'subject' : 'Physics', 'marks' : 40},
                {'subject' : 'Chemistry', 'marks' : 30},
                {'subject' : 'Computer', 'marks' : 20},
            ] 
        },
        {
            'name' : 'Muni',
            'id' : '102',
            'marks' : [
                {'subject' : 'English', 'marks' : 30},
                {'subject' : 'Maths', 'marks' : 38},
                {'subject' : 'Physics', 'marks' : 35},
                {'subject' : 'Chemistry', 'marks' : 45},
                {'subject' : 'Computer', 'marks' : 30},
            ] 
        },
        {
            'name' : 'Eminem',
            'id' : '103',
            'marks' : [
                {'subject' : 'English', 'marks' : 50},
                {'subject' : 'Maths', 'marks' : 20},
                {'subject' : 'Physics', 'marks' : 37},
                {'subject' : 'Chemistry', 'marks' : 36},
                {'subject' : 'Computer', 'marks' : 35},
            ] 
        },
    ]
}




// 1. write a function to print the name of the class: class A? 

// function className(classOBJ){
//     return classOBJ.name
// }

// console.log(className(classOBJ));









// 2. write a function to print the teachers name?

// newclass = [classOBJ]
// newclass.map(t => console.log(t.teacherName));









// 3.write a function to print all the students name in the class?

// classOBJ.students.map(n => console.log(n.name))










// 4. write a function to print all the ids of the student in the class?

// classOBJ.students.map(i => console.log(i.id));










// 5. write a function to print subject name for specific student

// const subjects = classOBJ.students.find(i => i.name === 'Suni')
// .marks.map(s => s.subject);

// console.log(subjects);










// 6. write a function to print mark of specific student in all subjects?

// subjects = classOBJ.students.find( i => i.name === 'Eminem')
// .marks.reduce((sum, marks) => sum + marks.marks , 0)

// console.log(subjects);










// 7. write a function to calculate and print the average marks for specific students?

// const averageMark = classOBJ.students.find(i => i.name === 'Suni')

// const total = averageMark.marks.reduce((totalSum, marks) => totalSum + marks.marks, 0)

// const avg=total/averageMark.marks.length

// console.log(avg)










// 9. write a function to calculate and print the average marks for all students in a specific subject?

// let chemistryMarks = classOBJ.students.map(i => i.marks.find(m  => m.subject === 'Chemistry'))
// .filter(m => m !== undefined);

// let total = chemistryMarks.reduce((sum, m) => sum + m.marks,0)

// let avg = total / chemistryMarks.length;

// console.log("average chemistry marks:" , avg)










// 10. write a function to print the total mark for student in specific subjects? 

// let subjectName = 'Chemistry';

// classOBJ.students.forEach(student => {
//     let subject = student.marks.find(m => m.subject === subjectName)
//     if (subject) {
//         console.log(student.name, "-",subjectName, ":", subject.marks);
//     }
//     else{
//         console.log(student.name, "Has no mark for", subjectName);
//     }
// });










// 11. write a function to find and print the student with the highest mark in specific subjects ?

// let subjectName = 'Maths'

// let subjectMarks = classOBJ.students.map(student => {
//     let subject = student.marks.find( m => m.subject === subjectName)
//     return subject ? { name: student.name, marks: subject.marks } : null
// })
// .filter(m => m !== null)


// let topStudent = subjectMarks.reduce((max,student) => {
//     return student.marks > max.marks ? student : max;
// });

// console.log("Highest in", subjectName, ":", topStudent.name,"with", topStudent.marks, "marks")











// 12. wwrite a function and print the student with the lowest marks in specific subject ?

// let subjectName = 'Maths';

// let subjectMarks = classOBJ.students
// .map(student => {
//     let subject = student.marks.find(m => m.subject === subjectName)
//     return subject ? { name: student.name, marks: subject.marks } : null
// })
// .filter(m => m !== null)


// let leastMarkstudent = subjectMarks.reduce((min, student) => {
//     return student.marks < min.marks ? student : min;
// });

// console.log("Lowest in", subjectName, ":", leastMarkstudent.name, "with", leastMarkstudent.marks, "marks")










// 13. write a function to print student with highest total mark ?

// let totalMark = classOBJ.students.map(student => {
//     let total = student.marks.reduce((sum, m) => sum + m.marks, 0)
//     return { name: student.name, total: total };
// });


// let topStudent = totalMark.reduce((max, student) => {
//     return student.total > max.total ? student : max;
// });

// console.log("Highest total marks:", topStudent.name, "with", topStudent.total, "marks");










// 14. write a function to print student with lowest total mark ?

// let totalMark = classOBJ.students.map(student => {
//     let total = student.marks.reduce((sum, m) => sum + m.marks, 0)
//     return { name: student.name, total: total };
// });


// let lowStudent = totalMark.reduce((min, student) => {
//     return student.total < min.total ? student : min
// })

// console.log("Lowest total marks:", lowStudent.name, "with", lowStudent.total, "marks");










// 15. write a function to find and print the subject with the highest average mark ?

// let subjects = classOBJ.students[0].marks.map(m => m.subject);
// let subjectsAverage = subjects.map(sub => {
//     let marks = classOBJ.students.map(student => {
//         let found = student.marks.find(m => m.subject === sub);
//         return found ? found.marks : 0
//     }); 
//     let total = marks.reduce((sum, m) => sum + m, 0);
//     let avg = total / marks.length;
//     return { subject: sub, average: avg };
// });

// let topSubject = subjectsAverage.reduce((max, sub) => {
//     return sub.average > max.average ? sub : max;
// });

// console.log("Subject with highest average:", topSubject.subject, "with average", topSubject.average);





// 16. write a function to find and print the subject with lowest average mark ?

// let subjects = classOBJ.students[0].marks.map(m => m.subject);
// let subjectsAverage = subjects.map(sub => {
//     let marks = classOBJ.students.map(student => {
//         let found = student.marks.find(m => m.subject === sub);
//         return found ? found.marks : 0
//     });
//     let total = marks.reduce(( sum, m ) => sum + m, 0);
//     let avg = total / marks.length
//     return { subject: sub, average: avg };
// });

// let topSubject = subjectsAverage.reduce((max, sub) => {
//     return sub.average < max.average ? sub : max;
// });

// console.log("Subject with lowest average:", topSubject.subject, "with average", topSubject.average);










// 17. write a function to calculate and print the overall average mark for the class ? 

// function overallclassAverage(classOBJ){
//     let allMarks = classOBJ.students.flatMap(student => student.marks.map(m => m.marks));
//     let total = allMarks.reduce((sum, mark) => sum + mark, 0);

//     let avg = total / allMarks.length
//     console.log("Overall class average:", avg);
// }

// overallclassAverage(classOBJ)










// 18. write a function to calculate and print the overall total marks for the class ?

// function overalltotalMark(classOBJ){
  
//     let allMarks = classOBJ.students.flatMap(student => student.marks.map(m => m.marks));
  
//     let total = allMarks.reduce((sum, mark) => sum + mark, 0);
    
//     console.log("Overall total mark: ", total )
// }

// overalltotalMark(classOBJ)










// 19. write a function to calculate and print the average mark for each subject ?

// function averageOfSubjects(classOBJ){
// let subjects = classOBJ.students[0].marks.map(m => m.subject)
// subjects.forEach(sub => {
//     let marks = classOBJ.students.map(student => {
//         let found = student.marks.find(m => m.subject === sub);
//         return found ? found.marks : 0;
//     });
//     let total = marks.reduce((sum, mark) => sum + mark,0)
//     let avg = total / marks.length;

//     console.log(`${sub} average mark: ${avg}`);
// });
// }

// averageOfSubjects(classOBJ);










// 20. write a function to calculate and print the total mark for each subject ?

// function totalMarkOfSubjects(classOBJ){
//     let subjects = classOBJ.students[0].marks.map(m => m.subject)
//     subjects.forEach(sub => {
//         let marks = classOBJ.students.map(student => {
//             let found = student.marks.find(m => m.subject === sub);
//             return found ? found.marks : 0;
//         });
//         let total = marks.reduce((sum, mark) => sum + mark,0)

//         console.log((`${sub} total mark: ${total}`));
//     });
// }

// totalMarkOfSubjects(classOBJ);










// 21. write a function to find and print the subject with the largest highest total mark ?

// function highestTotalMark(classOBJ){

//     let subjects = classOBJ.students[0].marks.map(m => m.subject)
//     let subjectTotals = subjects.map(sub => {
        
//         let marks = classOBJ.students.map(student => {
//             let found = student.marks.find(m => m.subject === sub);
//                 return found ? found.marks : 0;
//              });
             
//               let total = marks.reduce((sum, mark) => sum + mark, 0)
//              return { subject: sub, total: total };
//               });
            
//         let topSubject = subjectTotals.reduce((max, sub) => {
//              return sub.total > max.total ? sub : max;
//         });

//         console.log(`subject with highest total mark: ${topSubject.subject} (${topSubject.total})`);
      
// }

//  highestTotalMark(classOBJ);










// 22. write a function to find and print the subject with the lowest total marks ?

// function lowestTotalMark(classOBJ){
//     let subjects = classOBJ.students[0].marks.map(m => m.subject)
//     let subjectTotals = subjects.map(sub => {
//         let marks = classOBJ.students.map(student => {
//             let found = student.marks.find(m => m.subject === sub);
//             return found ? found.marks : 0;
//         });
//     let total = marks.reduce((sum, marks) => sum + marks, 0)
//     return { subject: sub, total: total };
//     });
//     let lowSubject = subjectTotals.reduce((min,sub) => {
//         return sub.total < min.total ? sub : min;
//     });

//     console.log((`subject with lowest total mark: ${lowSubject.subject} ${lowSubject.total}`));
    
// }

// lowestTotalMark(classOBJ)











// 23. write a function to find and print the students with highest average marks ?

// function highestAvererageStudent(classOBJ) {
//     let studentAverage = classOBJ.students.map(student => {
//         let total = student.marks.reduce((sum, m) => sum + m.marks, 0);
//         let avg = total / student.marks.length;
//         return { name: student.name, average: avg };
//     });

//     let topStudent = studentAverage.reduce((max, student) => {
//         return student.average > max.average ? student : max; 
//     });
    
//     console.log(`Student with highest average: ${topStudent.name} ${topStudent.average}`);
    
// }

// highestAvererageStudent(classOBJ)




// 24. write a function to find the students with lowest average marks ?

// function lowestAverageStudent(classOBJ){
//     let studentAverage = classOBJ.students.map(student => {
//         let total = student.marks.reduce((sum, m) => sum + m.marks, 0);
//         let avg = total / student.marks.length;
//         return { name: student.name, average: avg };
//     });
//     let lowStudent = studentAverage.reduce((min, student) => {
//         return student.average < min.average ? student : min;
//     });

//     console.log(`Student with lowest average: ${lowStudent.name} ${lowStudent.average}`);

// }


// lowestAverageStudent(classOBJ)










// 25. write a function to find and print the students with highest total marks ?

// function highestTotalMark(classOBJ){
//     let studentTotal = classOBJ.students.map(student => {
//         let total = student.marks.reduce((sum, m) => sum + m.marks, 0);
//         return total = {name: student.name, total: total}
//     })

//     let topStudent = studentTotal.reduce((max ,student) => {
//         return student.total > max.total ? student : max
//     });
//     console.log(`Student with highest total marks: ${topStudent.name} ${topStudent.total}`);
// }

// highestTotalMark(classOBJ);











// 26. write a function to find and print the students with lowest total marks ?

// function lowestTotalMark(classOBJ){
//     let studentTotal = classOBJ.students.map(student => {
//         let total = student.marks.reduce((sum, m) => sum + m.marks, 0);
//         return total = {name: student.name, total: total}
//     });
//     let lowStudent = studentTotal.reduce((min, student) => {
//         return student.total < min.total ? student : min
//     });
   
//     console.log(`Student with lowest total marks: ${lowStudent.name} ${lowStudent.total}`);
    
// }

// lowestTotalMark(classOBJ);










// 27. write a function to calculate and print the numbers of students who scored abve a certain mark in a specic subject ? 

// function countStudentsAboveMark(classOBJ, subjectName, cutoff) {
//     let count = classOBJ.students.filter(student => {
//         let subject = student.marks.find(m => m.subject === subjectName);
//         return subject && subject.marks > cutoff;
//     }).length;

//     console.log(`Number of students who scored above ${cutoff} in ${subjectName}: ${count}`);
// }


// countStudentsAboveMark(classOBJ, "Physics", 35);










// 28. write a function to calculate and print the number of students who scored below a  certain mark in a specific subject ?

// function countStudentsBelowMark(classOBJ, subjectName, cutoff){
//     let count = classOBJ.students.filter(student => {
//         let subject = student.marks.find(m => m.subject === subjectName);
//         return subject && subject.marks > cutoff;
//     }).length;

// console.log(`Number of students who scored below ${cutoff} in ${subjectName}: ${count}`);
// }
// countStudentsBelowMark(classOBJ, 'Maths', 35)










// 31. write a function to calculate and print the percentage of students who scored above a certain mark in a specific subject ?

// function percentageAboveMark(classOBJ, subjectName, cutoff){
//     let totalStudents = classOBJ.students.length;
//     let aboveCount = classOBJ.students.filter(student => {
//         let subject = student.marks.find(m => m.subject === subjectName);
//         return subject && subject.marks > cutoff;
//     }).length

//     let percentage = (aboveCount / totalStudents) * 100;

//     console.log(`percentage of the students scoring above ${cutoff} in ${subjectName}: ${percentage.toFixed(2)}%`);
    
// }

// percentageAboveMark(classOBJ, 'English', 30)










// 32. write a function to calculate and print the percentage of students who scored below a certain mark in all subjects ?

// function percentageBelowMark(classOBJ, subjectName, cutoff){
//     let totalStudents = classOBJ.students.length;
//     let belowCount = classOBJ.students.filter(student => {
//         let subject = student.marks.find(m => m.subject === subjectName);
//         return subject && subject.marks < cutoff;
//     }).length
//     let percentage = (belowCount / totalStudents) * 100;

//     console.log(`percentage of the students scoring below ${cutoff} in ${subjectName}: ${percentage.toFixed(2)}% `);
    
// }

// percentageBelowMark(classOBJ, 'Maths', 30)



// 35. write a function to find and print the students with highest percentage of marks ?

// function percentageHighMark(classOBJ){
//     let studentPercentages = classOBJ.students.map(student => {
//         let total = student.marks.reduce((sum, m) => sum + m.marks, 0);
//         let maxTotal = student.marks.length * 50;
//         let percentage = (total / maxTotal) * 100;
//         return {name: student.name, percentage: percentage};
//     });
         
//     let topStudent = studentPercentages.reduce((max, student) => {
//         return student.percentage > max.percentage ? student : max;
//     });

//     console.log(`Student with highest percentage: ${topStudent.name} ${topStudent.percentage.toFixed(2)}%`);
    
// }

// percentageHighMark(classOBJ)







// 36. write a function to find and print the student with lowest percentage of marks ? 

// function percentageLowMarks(classOBJ){
//     let studentPercentages = classOBJ.students.map(student => {
//         let total = student.marks.reduce((sum, m) => sum + m.marks, 0)
//         let maxTotal = student.marks.length * 50;
//         let percentage = (total / maxTotal) * 100
//         return {name: student.name, percentage: percentage};
//     });
    
//     let lowStudent = studentPercentages.reduce((min, student) => {
//         return student.percentage < min.percentage ? student : min;
//     });

//     console.log(`Student with lowest percentage: ${lowStudent.name} ${lowStudent.percentage.toFixed(2)}%`);
    
// }

// percentageLowMarks(classOBJ);










// 48. write a function to find and print the students who scored the lowest marks in at least one subject ?

// function LowestMarkStudents(classOBJ){
//     let subjects = classOBJ.students[0].marks.map(m => m.subject);

//     let lowestBySubject = subjects.map(sub => {
//         let marks = classOBJ.students.map(student => {
//             let found = student.marks.find(m => m.subject === sub);
//             return found ? found.marks : Infinity;
//         });
//     let min = Math.min(...marks)
//         return {subject: sub, min: min};
//     });
//     let studentWithLowest = [];
//     lowestBySubject.forEach(subObj => {
//         classOBJ.students.forEach(student => {
//             let subject = student.marks.find(m => m.subject === subObj.subject);
//             if (subject && subject.marks === subObj.min) {
//                 studentWithLowest.push({name: student.name, subject: subObj.subject, marks: subject.marks});
//             }
//         });
//     });
//     console.log(`Student who scored the lowest mark in at least oone subject:`);

//     studentWithLowest.forEach(s => {
//         console.log(`${s.name} scored lowest in ${s.subject} ${s.marks}`);
        
//     });
    
// }

//  LowestMarkStudents(classOBJ);









// 50. At an international airport, passengers are waiting in a line to board their flight. Most passengers board in the order they arrive (first in first out), but occasionally, VIPs or emergency passengers are allowed to board ahead of others.
// You are tasked with building a system to manage this boarding line efficiently. The system should support the following operations: - Add a passenger to the end of the line (normal boarding) - Add a passenger to the front of the line (priority boarding) - Remove the passenger from the front (simulate boarding the next passenger)
// The program should support the following commands: - ADD_NORMAL ‹name> — add the passenger to the back of the line. - ADD_PRIORITY < name> — add the passenger to the front of the line. - BOARD
// — remove the passenger from the front of the line and return the name of the passenger. 
// 
// Example Input:
// ADD_NORMAL Alice
// ADD_NORMAL Bob
// ADD_PRIORITY Carol
// ADD_NORMAL Dave
// BOARD
// BOARD
// BOARD

let queue = [];

let commands = [
    'ADD_NORMAL Alice',
    'ADD_NORMAL Bob',
    'ADD_PRIORITY Carol',
    'ADD_NORMAL Dave',
    'BOARD',
    // 'BOARD',
    // 'BOARD',
]

function Airport(command){
    let parts = command.split(' ');
    let actions = parts[0];
    let name = parts[1];

    if (actions === "ADD_NORMAL") {
        queue.push(name);
    } else if (actions === "ADD_PRIORITY") {
        queue.unshift(name);
    } else if (actions === 'BOARD') {
        if (queue.length > 0) {
            let passenger = queue.shift();
            console.log(passenger);
        }
    }
}


commands.forEach(cmd => Airport(cmd));



