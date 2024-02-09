const mongoose = require("mongoose");
mongoose.connect('mongodb://127.0.0.1:27017/movieApp')
    .then(() => {
        console.log("Database connected")
    })
    .catch(err => {
        console.log("Database connection error")
        console.log(err)
    })

// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//   // we're connected!
//   console.log("Database connected")
// });

// getting-started.js , available code in the site
// const mongoose = require('mongoose');

// main().catch(err => console.log(err));

// async function main() {
//   await mongoose.connect('mongodb://127.0.0.1:27017/myMovieApp');
//   console.log("Database connected!")

//   // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
// }

const movieSchema = new mongoose.Schema({
    title:String,
    year:Number,
    score:Number,
    rating:String
});

// creating a model
const Movie = mongoose.model('Movie',movieSchema);

// // const godFather = new Movie({title:'God Father',year:1972,score:9.2,rating:'R'});

// //insert many
// Movie.insertMany([
//     {title:'Shawshank Redemption',year:1994,score:9.3,rating:'R'},
//     {title:'The Dark Knight',year:2008,score:9.0,rating:'PG-13'},
//     {title:'Doraemon',year:2000,score:8.0,rating:'G'},
//     {title:'Hero',year:1972,score:9.2,rating:'R'},
// ])

// .then(data => {
//     console.log("It worked");
//     console.log(data);
// })

// // finding and updating
// Movie.find({year:{$gte:2000}}).then(data => console.log(data))

// Movie.updateMany({title:{$in: ['Hero','Doraemon']}},{score:10}).then(
//     data => console.log(data))
    
// //use new:true to get the updated data
// Movie.findOneAndUpdate({title:'Hero'},{score:2},{new:true}).then(m =>
//     console.log(m))
   
// Movie.findOneAndUpdate({title:'Hero'},{score:1},{new:true}).then(m =>
//     console.log(m))
       
// //deleting

// Movie.deleteMany({year:{$gte : 2008}}).then(msg => console.log(msg))
//Movie.findOneAndDelete({title:'Hero'}).then(msg => console.log(msg))
