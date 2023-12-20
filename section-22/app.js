const nums = [1,2,3,4,5]

// // function square(element){
// //     console.log(element*element)
// // }

// // // forEach method
// // nums.forEach(function(el) {
// //     console.log(el*el)
// // })

// // //iterating over list of objects forEach
// const movies = [
//     {
//         title: 'avatar',
//         score: 99
//     },

//     {
//         title: 'Alien',
//         score: 90
//     },

//     {
//         title: 'Stand by me',
//         score: 95
//     }


// ]

// // movies.forEach(function(movie){
// //     console.log(`${movie.title}: ${movie.score}/100`)
// // })


// const doubles = nums.map(function (num){
//     return num*2
// })

// // in all the above cases we have passed a callback functions

//Arrow functions

// const add = function(x,y){
//     return x+y;
// }

// const add = (x,y) => {
//     return x+y
// }

// const square = (x) => {
//     return x*x;
// }

// const rollDie = () => {
//     return Math.floor(Math.random()*6) + 1
// }
//arrow function implicit returns
// dont write the return key word and replace curly brace with normal parenthesis
// const rollDieImplicit = () => (
//      Math.floor(Math.random()*6) + 1
// )

// or you can write it by one line
// variable = params => return value
// const addImplicit = (a,b) => a+b

// const newMovies = movies.map(function (movie){
//     return `${movie.title} - ${movie.score / 100}`
// })

// // using arrow functions
// const newMovies = movies.map((movie) => {
//     return `${movie.title} - ${movie.score / 100}`
// })

// set Time out and setInterval

// console.log("Hellooo")

// setTimeout(() => {
//     console.log("Are you still there ?")
// },3000)

//filter method
// const odds = nums.filter(n => {
//     return n%2 === 1
// })

// Every and  Some method
// const exams = [80,98,92,45,74]
// allPassed = exams.every( marks => marks > 75)

const prices =  [80,98,92,45,74]
//reduce method
// let total = 0;
// for(let price of prices){
//     total+= price
// }

// console.log(total)

// // summing an array
// prices.reduce((total,price) => {
//     return total + price
// })
// you can also pass  a second argument into the reduce method
// here the starting value of sum is 100
// prices.reduce((sum,num) => sum+num,100)


// //finding the min value of an array
// //.reduce(accumulator,cuurentValue)
// //.reduce(firstelement,second eleemnt)
// const minValue = prices.reduce((min,price) => {
//     if (price < min){
//         min = price
//     }
//     return min
// })

// arrow functions and this keyword
// the keyword 'this' behaves differently in arrow functions rather than in regular functions
const person = {
    firstName: 'Viggo',
    lastName: 'Jack'
}