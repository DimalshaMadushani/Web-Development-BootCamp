// // block scope

// // if we use let keyword inside a block we cant use that variable outside of the block
// // but if u use a the var keyword it is possible

// for(let i = 5; i<5; i++){
//     let msg = "Dimalsha";
//     console.log(msg)
// }

// console.log(msg)

// // lexical scope
// // inner function has the access to the variables of the parent function
// function bankRobbery() {
//     const heros = ["Spiderman","Batman","Ironman"]
//     function cryForHelp(){
//         for(let hero of heros){
//             console.log(`Please help us, ${hero.toUpperCase()}`)
//         }
//     }
//     cryForHelp();
// }

// //function expressions
// let addition = function(x,y) {
//     console.log(x+y)
//     return x+y
// }

// console.log(add(3,4));

// //Higher order function
// function callTwice(func){
//     func();
//     func();
// }

// function rollDie(){
//     const roll = Math.floor(Math.random()* 6) + 1
//     console.log(roll)
// }

// // pass the function to the function
// callTwice(rollDie)

// function makeMysteryFunc(){
//     const rand = Math.random();
//     if (rand > 0.5){
//         return function(){
//         console.log("you are a good function")
//         }
//     }else{
//         return function(){
//             alert("you are a bad function")
//         }
//     }
// }

// function makeBetweekFunc(min,max){
//     return function(num){
//         return num >= min && num <= max;
//     }
// }

// //Defining methods
// const myMath = {
//     PI : 3.14159,

//     square: function (num){
//         return num*num
//     },

//     cube: function (num){
//         return num**3
//     }
// }

// try catch

try{
    hello.toUpperCase();
} catch{
    console.log("Error!!!")
}