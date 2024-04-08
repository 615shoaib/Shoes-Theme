const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  productId:{

  },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  images:{
    type: String,
  },
  quantity:{
    type:Number,
    default:1,
  }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
