 const mongoose = require('mongoose');
 const Schema = mongoose.Schema;
 const ObjectId = Schema.ObjectId;

 const drawSchema = new Schema({
    id: ObjectId,
    title: String,
    description: String,
    data: String, 
    font: String,
    categories: Array,
    img: Array
 })

 const item = mongoose.model("items", drawSchema);

 module.exports = item;


