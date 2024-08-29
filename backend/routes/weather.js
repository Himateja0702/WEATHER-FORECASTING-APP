const express = require('express');
const router = express.Router();
const SearchHistory = require('../models/SearchHistory');

// Route to save search history
router.post('/search', async (req, res) => {
    const { city } = req.body;
    try {
        const newSearch = new SearchHistory({ city });
        await newSearch.save();
        res.status(201).json(newSearch);
    } catch (error) {
        res.status(500).json({ message: 'Error saving search history' });
    }
});

// Route to get all search history
router.get('/history', async (req, res) => {
    try {
        const history = await SearchHistory.find().sort({ createdAt: -1 });
        res.json(history);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching search history' });
    }
});

module.exports = router;
