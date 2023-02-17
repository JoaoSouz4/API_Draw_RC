//Conexão com o Mongo

const mongoose = require("mongoose");
require('dotenv').config();

async function startDB(){
    await mongoose.connect( process.env.MONGODB_ATLAS_URL,  {
        UseNewUrlParser: true,
        useUnifiedTopology: true
    });
}

module.exports = startDB;