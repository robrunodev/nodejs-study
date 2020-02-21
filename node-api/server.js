const express = require("express");
const cors = require('cors');
const mongoose = require("mongoose");
const requireDir = require('require-dir');
requireDir('./src/models'); // require-dir faz com que todos os models.'js' dentro da pasta sejam importados automaticamento.
const routes = require('./src/routes');

// Iniciando o App
const app = express();
app.use(express.json());
app.use(cors());

// Iniciando o Banco de Dados
mongoose.connect('mongodb://localhost:27017/nodeapi', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}); // nodeapi é o nome da database/schema que vamos utilizar

// Primeira rota
app.use("/api", routes);

app.listen(3001);