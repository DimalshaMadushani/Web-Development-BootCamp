//require the jokester module
const jokes = require("give-me-a-joke");
const colors = require("colors");

const joke = jokes.getRandomDadJoke (function(joke) {
     console.log(joke.rainbow);
});
// console.dir(jokes);

