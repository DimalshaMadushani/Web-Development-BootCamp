const mongoose = require('mongoose')
// mongoose.connect('mongodb://127.0.0.1:27017/relationshipDemo', {
//     useNewUrlParser: true, // Use the new URL parser
//     useUnifiedTopology: true, // Use the new server discovery & monitoring engine
//     useFindAndModify: false // Use `findOneAndUpdate()` and `findOneAndDelete()` without the `findAndModify` functionality
// })
// .then(() => {
//     console.log("Mongo Database connected !!")
// })
// .catch(err => {
//     console.log("Mongo Database connection error !!!")
//     console.log(err)
// });

// connect to databse
mongoose.connect('mongodb://127.0.0.1:27017/relationshipDemo',)
    .then(() => {
        console.log("Mongo Database connected !!")
    })
    .catch(err => {
        console.log("Mongo Database connection error !!!")
        console.log(err)
    })

const userSchema = new mongoose.Schema({
    first: String,
    last: String,
    addresses: [
        {
            _id:{_id:false},
            street: String,
            city:String,
            state: String,
            country:String
        }
    ]
})

const User = mongoose.model('User',userSchema);

const makeUser = async () => {
    const u = new User({
        first:'Harry',
        last:'Potter'
    })
    u.addresses.push({
        
        street: '99 3rd St',
        city:'New York',
        state: 'KP',
        country:'UK'
    })
    
    const res = await u.save()
    console.log(res)
}
const addAddress = async(id) => {
    const user = await User.findById(id);
    user.addresses.push({
        
        street: '15 3rd St',
        city:'dd York',
        state: 'KP',
        country:'UK'
    })
    const res = await user.save()
    console.log(res);
}
addAddress("65ebe4a3df9819857fba99dc")
// makeUser();