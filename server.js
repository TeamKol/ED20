require('dotenv').config();
const express = require('express');
const path = require('path');
assert = require('assert');
const MongoClient = require('mongodb').MongoClient;
const app = express();
// Angular DIST output folder
app.use(express.static(path.join(__dirname, 'dist')));
// Send all other requests to the Angular app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});
MongoClient.connect(process.env.MONGO_URI, function(err, db) {
    assert.equal(null, err);
    console.log('successfully connected to database');
});

//Set Port
app.listen(process.env.PORT, function(){
    console.log('i am listening' + process.env.PORT);
});