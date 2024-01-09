const jokes = document.querySelector("#jokes")
const button = document.querySelector("#btn")

const addnewJoke = async () => {
  const newJoke = await getDadJoke();
  const newLI = document.createElement("li")
  newLI.append(newJoke)
  jokes.append(newLI)
}


const getDadJoke = async () => {
  try{
    const config = {headers: {Accept:'application/json'}}
    const res = await axios.get("https://icanhazdadjoke.com/",config)
    return res.data.joke
  }
  catch(err){
    console.log("No jokes are available!")
  }

}

button.addEventListener('click', addnewJoke)