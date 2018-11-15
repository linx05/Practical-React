const path = require('path');
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.static(path.join(__dirname, '..', 'app')));
app.use('/docs', express.static(path.join(__dirname, 'doc')));
app.use(require('./controllers'));

// handle 404
app.use(function (req, res) {
    res.status(404);
    res.json({ error: 'route not found' });
});

// handle 500
app.use(function (error, req, res, next) {
    res.status(500);
    res.json({ error: error });
});

app.listen(8080, () => console.log('Catastic is running on port 8080!'));
