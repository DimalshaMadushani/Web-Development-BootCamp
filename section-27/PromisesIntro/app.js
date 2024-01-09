// THE CALLBACK VERSION
const fakeRequestCallback = (url, success, failure) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
        if (delay > 4000) {
            failure('Connection Timeout :(')
        } else {
            success(`Here is your fake data from ${url}`)
        }
    }, delay)
}
// THE PROMISE VERSION 
const fakeRequestPromise = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * (4500)) + 500;
        setTimeout(() => {
            if (delay > 4000) {
                reject('Connection Timeout :(')
            } else {
                resolve(`Here is your fake data from ${url}`)
            }
        }, delay)
    })
}


// fakeRequestCallback('books.com/page1',
//     function(response){
//         console.log('It worked!!!!', response)
//         fakeRequestCallback('books.com/page2',
//             function(response){
//                 console.log('It worked again!!!!', response)
//                 fakeRequestCallback('books.com/page3',
//                     function(response){
//                         console.log('It worked again 3!!!!', response)
//                     },function(err){
//                         console.log('Error again 3!!!!', err)
//                 })
//             },function(err){
//                 console.log('Error again!!!!', err)
// })

//     },function(err){
//         console.log('Error!!!!', err)
// })



// fakeRequestPromise('yelp.com/api/coffee/page1')
//     .then(() => {
//         console.log('Promise resolved')
//         console.log('It worked!!!!')

//         fakeRequestPromise('yelp.com/api/coffee/page2')
//         .then(() => {
//             console.log('Promise resolved (2)')
//             console.log('It worked!!!!')

//             fakeRequestCallback('yelp.com/api/coffee/page3')
//             .then(() => {
//                 console.log('Promise resolved (3)')
//                 console.log('It worked!!!!')
//             })
//             .catch(() => {
//                 console.log('Promise rejected (3)')
//                 console.log('Oh no, error!!!!(3)')
//             })

//         })
//         .catch(() => {
//             console.log('Promise rejected (2)')
//             console.log('Oh no, error!!!!(2)')
//         })

//     }).catch(() => {
//         console.log('Promise rejected')
//         console.log('Oh no, error!!!!')
// })



// THE CLEANEST OPTION WITH THEN/CATCH
// RETURN A PROMISE FROM .THEN() CALLBACK SO WE CAN CHAIN!
fakeRequestPromise('yelp.com/api/coffee/page1')
    .then((data) => {
        console.log("it worked (page 1)")
        console.log(data)
        return fakeRequestPromise('yelp.com/api/coffee/page2')
    })
    .then((data) => {
        console.log("it worked (page 2)")
        console.log(data)
        return fakeRequestPromise('yelp.com/api/coffee/page3')
    })
    .then((data) => {
        console.log("it worked (page 3)")
        console.log(data)
    })
    .catch((err) => {
        console.log("OH NO, A REQUEST FAILED!!!",err)
    })


