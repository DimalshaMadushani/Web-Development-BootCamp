const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send("This is a list of all shelters");
})

router.post('/', (req, res) => {
    res.send("Creating a new shelter");
})

router.get('/:id', (req, res) => {
    res.send("This is a single shelter");
})

router.get('/:id/edit', (req, res) => {
    res.send("Editing a shelter");
})

module.exports = router;

