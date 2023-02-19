const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const app = express();
const Loaders = require('./Loaders/index');
require('dotenv').config();
app.use(cors());
app.use(express.json());
app.use(routes);
Loaders.start();

app.listen(process.env.PORT, () => console.log("Servidor rodando na porta: "+process.env.PORT));