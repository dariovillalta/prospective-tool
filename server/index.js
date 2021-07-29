const express = require('express');
const app = express();
const xml = require('xml');

app.get('/', (req, res) => {
    res.contentType('application/xml');
    res.type('application/xml');
    res.send(xml( {pregunta: 'Oye como va!'} ) );
});

app.post('/', (req, res) => {
    console.log("req", req);
});

app.listen(process.env.PORT || 3333, () => {
    console.log('Application listening on port 3333!');
});