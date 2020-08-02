// initialize modules
const express = require('express');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// instantiate server
const PORT = process.env.PORT || 3001;
const app = express();

// middleware and parsing
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);
app.use(express.static('public'));
// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}`);
})