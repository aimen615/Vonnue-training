// document.getElementById("counter").innerHTML=5

// const e = require("express")
// const { lazy } = require("react")

// const { json } = require("express")

// const e = require("express");

// let counter = 0

// console.log(counter)


// let myAge = 23

// console.log(myAge)




// let num = 18 - 16

// console.log(num)




// let nigger = "benni is a diddy";

// let diddy = "baby is also a diddy";

// console.log(nigger,diddy)


// let menratio = 7
// let womenratio = 10

// console.log(menratio * womenratio)




// let count = 5

// count = 5 + 1 
// console.log(count)




// let bonuspoint = 50
// console.log(bonuspoint)

// bonuspoint = bonuspoint + 50
// console.log(bonuspoint)

// bonuspoint = bonuspoint - 75
// console.log(bonuspoint)




// function increment() {

//     console.log("the button was clicked")

// }




// function countdown() {
    
//     console.log(5)
//     console.log(4)
//     console.log(3)
//     console.log(2)
//     console.log(1)

// }



// function call42(){

//     console.log(42)

// }




// let lap1 = 16

// let lap2 = 18

// let lap3 = 36


// function lapsum(){

//     let totaltime = lap1+lap2+lap3

//     console.log(totaltime)
// }

// lapsum()




// let lapscompleted = 0


// function increment(){
//     lapscompleted = lapscompleted +1


//     console.log(lapscompleted)
// }

// increment()
// increment()
// increment()






// let count = 0

// function increment(){
//     count = count + 1
//     console.log(count)

//     document.getElementById("counter").innerHTML= count
// }


// function save(){
//     console.log(count)


// }






// let username = "benny"

// let msg = "you have three new notifications"

// console.log(msg +  " ," + username)


// let newmsg = username + " ," +  msg + "!"
// console.log(newmsg)







// let name = "giza"
// let greet = "hi, my name is "

// myGreeting = greet +""+name
// console.log(myGreeting)




// console.log(1 + "6")
// console.log(1 + "8")




// let welcome = document.getElementById("hail-hitler")

// let name = "hitler"
// let greeting = "welcome back sire"


// welcome.innerText = name + " " + greeting 

// let gay = "seban"

// welcome.innerText +=  " "+ gay







// let saveAs = document.getElementById("para")

// let saveone = document.getElementById("counter")
// let count = 0

// function increment(){
//     count = count + 1
//     saveone.innerText=count
// }

// function save(){
//     let saveAll = count + "-"
//     saveAs.innerText = saveAll
//     saveone.textContent = 0
//     count = 0
// }






// let firstName = "aimen" 
// let lastName = "liyakath"

// let fullName = firstName + " " +lastName

// console.log(fullName)





// let name = "linda"
// let greeting = "hi there"

// function greet(){
//     console.log(greeting + "," +  name + "!")
// }
// greet()







// let myPoints = 3
// let add = document.getElementById("increment-btn")
// let sub = document.getElementById("decrement-btn")
// let result = document.getElementById("para")

// function increment(){
//     myPoints = myPoints + 3
//     result.innerText = myPoints
// }

// increment()

// function decrement(){
//     myPoints = myPoints - 1
//     result.innerText= myPoints
// } 

// decrement()







// let myPoints = 3

// function add3Points(){
//     myPoints += 3
// }

// function removePoints(){
//     myPoints -= 1
// }

// add3Points()
// add3Points()
// removePoints()

// console.log(myPoints)








// let errorParagraph = document.getElementById("error")
// console.log(errorParagraph)

// function purchase(){

//     console.log("button clicked")
//     errorParagraph.textContent = "Something went wrong, please dont try again !!!"
// }










// let number1 = document.getElementById("num1")
// let number2 = document.getElementById("num2")
// let total = document.getElementById("sum")


// function add(){
// let n1 = parseFloat(number1.value)
// let n2 = parseFloat(number2.value) 
// let sum = n1 + n2
// total.innerText = sum
// }

// function subtract(){
// let n1 = parseFloat(number1.value)
// let n2 = parseFloat(number2.value)
// let sum = n1 - n2
// total.innerText = sum
// }

// function multiply(){
//     let n1 = parseFloat(number1.value)
//     let n2 = parseFloat(number2.value)
//     let sum = n1 * n2
//     total.innerText = sum
// }

// function divide(){
//     let n1 = parseFloat(number1.value)
//     let n2 = parseFloat(number2.value)
//     let sum = n1 / n2
//     total.innerText = sum 
// }








// let firstCard = 11
// let secondCard = 9

// let sum = firstCard + secondCard

// if (sum < 21) {
//     console.log("Do you want to draw a new card? ")
// }
// else if (sum == 21) {
//     console.log("wyoooh!  diddy you've got Blackjack! ")
// }
// else if (sum > 21) {
//     console.log("you're out of the game! ")
// }











// let age = 22

// if (age < 21) {
//     console.log("granpda your aree too old join here!")
// }
// else{
//     console.log("make a way for your grandpa")
// }










// let age = "100"

// if (age < 100) {
//     console.log("You aint eligible diddy")
// }
// else if (age === 100) {
//     console.log("Here is your bday card from hitler")
// }
// else{
//     console.log("you have already got one card diddy")
// }












// let firstCard = getRandomCard()
// let secondCard = getRandomCard()
// let cards = [firstCard , secondCard]
// let sum = firstCard + secondCard
// let blackjack = false
// let alive = true
// let message = ""
// let messageStore = document.getElementById("messages")
// let sumStore = document.getElementById("sumPara")
// let cardStore = document.getElementById("cardPara")

// let players = {
//     name : "Per",
//     chips : 145
// }

// let playerStore = document.getElementById("player")
// playerStore.textContent = players.name + ": $" + players.chips

// function getRandomCard(){
//     let randomnumber = Math.floor(Math.random() * 13 )
//     if (randomnumber > 10) {
//         return 10
//     }
//     else if (randomnumber === 1) {
//         return 11
//     }
//     else {
//         return randomnumber
//     }
// }

// function startGame(){
//     renderGame()
// }

// function renderGame(){
// sumPara.textContent ="Sum: " + sum
// cardPara.textContent = "Cards: "

// for ( let i = 0; i < cards.length; i++){
//     cardStore.textContent += cards[i] + " "
// } 

// if (sum <= 20) {
//     message = "Do you want to draw a new card?"
// }
// else if (sum === 21) {
//     message = "Wohoo you have got Blackjack!"
//     blackjack = true 
// }
// else{
//     message = "you are out of the game diddy!"
//     alive = false
// }
//     messageStore.textContent = message
// }

// function newCard(){
//     if (alive === true && blackjack === false ) {
        
   
//     let card = getRandomCard()
//     sum += card
//     console.log(cards)
//     cards.push(card)
//     renderGame()
// }

//  }










// let featuredPosts = [
//     "check out my netflix clone",
//     "here is the code of my project",
//     "i have just relaunched my portfolio"]


//     let myPortfolio = ["vonnue training",
//         "calicut university",
//         "driving lisence",
//         "coding",
//         "fastest typist"
//     ]

//     console.log(myPortfolio[1])
//     console.log(myPortfolio[2])
//     console.log(myPortfolio[3])













// let cards = [16 ,18,]
// cards.push(9)
// console.log(cards)


// let messages = [
//     "hey diddy , how are you ,im fine btw",
//     "what bout you ,didnt saw you at the party",
//     "diddy nigger just called me and said you just got kicked out ?!"
// ]
// messages.pop()
// messages.pop()
// console.log(messages)














// let messages = [
//     "hey diddy , how are you ,im fine btw",
//     "what bout you ,didnt saw you at the party",
//     "diddy nigger just called me and said you just got kicked out ?!",
//     "gawk gawk gawk"
// ]

// for( i = 0; i <= 3; i += 1){
//     console.log(messages[i])
// }












// let cards = [7, 3, 9]
// for ( i = 0; i < cards.length; i++){
//     console.log(cards[i])
// }














// let sentences = ["hello ", "my ", "name ", "is ", "69"]
// let greeting = document.getElementById('main-greeting')

// for(i = 0; i < sentences.length; i++){
//     greeting.textContent = sentences[i]

// }





















// let player1time = 69
// let player2time = 96

// function getracetime(){
//     if (player1time < player2time) {
//         console.log(player1time) 
//     }else if (player2time < player1time) {
//         console.log(player2time)
//     }
//     else{
//         console.log(player1time)
//     }
// }

// let fastestrace = getracetime()

// console.log(fastestrace)


// function totalracetime(){
//     return player1time + player2time
// }














// let hasCompletedCourse = true
// let giveCertificate = true

// if (hasCompletedCourse === true && giveCertificate === true) {
//    generateCertificate()
// }

// function generateCertificate(){
//     console.log("generating certificate...")
    

// }













// let likesDocument = true
// let likesStartups = false

// if (likesDocument === true || likesStartups === true) {
//     recommendMovie()
// }

// function recommendMovie() {
//     console.log("Hey, check out this new film we think you will like!");
    
// }


















// let airbnb = {
//     castleName :"hailhermanos",
//     price : 1200,
//     unmarriedCouples: true,
//     foodMenu : ['pasta','sphagetti','brocolli']
// }

// console.log(airbnb.castleName);
// console.log(airbnb.price);
// console.log(airbnb.unmarriedCouples);
// console.log(airbnb.foodMenu);














// let person = {
//     name: "michael",
//     age: 23,
//     country: "Germany"
// }
// function callPerson(){
//     console.log(person.name + " is " + person.age + " and lives in " + person.country);
// }
// callPerson()











// let age = 1

// if (age < 6) {
//     console.log("free");
// }

// else if (age < 17) {
//     console.log("child discount");
// }
// else if(age < 26){
//     console.log("student discount");
// }
// else if (age < 66) {
//     console.log("full price");
// }
// else{
//     console.log("senior citizen discount");
    
// }











//     console.log('the five largest countries in the world are:');
// let largeCountries = ['austria', 'russia', 'germany', 'usa', 'malta']
     
// for (let i = 0; i < largeCountries.length; i++){
//     console.log('- ' + largeCountries[i]);
    
// }













// console.log('the five largest countries in the world are:');
// let largeCountries = ['austria', 'russia', 'germany', 'usa', 'malta']



// largeCountries.pop()
// largeCountries.push("brazil")
// largeCountries.shift()
// largeCountries.unshift("japan")
// console.log(largeCountries);













// let day = 12
// weekday = "friday"
// if (day === 13 && weekday === "friday") {
//     console.log("its spooky time");
// }
//  else{
//         console.log("geeky time"); 
//     }















// let hand = ['rock', 'paper', 'scissor']

// function handGame(){
//     let randomIndex = Math.floor(Math.random()*3)
//     return hand[randomIndex]
// }
// console.log( handGame()


















