const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send({ pregunta: 'Oye como va!' });
});

app.post('/', (req, res) => {
    console.log("req", req);
});

app.listen(process.env.PORT || 3333, () => {
    console.log('Application listening on port 3333!');
});