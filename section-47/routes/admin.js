const express = require('express');
const router = express.Router();

// this is a middleware that will run for every single request for only admin routes
router.use((req,res, next) => {
    if(req.query.isAdmin){
        next();
    }
    res.send("Sorry, not an admin")
})

router.get('/topsecret', (req, res) => {
    res.send("This is a top secret");
})

router.get('/deleteeverything', (req, res) => {
    res.send("Ok, deleted it all");
})

module.exports = router;