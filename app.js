const express = require('express');
const app = express();
app.get('/', (req, res) => {
res.send('Hello, Update Greeting Message!');
});
module.exports = app;