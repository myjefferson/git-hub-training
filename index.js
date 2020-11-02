const express = require('express');

const app = express();

app.get('/treino1', (req, res) => {
    return res.json({hello: 'Hello treino'});
});

app.listen(3333);