// function generateNumber() {
//     return new Promise((resolve,reject) => {
//         const randNumber = Math.floor(Math.random()*10)
//         if(randNumber > 5){
//             resolve("The number is " +  randNumber)
//         } else{
//             reject("The number is less than 5")
//         }
//     }) 
// }

// // generateNumber()
// //     .then((result) =>
// //         console.log(result)
// //     )
// //     .catch((error) => {
// //         console.log(error)
// //     })

//     //replace the above syntax using async await 
// async function checkNumber() {
//     try{
//         const randNumber = await generateNumber();
//         console.log("The number is " +  randNumber)
//     }
//     catch(error){
//         console.log(error);
//     }
// }

// checkNumber();

async function hello() {

}

const sing = async () => {
    return 'lA la la'
}

const login = async (username,password) => {
    if(!username || !password) throw 'Missing Credentials'
    if(password === 'hellocorgi') return 'Welcome!'
    throw 'Invalid password'
}

login('dhhdgdd')
    .then(msg => {
        console.log("logged in")
        console.log(msg)
    })
    .catch(err => {
        console.log("errorrr")
        console.log(err)
    }) 



    const delayedColorChange = (color, delay) => {
        return new Promise((resolve,reject) => {
            setTimeout(() => {
                document.body.style.backgroundColor = color;
                resolve();
            }, delay)
        })
    
    }
    
    
    // delayedColorChange('red', 1000)
    //     .then(() => {
    //         return delayedColorChange('orange', 1000)
    //         })
    //     .then(() => delayedColorChange('yellow', 1000))
    //     .then(() => delayedColorChange('green', 1000))
    //     .then(() => delayedColorChange('blue', 1000))
    //     .then(() => delayedColorChange('indigo', 1000))
    //     .then(() => delayedColorChange('violet', 1000))

async function rainbow() {
    await delayedColorChange('red',1000)
    await delayedColorChange('orange', 1000)
    await delayedColorChange('yellow', 1000)
    await delayedColorChange('green', 1000)
    return "ALL done!"
}

// rainbow().then(() => console.log("end of the colors"))

async function printRainbow() {
    await rainbow();
    console.log("End of rainbow!")
}

printRainbow()