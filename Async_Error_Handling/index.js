const express = require('express');
const app = express();
const path = require('path');
//to ovveride the patch , delete requests
const methodOverride = require('method-override');
const mongoose = require("mongoose");
const AppError = require('./AppError')


//middleware
//this is for parsing the body of the request
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(express.json())// for parsing application/json
//_method is the name of the query string
app.use(methodOverride('_method'))

const Product = require('./models/product')
//connect to databse
mongoose.connect('mongodb://127.0.0.1:27017/farmStand2')
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
//defining the async utility
//The wrapAsync function you've provided is a utility designed to 
//handle errors in asynchronous route handlers in Express applications more cleanly. 
/*wrapAsync takes an asynchronous function fn as an argument. This function (fn) represents an asynchronous route handler in an Express application.
wrapAsync returns a new function that takes the standard Express route handler arguments: req, res, and next.
Inside this new function, fn is called with req, res, and next passed to it. Since fn is expected to be an asynchronous function, it returns a promise.
.catch(e => next(e)) is attached to the promise returned by fn. This means if any error occurs within the fn execution, instead of crashing the server or getting unhandled, it's caught by this .catch block.
The caught error e is then passed to Express's next function, which is how errors are typically handled in Express. Express can then pass this error to any error handling middleware 
*/
function wrapAsync(fn){
    return function(req,res,next){
        fn(req,res,next).catch(e => next(e))
    }
}

//Async route handler
app.get('/products',wrapAsync(async (req,res,next) => {
        const {category} = req.query;
        // console.log(category)
        let products;
        if(category && category != 'all'){
            products = await Product.find({category})
        }else{
            products = await Product.find({})
        }
        // console.log(products)
        res.render('products/index',{products,categories,category})
}))

//add new product
//render the form
app.get('/products/new',(req,res,next) => {
    //throwing the our custom error class eroor 
    // throw new AppError('Not Allowed!',401);
    // // Instead of throwing, we use next() to pass the error.
    // const err = new AppError('Not Allowed!', 401);
    // next(err);
    res.render('products/new',{categories})
})

app.post('/products',wrapAsync(async (req,res,next) => {
    //use this try catch block to handle validation errors when submit the form
    //like not filling all the field of the form

    const {name,price,category} = req.body;
    //otherwise pass the req.body into create
    await Product.create({name:name,price:price,category:category});
    res.redirect('/products')
}))


//show one product
//handling async errors
app.get('/products/:id', wrapAsync(async (req, res, next) => {
        const { id } = req.params;
        const product = await Product.findById(id);
        if (!product) {
            // Instead of throwing directly, use next() with the error.
            throw (new AppError('Product not found', 404));
        }
        res.render('products/show', { product });
}));



//edit a product details
app.get('/products/:id/edit',wrapAsync(async (req,res,next) =>{
    //used this try catch block to when there is an error with invalid product id
    const {id} = req.params;
    const product = await Product.findById(id);
    if(!product){
        throw new AppError('Product not found',404)
    }
    res.render('products/edit',{product,categories})

}))

app.patch('/products/:id', wrapAsync(async (req,res,next) => {
    //use this try catch block to handle validation errors when submit the form
    //like not filling all the field of the form

    const {id} = req.params;
    // console.log(id)
    const {name,price,category} = req.body;
    // console.log(name,price)
    // const product = await Product.findById(id);
    await Product.findByIdAndUpdate(id, req.body,{runValidators:true})
    res.redirect('/products')
   
}))

app.delete('/products/:id',wrapAsync(async (req,res) => {
    const {id} = req.params;
    await Product.findByIdAndDelete(id);
    res.redirect('/products')
}))

//error handling middleware
app.use((err,req,res,next) => {
    const {status = 500, message = 'Something went wrong !'} = err;
    res.status(status).send(message)
})

app.listen(3002,()=>{
    console.log("App is listening on port 3002 !!")
})