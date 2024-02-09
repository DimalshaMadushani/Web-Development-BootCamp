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
}

const Product = mongoose.model('Product',productSchema);
const bike = new Product({name:'Jersy',price: 9.5, categories: ['Cycling','Safety'],size:'M'})
bike.save()
    .then(data => {
        console.log("It worked!!")
        console.log(data);
    })

    .catch(err => {
        console.log("Oh noo Error!!")
        console.log(err.errors);
    })

//validating the mongoose updated data
//here we have use the runValidator:true to apply the validators into our updated data as well.
//otherwise it wont validate
Product.findOneAndUpdate({name:'Tire Pump'},{price:-20.4},{new:true,runValidators:true})
    .then(data => {
        console.log("It worked!!")
        console.log(data);
    })

    .catch(err => {
        console.log("Oh noo Error!!")
        console.log(err.errors);
    })


