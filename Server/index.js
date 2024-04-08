// index.js

const express = require('express');
const mongoose = require('mongoose');
const axios = require('axios');
const cors = require('cors'); 
const Product = require('./models/Products'); // Import the Product model

const app = express()

app.use(cors({
  origin: 'http://localhost:5173'
}));

// Middleware
app.use(express.json());


// "Add to Cart" endpoint
app.post('/api/add-to-cart', async (req, res) => {
  try {
    const { productId, name, price, images, quantity } = req.body;

    const existingProduct = await Product.findOne({ productId });

    if (existingProduct) {
      return res.status(400).json({ error: 'Product already exists in cart' });
    }

    const product = new Product({
      productId,
      name,
      price,
      images,
      quantity
    });

    // Save the product to the database
    await product.save();

    // Return success response
    res.status(200).json({ message: 'Product added to cart successfully' });
  } catch (error) {
    // Handle other errors
    console.error('Error adding product to cart:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.delete('/api/delete-order/:productId', async (req, res) => {
  try {
    const productId = req.params.productId;
    const deletedProduct = await Product.findByIdAndDelete(productId);

    if (!deletedProduct) {
      return res.status(404).json({ error: 'Product not found' });
    }

    res.status(200).json({ message: 'Product deleted successfully', deletedProduct });
  } catch (error) {
    console.error('Error deleting product:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/add-to-cart')
  .then(() => {
    console.log('Connected to MongoDB');
    // Start server
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => console.error('Error connecting to MongoDB:', error));
