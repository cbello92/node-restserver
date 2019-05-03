require('./config/config');
const express = require('express');
const app = express();

const bodyParser = require('body-parser');

const port = process.env.PORT;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())
 
app.get('/usuario', function (req, res) {
  res.json('Get Usuarios')
});

app.post('/usuario', function (req, res) {

    let body = req.body;

    if(body.nombre === undefined) {
        res.status(400).json({
            ok: false,
            mensaje: 'El nombre es requerido'
        });

        return;
    }

    res.json({
        body
    })
});

app.put('/usuario', function (req, res) {
    res.json('Put Usuarios')
});

app.delete('/usuario', function (req, res) {
    res.json('Delete Usuarios')
});
 
app.listen(port, () => {
    console.log(`Escuchando en el puerto ${port}`);
});