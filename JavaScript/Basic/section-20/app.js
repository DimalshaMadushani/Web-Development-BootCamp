console.log("Hello Script!")

let array = ["red","yellow","orange"]
console.log(array[1])

array[5] = "indigo"
console.log(array)

array.push("pink")

array.splice(3,0,"blue")

array.splice(4,1,"blue")

for(let i=0; i< 10;i++){
    console.log(i)
}

let maximum = parseInt(prompt("Enter the max number"))
while(!maximum){
    maximum = parseInt(prompt("Enter the max number"))
}
const targetNum = Math.floor(Math.random()*maximum) + 1


let guess = parseInt(prompt("Enter the first guess"))
let attemps = 1;
while(guess !== targetNum){
    attemps++
    if(guess > targetNum){
        guess = parseInt(prompt("Too high! Enter a new guess:"))
    }else{
        guess = parseInt(prompt("Too law! enter a new guess:"))
    }
}

console.log(`You got it! It took you ${attemps} guesses`)