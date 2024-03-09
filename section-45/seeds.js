const mongoose = require("mongoose");

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

// const p = new Product({
//     name:'Grapefruit',
//     price:1.99,
//     category:'fruit'
// })

// p.save().then(p => {
//     console.log(p)
// })
// .catch(err => {
//     console.log(err)
// })

const seedProducts = [
    {"name": "Grapefruit", "price": 1.99, "category": "fruit"},
    {"name": "Apple", "price": 0.99, "category": "fruit"},
    {"name": "Banana", "price": 0.59, "category": "fruit"},
    {"name": "Carrot", "price": 1.50, "category": "vegetable"},
    {"name": "Broccoli", "price": 2.00, "category": "vegetable"},
    {"name": "Spinach", "price": 1.99, "category": "vegetable"},
    {"name": "Milk", "price": 3.49, "category": "dairy"},
    {"name": "Cheese", "price": 5.99, "category": "dairy"},
    {"name": "Yogurt", "price": 0.99, "category": "dairy"},
    {"name": "Orange", "price": 0.69, "category": "fruit"}
]

Product.insertMany(seedProducts)
    .then(res => {
        console.log(res)
    })
    .catch(err => {
        console.log(err)
    })