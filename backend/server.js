const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 5000;


app.use(cors()); 
app.use(express.json()); 

mongoose.connect('mongodb+srv://Himateja:Teja123@atlascluster.epnrmb7.mongodb.net/?retryWrites=true&w=majority&appName=AtlasCluster', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});


app.get('/api/weather', (req, res) => {
    res.send('Weather API is working!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});





