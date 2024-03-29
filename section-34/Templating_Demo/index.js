const express = require('express');
const app = express();
const path = require('path');
const redditData = require('./data.json');
console.log(redditData);    
// This method mounts the specified middleware function(s). In this context,
// it's used to tell the Express.js app that you want the static files middleware to be applied to all incoming requests.
app.use(express.static(path.join(__dirname,'static_files')));

//behind the scenes express will require ejs and set it up for us
app.set('view engine','ejs')
//__dirname: This is a Node.js global variable 
//that gives you the absolute path of the directory containing the currently executing file.
app.set('views',path.join(__dirname,'/views'))

app.get('/',(req,res) => {
    // this renders the html ejs file
    res.render('home');
})

app.get('/rand',(req,res) => {
    // this renders the html ejs file
    const num = Math.floor((Math.random()*10)+1);
    let isOdd = true;
    if(num % 2 === 0){
        isOdd = false
    
    }
    res.render('random',{num,isOdd});
})
//subreddit template demo
app.get('/r/:subreddit',(req,res) => {
    const {subreddit} = req.params;
    //we cant use the dot notation to get the value of the key , here because the subreddit is a variable
    const data = redditData[subreddit];
    if(data){
        res.render('subreddit', {...data,subreddit})
    }else{
        res.render('notFound',{subreddit})
    }
    // res.render('subreddit',{subreddit})
})

//loop
app.get('/cats',(req,res) => {
    const cats = ['chuti','molly','babi'];
    res.render('cats',{cats})
})

app.listen(3000,() => {
    console.log('listening on port 3000');
})