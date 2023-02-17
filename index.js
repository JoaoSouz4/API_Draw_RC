const app = require('./app');
const Loaders = require('./Loaders/index');
require('dotenv').config();
Loaders.start();

app.listen(process.env.PORT, () => console.log("Servidor rodando na porta: "+process.env.PORT));