// let myLeads = []


// const inputEl = document.getElementById("input-el")
// const inputBtn = document.getElementById("input-btn")
// const ulel = document.getElementById("ul-el")
// const deletebtn = document.getElementById("delete-btn")
// const leadsfromlocalstorage = JSON.parse(localStorage.getItem("myLeads"))
// const tabBtn = document.getElementById("tab-btn")

// if (leadsfromlocalstorage) {
//     myLeads = leadsfromlocalstorage
//     render(myLeads)
// }

// tabBtn.addEventListener("click", function () {
// chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
//     myLeads.push(tabs[0].url)
//     localStorage.setItem("myLeads", JSON.stringify(myLeads))
//     render(myLeads)
// })
// })





// deletebtn.addEventListener("click", function(){
//     console.log("double clicked!")
//     localStorage.clear()
//     myLeads = []
//     render(myLeads)
// })
// inputBtn.addEventListener("click", function() {
//     myLeads.push(inputEl.value)
//     inputEl.value = ""
//     localStorage.setItem("myLeads", JSON.stringify(myLeads))
//     render(myLeads)
// })

// function render(leads){
//     let listItems = ""
//     for ( let i = 0; i < leads.length; i ++ ){
//     listItems += `
//     <li>
//     <a target='_blank'
//     href='${myLeads[i]}'>
//     ${myLeads[i]}
//     </a>
//     </li>
//  `
// }
//     ulel.innerHTML = listItems
// }











// const container = document.getElementById("container")
// container.innerHTML = "<button onclick='buy()'> Buy! </button>"

// function buy(){
//     container.innerHTML = "<p>Thank you for buying!</p>"
// }
















// let box = document.getElementById("box")
// box.addEventListener("click", function(){
//     console.log('i wwant to open the box!')
// })












// const baseprice = 500
// const discount = 120
// let shippingCost = 20
// let shippingTime = "6-12 days"

// shippingCost = 30
// shippingTime = "7-21 days"

// let fullPrice = baseprice - discount + shippingCost
// console.log("Total cost: " + fullPrice  + ", It will arrive in " + shippingTime);



















// const recipient = "james";

// let sender = "per aimen leee"



// const email = `hey ${recipient}!

// how is it going?
// going good naa!!


// cheers ${sender}`;

// console.log(email);
















// const credit = 0

// if (credit) {
//     console.log("lets play 🥲");    
// } else {
//     console.log("sorry, you have no credits");
// }
























// console.log(Boolean(""));
// console.log(Boolean("0"));
// console.log(Boolean("100"));
// console.log(Boolean(null));
// console.log(Boolean[0]);
// console.log(Boolean(-0));









// const welcomeEl = document.getElementById("welcome-el")

// function greetUser(greeting, name, emoji){
//     welcomeEl.textContent = `${greeting}, ${name}, ${emoji}`
// }
// greetUser("howdy", "james", "😇")
















// function add(num1, num2){
//     return num1 + num2
// }
// add(16,18);














// function getFirst(arr){
// return arr[0]
// }


function generateSentence(desc, arr){
    let basestring = `the ${arr.length} ${desc} are`
        for (let i = 0; i< Array.length; i++){
            basestring += arr[i] + ","
        }
        return basestring
}

const sentance = generateSentence("highest mountain", [" mount Everest ", "K2"])
console.log(sentance)








