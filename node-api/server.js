const express = require("express");
const mongoose = require("mongoose");
const requireDir = require('require-dir');

// Iniciando o App
const app = express();

// Iniciando o Banco de Dados
mongoose.connect('mongodb://localhost:27017/nodeapi', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}); // nodeapi é o nome da database/schema que vamos utilizar

requireDir('./src/models'); // require-dir faz com que todos os models.'js' dentro da pasta sejam importados automaticamento.

const Product = mongoose.model('Product');

// Primeira rota
app.get('/', (req, res) => {
    Product.create({
        title: 'React Native',
        description: 'Build native apps with React',
        url: 'http://github.com/facebook.com/react-native'
    })
    Product.
    res.send("Hello World");
});

app.listen(3001);