// //default params
// function rollDie(numSides = 6){
//     return Math.floor(Math.random() * numSides) + 1
// }

// //spread in function calls
// const nums = [10,45,50]
// Math.max(nums)
// // h e l l o
// console.log(..."hello")

//spread with array literals
// const cats = ["kiit","blue"]
// const dogs = ["blue","browny"]

// const allpets = [...cats,...dogs]

//[..."hello"] sprad each character to the 

// // spread in object literals
// const feline = { legs:4,familiy:"Faide"}

// const canine = {isFurry:true, family:"caninae"}

//copy and create e new object {...feline,...canine,lifespan:20}

// //rest params
// function sum(...nums){
//     return nums.reduce((total,el) => total + el)
// }

// // collecting things into a parameter
// function raceResults(gold,silver,...everyoneElse){
//     console.log(`Gold medal goes to: ${gold}`)
//     console.log(`Silver medal foes to: ${silver}`)
//     console.log(`And thanks to everyone else:${everyoneElse}`)
// }

//destructuring
const scores = [124,451,789,563]
const [gold, silver,bronze] = scores
const[lowest, ...restOfScores] = scores

//distructuring from an object
const user ={
    email: 'harvey@gmail.com',
    password: 't54dfsg',
    firstName: 'Harvey',
    lastName: 'Milk',
    born: 2000,
    city: 'Seuol'
}

// // const email = user.email;
// const {email, firstName,city} = user
// const {born:birthYear} = user

//destructuring params
// pass only needed attributes of the object rather than passing thw whole object
function fullName({firstName,lastName}){
    return `${firstName} ${lastName}`
}
