const mongoose = require("mongoose");
mongoose.connect('mongodb://127.0.0.1:27017/shopApp')
    .then(() => {
        console.log("Database connected")
    })
    .catch(err => {
        console.log("Database connection error")
        console.log(err)
    })

const productSchema = new mongoose.Schema({
    name: {
        type:String,
        required: true,
        maxlength: 20
    },
    price: {
        type:Number,
        min:[0,'Price must be positive! ']
    },
    onSale:{
        type: Boolean,
        default:false
    },
    categories: [String],

    qty:{
        online:{
            type:Number,
            default:0
        },
        inStore:{
            type:Number,
            default:0
        }
    },
    size:{
        type:String,
        enum:['S','M','L']
    }
    
})
// model instance methods, call functions on a instances of a model
productSchema.methods.greet = function() {
    console.log("Welcome to Store!")
    console.log(`-from ${this.name}`)
}

productSchema.methods.toggleOnSale = function() {
    this.onSale = !this.onSale;
    //return thenable
    return this.save();
}

productSchema.methods.addCategory = function(newcat){
    this.categories.push(newcat);
    return this.save();
}

// adding static methods 
productSchema.statics.fireSale = function(){
    return this.updateMany({},{onSale:true, price:1})
}

const Product = mongoose.model('Product',productSchema);
// // const p = new Product({name:"bike bottle",price:4});
// p.save();
// p.greet();

// const findProduct = async () => {
//     const foundProduct = await Product.findOne({name:'bike bottle'});
//     console.log(foundProduct);
//     // foundProduct.greet();

//     await foundProduct.toggleOnSale();
//     console.log(foundProduct)

//     await foundProduct.addCategory('outdoors');
//     console.log(foundProduct)
// }

// findProduct();

Product.fireSale()
    .then(data => console.log(data))
    .catch(err => console.log(err))

