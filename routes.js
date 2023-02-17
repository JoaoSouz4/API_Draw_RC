const { Router } = require("express");
const DrawController = require("./Controllers/DrawController");
const itemModel= require('./models/drawModel');
const routes =  Router();

routes.get('/', (req,res)=>{
    res.status(200).json({message: "ok"});
});

routes.post('/register', DrawController.store);
routes.get('/show', DrawController.show);

module.exports = routes

