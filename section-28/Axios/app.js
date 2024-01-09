//by the axios libary it directly pass the json object we dont have to use res.json here
// axios.get("https://swapi.dev/api/people/1/")
//      .then((res) => {
//       console.log("Response!",res)
//      })

//      .catch((e) => {
//       console.log("error",e)
//      })

//using the async await syntax
const getStarWarsPerson = async (id) => {
  try{
    const res = await axios.get(`https://swapi.dev/api/people/${id}/`)
    console.log(res.data)
  }
  catch(e){
    console.log("Error",e)
  }
}

getStarWarsPerson(a);