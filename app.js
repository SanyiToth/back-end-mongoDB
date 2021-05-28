const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
require('dotenv/config');


app.use(bodyParser.json());

const postsRoute = require('./routes/posts')
app.use('/posts', postsRoute);

//Routes
app.get('/', (req, res) => {
    res.send('We are on home');
})

mongoose.connect('mongodb+srv://Test:testtest@cluster0.7y5gc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    () => {
        console.log('Connected to DB!');
    })


app.listen(process.env.PORT || 3000);
