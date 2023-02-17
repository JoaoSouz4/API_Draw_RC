const DrawModel = require('../models/drawModel');

class DrawController{
    async store(req, res){
        const newRegister = await DrawModel.create(req.body);
        res.status(200).json({newRegister});
    }

    async show(req, res){
        const data = await DrawModel.find({});
        res.status(200).json({data});
        return data;
    }
}

module.exports = new DrawController();