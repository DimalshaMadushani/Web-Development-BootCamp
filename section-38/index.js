const express = require('express');
const app = express();
const path = require('path');
//to ovveride the patch , delete requests
const methodOverride = require('method-override');
const mongoose = require("mongoose");
//middleware
//this is for parsing the body of the request
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(express.json())// for parsing application/json
//_method is the name of the query string
app.use(methodOverride('_method'))

const Product = require('./models/product')
//connect to databse
mongoose.connect('mongodb://127.0.0.1:27017/farmStand')
    .then(() => {
        console.log("Mongo Database connected !!")
    })
    .catch(err => {
        console.log("Mongo Database connection error !!!")
        console.log(err)
    })

app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');


const categories = ['fruit','vegetable','dairy']
//Async route handler
app.get('/products',async (req,res) => {
    const {category} = req.query;
    console.log(category)
    let products;
    if(category && category != 'all'){
        products = await Product.find({category})
    }else{
        products = await Product.find({})
    }
    // console.log(products)
    res.render('products/index',{products,categories,category})
})
//add new product
//render the form
app.get('/products/new',(req,res) => {
    // const {product} = req.params;
    // console.log(product);
    res.render('products/new',{categories})
})

app.post('/products',async (req,res) => {
    const {name,price,category} = req.body;
    // console.log(name,price,category);
    //add the new product to the Product database
    //otherwise pass the req.body into create
    await Product.create({name:name,price:price,category:category});
    res.redirect('/products')

})


//show one product details
app.get('/products/:id',async (req,res) => {
    const {id} = req.params;
    const product = await Product.findById(id);
    // res.send("details page start")
    // console.log(product)
    res.render('products/show',{product})
})

// //show all products of a one category
// app.get('/products/:category',async(req,res) => {
//     const {category} = req.params;
//     console.log(category)
//     res.send("hit the route")
// })


//edit a product details
app.get('/products/:id/edit',async (req,res) =>{
    const {id} = req.params;
    // console.log(id,name,price,category)
    const product = await Product.findById(id);
    console.log(product)
    res.render('products/edit',{product,categories})
})

app.patch('/products/:id', async (req,res) => {
    const {id} = req.params;
    // console.log(id)
    const {name,price,category} = req.body;
    // console.log(name,price)
    // const product = await Product.findById(id);
    await Product.findByIdAndUpdate(id, req.body,{runValidators:true})
    res.redirect('/products')
})

app.delete('/products/:id',async (req,res) => {
    const {id} = req.params;
    await Product.findByIdAndDelete(id);
    res.redirect('/products')
})

app.listen(3000,()=>{
    console.log("App is listening on port 3000 !!")
})