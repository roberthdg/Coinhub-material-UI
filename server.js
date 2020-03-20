const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5000;
let compression = require('compression');

//Middleware
app.use(compression());
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build'), { maxAge: 86400000 }));
app.get('*', function (req, res) {
 res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


app.listen(PORT);