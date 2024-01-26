const express = require('express');
const app = express();
const path = require('path');
 const {v4: uuid} = require('uuid')
uuid();
const methodOverride = require('method-override');

//middleware
//this is for parsing the body of the request
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(express.json())// for parsing application/json
//_method is the name of the query string
app.use(methodOverride('_method'))

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'))

let comments = [{
    id:uuid(),
    username:'nimal',
    comment: 'Lol that is so funny'
},
{
    id:uuid(),
    username:'kamal',
    comment: 'Ridiculous'
},
{
    id:uuid(),
    username:'amal',
    comment: 'looking like a wow'
},
{
    id:uuid(),
    username:'bimal',
    comment: 'So beautiful'
}
]


//for the comments resource
// reading all the comments
app.get('/comments',(req,res) => {
    res.render('comments/index',{comments})
})
// to create a new comment we need two routes for render a form(GET) and to submit the form(POST)
app.get('/comments/new',(req,res) => {
    //here comments/new is where the ejs file is located
    res.render('comments/new')
})
//submit the form(POST)
app.post('/comments',(req,res) => {
    const {username,comment} = req.body;
    //this uuid creates a unique id for newly created comments
    comments.push({username,comment,id:uuid()})
    console.log(req.body)
    // res.send('it worked!!' )
    console.log(comments)
    res.redirect('/comments')
})

//getting a single comment
app.get('/comments/:id',(req,res) => {
    const {id} = req.params;
    const comment = comments.find(c => c.id === (id))
    //console.log(comment)
    res.render('comments/show',{comment})
})

//express method override
//to update a comment
//to render the form
app.get('/comments/:id/edit',(req,res) => {
    const {id} = req.params;
    const comment = comments.find(c => c.id === (id))
    res.render('comments/edit',{comment})

})
//update a comment
app.patch('/comments/:id',(req,res) => {
    const {id} = req.params;
    const newComment = req.body.comment;
    const fullFoundComment = comments.find(c => c.id === (id))
    fullFoundComment.comment = newComment;
    // res.send('Updating something!')
    res.redirect('/comments');
})


//delete a comment
app.delete('/comments/:id',(req,res) => {
    const {id} = req.params;
    // const fullFoundComment = comments.find(c => c.id === (id));
    // it is better to create a new array and use filter method to remove the comment
    console.log(id);
    comments = comments.filter(c => c.id !== id);
    console.log(comments)
    res.redirect('/comments')

})

app.get('/tacos',(req,res) => {
    res.send("GET /tacos response")
})

app.post('/tacos',(req,res) => {
    // to work this we need to use middleware which is url encoded
    const {meat,qty} = req.body
    // console.log(req.body)
    res.send(`OK, here are your ${qty} ${meat} tacos`)
})


app.listen(3000,() => {
    console.log('listening on port 3000');
})