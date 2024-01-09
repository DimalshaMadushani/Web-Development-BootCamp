// fetch("https://swapi.dev/api/people/1/")
// .then(res => {
//   console.log("resolved!",res)
//   // since the body of the resolved promise is readable stream we have use this .json 
//   return res.json()
// })
//   .then(data => {
//     console.log(data)
//   })
// .catch(err => {
//   console.log("Error",err)
// })

// fetch("https://swapi.dev/api/people/1/")
// .then(res => {
//   console.log("resolved!",res)
//   // since the body of the resolved promise is readable stream we have use this .json 
//   return res.json()
// })
//   .then(data => {
//     console.log(data)
//     //making a second request
//     return fetch("https://swapi.dev/api/people/2/")
//   })
//   .then(res => {
//     console.log("Second request resolved!")
//     return res.json()
//   })
//   .then(data => {
//     console.log(data)
//   })
// .catch(err => {
//   console.log("Error",err)
// })

//replace tthe above with await async syntax
const loadStarWarsPeople = async () => {
  try {
    const res = await fetch("https://swapi.dev/api/people/1/");
    const data = await res.json();
    console.log(data);

    const res2 = await fetch("https://swapi.dev/api/people/2/");
    const data2 = await res2.json();
    console.log(data2);
  }
  catch(e){
    console.log("Error",e)
  }
  
};

loadStarWarsPeople();