//models/product.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const ProductSchema = new Schema({
    name: {type:String},
    description: {type:String},
    price: {type:Number}
});

module.exports = mongoose.model('Product', ProductSchema);