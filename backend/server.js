const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/yeemen-market', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Failed to connect to MongoDB:', err));

// Routes
app.get('/', (req, res) => {
  res.send('Welcome to Yeemen Market API');
});

// Product Route
app.get('/products', (req, res) => {
  const products = [
    { id: 1, name: 'سيارة', price: 50000 },
    { id: 2, name: 'تلفزيون', price: 1000 },
    // Add more products
  ];
  res.json(products);
});

// Payment Route
app.post('/payment', (req, res) => {
  const paymentData = req.body;
  console.log('Payment Data:', paymentData);
  res.json({ message: 'Payment successful' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});