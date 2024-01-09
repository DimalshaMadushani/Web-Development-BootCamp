new Promise((resolve, reject) => {
    reject();

})

const fakeRequest = (url) => {
    return new Promise((resolcve, reject) => {
        const rand = Math.random();
        setTimeout(() => {
            if (rand < 0.7) {
                resolcve('Your fake data here');
            }
            reject('Request error');
        }, 1000)
    })
}

fakeRequest('/dogs/1')
    .then((data) => {
        console.log("Done with request")
        console.log('data is:', data)
    })
    .catch((err) => {
        console.log("oh nooo ! Error!!!!!!!!",err)

    })

// const delayedColorChange = (newColor, delay, doNext) => {
//     setTimeout(() => {
//         document.body.style.backgroundColor = newColor;
//         doNext && doNext();
//     }, delay)
// }

// delayedColorChange('red', 1000, () => {
//     delayedColorChange('orange', 1000, () => {
//         delayedColorChange('yellow', 1000, () => {
//             delayedColorChange('green', 1000, () => {
//                 delayedColorChange('blue', 1000, () => {
//                     delayedColorChange('indigo', 1000, () => {
//                         delayedColorChange('violet', 1000, () => {

//                         })
//                     })
//                 })
//             })
//         })
//     })
// });


setTimeout(function(){
    console.log('I waited 1 second')
}, 1000)

setTimeout(() => {
    console.log('I waited 2 second')
}, 2000)


const delayedColorChange = (color, delay) => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay)
    })

}


delayedColorChange('red', 1000)
    .then(() => {
        return delayedColorChange('orange', 1000)
        })
    .then(() => delayedColorChange('yellow', 1000))
    .then(() => delayedColorChange('green', 1000))
    .then(() => delayedColorChange('blue', 1000))
    .then(() => delayedColorChange('indigo', 1000))
    .then(() => delayedColorChange('violet', 1000))