// setTimeout(() => {
//     document.body.style.backgroundColor = 'red';
//     setTimeout(() => {
//         document.body.style.backgroundColor = 'orange';
//         setTimeout(() => {
//             document.body.style.backgroundColor = 'yellow';
//         },1000)
//     },1000)
    
// },1000)

const delayedColorChange = (newColor, delay,doNext) => {
    setTimeout(() => {
        document.body.style.backgroundColor = newColor;
        doNext && doNext();
    },delay)
}

delayedColorChange('olive',1000, () => {
    delayedColorChange('orange',1000, () => {
        delayedColorChange('green',1000, () => {

        })
    })
})

searchMoviesAPI('harryPotter', () => {
    saveToMyDB(movies, () => {
        //if it works run this
    }, () => {
        //if it doesnt work run this
    })
}, () => {
    //if API is down or request failed
})