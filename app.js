'use strict';

const express = require('express');
const morgan = require('morgan');

const playstore = require('./playstore');

const app = express();

app.get('/apps', (req, res) => {

});

app.listen(8000, () => {
    console.log('Server on 8000!');
});