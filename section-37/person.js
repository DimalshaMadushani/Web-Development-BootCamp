const mongoose = require("mongoose");
mongoose.connect('mongodb://127.0.0.1:27017/shopApp')
    .then(() => {
        console.log("Database connected")
    })
    .catch(err => {
        console.log("Database connection error")
        console.log(err)
    })

const personSchema = new mongoose.Schema({
    first:String,
    last:String
})

//getter to get the actual property of the schema called fullName
personSchema.virtual('fullName')
    .get(function() {
        return `${this.first} ${this.last}`
    })
    .set(function(v){
        this.first = v.substr(0,v.indexOf(' '));
        this.last = v.substr(v.indexOf(' ')+1);
    })

//middleware in mongoose
personSchema.pre('save',async function(){
    this.first = "YO";
    this.last = "MAMA";
    console.log("About to save")
})

personSchema.post('save',async function(){
    console.log("Just saved")
})

const Person = mongoose.model('Person',personSchema);
const dimo = new Person({first:'Dimalsha',last:'Madushani'})
dimo.save()

//instead of using above two line use the create method, then no need to explictlty call the save method
// const dimo = await Person.create({first:'Dimalsha',last:'Madushani'})   

//accessing the fullname property
console.log( dimo.fullName)
dimo.fullName = "Dimndsha nyhdg";
console.log(dimo.first)

//run this code segment only to understand the middlewae
const k = new Person({first:'Kasun',last:'kalhara'})
k.save();