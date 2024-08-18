const express = require('express');
const router = express.Router();
const Card = require('../models/Card');


router.post('/cardsp', async (req, res) => {
    const { title, description } = req.body;

    if (!title || !description) {
        return res.status(422).json({ error: '"Title and Description are required"' });

    }

    try {

        const newcard = new Card({ title, description });
        const response = await newcard.save();
        if (response) {

            res.status(201).json({ message: 'card posted successfully' });

        }

    } catch (error) {
        console.log(error);

    }


});


router.get('/cards', async (req, res) => {
    try {
        const cards = await Card.find();
        res.json(cards);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


router.get('/cards/:title', async (req, res) => {
    const { title } = req.params;

    try {
        const card = await Card.findOne({ title });
        if (card) {
            res.json(card);
        } else {
            res.status(404).json({ message: "Card not found" });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
