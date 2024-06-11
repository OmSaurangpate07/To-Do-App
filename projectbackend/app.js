const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const todoRoutes = require('./routes/todo');

const app = express();
const port = 5000;

// MIDDLEWARE
app.use(cors());
app.use(bodyParser.json());

// MONGODB CONNECTION
mongoose.connect('mongodb://localhost:27017/todo-list', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('Could not connect to MongoDB', err);
});

// USE ROUTES
app.use('/api', todoRoutes);

// START SERVER
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
