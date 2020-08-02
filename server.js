// initialize modules
const express = require('express');
const fs = require('fs');
const path = require('path');


// instantiate server
const PORT = process.env.PORT || 3001;
const app = express();

const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// middleware
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);
// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}`);
})