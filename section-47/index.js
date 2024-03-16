const express = require('express');
const app = express();
const  shelterRoutes = require('./routes/shelters');
const dogRoutes = require('./routes/dogs');
const adminRoutes = require('./routes/admin');


// to use the routes we have to use the app.use() method
app.use('/shelters', shelterRoutes);
app.use('/dogs', dogRoutes);
app.use('/admins', adminRoutes);


app.listen(3000, () => {
    console.log("serving app on localhost:3000")
})