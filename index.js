const app = require('./app');
const express = require('express');
const routes = require('./routes');
const Loaders = require('./Loaders/index');
const cors = require('cors')

app.use(express.json());
app.use(routes);
app.use(cors());
Loaders.start();
app.listen(3000, () => console.log("Servidor rodando na porta 3000"));