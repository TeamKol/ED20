const express = require('express');
const path = require('path');
const app = express();

// Angular DIST output folder
app.use(express.static(path.join(__dirname, 'dist')));
// Send all other requests to the Angular app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

//Set Port
app.listen(3000);