function getID(people) {
    if (!people || people.length === 0) {
      throw new Error('The people array is empty or not provided');
    }
  
    // Extract the prefix from the first ID
    const prefix = people[0].id.split('-')[0];
    // Extract the numeric parts of the IDs
    const ids = people.map(person => parseInt(person.id.split('-')[1], 10));
    // Find the maximum number in the extracted IDs
    const maxId = Math.max(...ids);
    // Generate the next ID by incrementing the maximum ID found
    const nextIdNumber = maxId + 1;
    // Create the next ID with the extracted prefix
    const nextId = `${prefix}-${String(nextIdNumber).padStart(3, '0')}`;
    return nextId;
  }
;

const express = require('express');
const app = express();
const path = require('path');
//to ovveride the patch , delete requests
const methodOverride = require('method-override');
const {academic,nonAcademic,students} = require('./database')
//middleware
//this is for parsing the body of the request
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(express.json())// for parsing application/json
//_method is the name of the query string
app.use(methodOverride('_method'))

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'))

//global variables
let profiles;
//Home route handler
app.get('/profiles',(req,res) => {
    // res.send("WELCOME")
    //console.log(`Views directory is set to: ${app.get('views')}`); to check the path of views is correct
    // console.log(data) - to check wether the database is loaded as a json object
    res.render('profiles/home',{academic,nonAcademic,students})
})

//generic route for category of staff
app.get('/profiles/:category',(req,res) => {
    const {category} = req.params;
    // let title;
    // let profiles;
    // console.log(students)
    switch(category){
        case "academic":
            title = "Academic Staff",
            profiles = academic;
            break;
        case "nonAcademic":
            title = "Non Academic Staff",
            profiles = nonAcademic;
            break;
        case "students":
            title = "Students",
            profiles = students;
            break;
    }
    res.render('profiles/index',{title,profiles,category})
   
})

// create a new profile , we need a GET and POST request 
// GET request to render the form
app.get('/profiles/:category/new',(req,res) => {
    const {category} = req.params;
    let title;
    // let profiles;
    switch(category){
        case "academic":
            title = "Academic Staff New",
            profiles = academic;
            break;
        case "nonAcademic":
            title = "Non Academic Staff new",
            profiles = nonAcademic;
            break;
        case "students":
            title = "Students New",
            profiles = students;
            break;
    }

    res.render('profiles/new',{title,category,profiles})
}) 

//POST request to submit the form
app.post('/profiles/:category',(req,res) => {
    const {category} = req.params;
    let title;
    let profiles;
    const {name,designation,age,email} = req.body;
    console.log(req.body)
    switch(category){
        case "academic":
            title = "Academic Staff New",
            profiles = academic;
            break;
        case "nonAcademic":
            title = "Non Academic Staff new",
            profiles = nonAcademic;
            break;
        case "students":
            title = "Students New",
            profiles = students;
            break;
    }
    const newID = getID(profiles);
    // console.log(newID)
    profiles.push({id:newID,name,designation,age,email});
    // console.log(profiles)
    res.redirect(`/profiles/${category}`)
})

//show a profile of one 
app.get('/profiles/:category/:id',(req,res) => {
    const {id,category} = req.params;
    //choosing the corresponding profile set according to category
    switch(category){
        case "academic":
            title = "Academic staff show",
            profiles = academic;
            break;
        case "nonAcademic":
            title = "Non Academic Staff show",
            profiles = nonAcademic;
            break;
        case "students":
            title = "Students show",
            profiles = students;
            break;
    }
    //get the corressponding profile by the id
    const profile = profiles.find(p => p.id === (id));
    res.render('profiles/show',{profile,category})
})

//edit a profile
//express method override
//to render the form

app.get('/profiles/:category/:id/edit',(req,res) => {
    const {category,id} = req.params;
    // let title;
    // let profiles;
    // const {name,designation,age,email} = req.body;
    switch(category){
        case "academic":
            title = "Academic Staff New",
            profiles = academic;
            break;
        case "nonAcademic":
            title = "Non Academic Staff new",
            profiles = nonAcademic;
            break;
        case "students":
            title = "Students New",
            profiles = students;
            break;
    }
    const profile = profiles.find(p => p.id === (id))
    // res.send("edit")
    res.render('profiles/edit',{profile,title,category})

})

//update the profile 
app.patch('/profiles/:category/:id',(req,res) => {
    const {category,id} = req.params;
    // let title;
    // let profiles;
    //destructure the object req.body into variables
    const {name,designation,age,email} = req.body;
    switch(category){
        case "academic":
            title = "Academic Staff New",
            profiles = academic;
            break;
        case "nonAcademic":
            title = "Non Academic Staff new",
            profiles = nonAcademic;
            break;
        case "students":
            title = "Students New",
            profiles = students;
            break;
    }
    //find the profile which needed to edit
    const profile = profiles.find(p => p.id === (id))
    //assign the new values to the profile
    profile.name = name;
    profile.designation = designation;
    profile.age = age;
    profile.email = email
    console.log(req.body)

    res.redirect(`/profiles/${category}`)

})

app.delete('/profiles/:category/:id',(req,res) => {
    const {category,id} = req.params;
    // let title;
    // let profiles;
    console.log(id)
    //destructure the object req.body into variables
    const {name,designation,age,email} = req.body;
    switch(category){
        case "academic":
            title = "Academic Staff New",
            profiles = academic;
            break;
        case "nonAcademic":
            title = "Non Academic Staff new",
            profiles = nonAcademic;
            break;
        case "students":
            title = "Students New",
            profiles = students;
            break;
    }

    //find the profile which needed to edit
    console.log(profiles)
    profiles = profiles.filter(p => p.id !== (id));
    console.log(profiles)
    res.redirect(`/profiles/${category}`) ///////////////not workingggggggggggggggggg
    // res.redirect("/profiles")
})


app.listen(3000,() => {
    console.log("Listening on port 3000...")
})