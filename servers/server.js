const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());


mongoose.connect('mongodb://localhost:27017/helpCenter', {
})
.then(() => console.log("MongoDB connected"))
.catch(err => console.log(err));

const cardRoutes = require('./routes/cardRoutes');
app.use('/', cardRoutes);


app.get('/ping', (req, res) => {
    res.send('Server is running!');
});


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
