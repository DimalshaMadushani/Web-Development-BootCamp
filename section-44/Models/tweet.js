const mongoose = require('mongoose')
//takes the Schema property from the mongoose object and 
//creates a new variable named Schema that can be used to define schemas.
const { Schema } = mongoose;

// connect to databse
mongoose.connect('mongodb://127.0.0.1:27017/relationshipDemo',)
    .then(() => {
        console.log("Mongo Database connected !!")
    })
    .catch(err => {
        console.log("Mongo Database connection error !!!")
        console.log(err)
    });

const userSchema = new Schema({
    username:String,
    age:Number
})

const tweetSchema = new Schema({
    text: String,
    likes: Number,
    user:{type: Schema.Types.ObjectId, ref:'User'}
})

const User = mongoose.model('User',userSchema);
const Tweet = mongoose.model('Tweet',tweetSchema);

// const makeTweets = async () => {
//     // const user = new User({ username: 'Dimalsha', age:23});
//     const user = await User.findOne({username: 'Dimalsha'})
//     // const tweet1 = new Tweet({ text:"I love Catss!",likes:2});
//     const tweet2 = new Tweet({ text:"I love Dogs!",likes:23});
//     // tweet1.user = user;
//     tweet2.user = user;
//     // user.save();
//     // tweet1.save();
//     tweet2.save();
// }


// makeTweets();

// const findTweet = async () => {
//     const t = await Tweet.find({}).populate('user','username')
//     console.log(t);
// }

// findTweet();

Tweet.find({})
    .populate('user')
    .then(res => {console.log(res)})
