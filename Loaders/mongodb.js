//Conexão com o Mongo

const mongoose = require("mongoose");

async function startDB(){
    await mongoose.connect('mongodb+srv://joaosouz8:sorvete@cluster0.gc4ly0f.mongodb.net/draws',  {
        UseNewUrlParser: true,
        useUnifiedTopology: true
    });
}

module.exports = startDB;