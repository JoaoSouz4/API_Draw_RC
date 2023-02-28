const { Router } = require("express");
const DrawController = require("./Controllers/DrawController");

const routes =  Router();

routes.get('/', (req,res)=>{
    res.status(200).json({message: "ok"});
});
routes.post('/store', DrawController.store)
routes.get('/show', DrawController.show);

module.exports = routes

