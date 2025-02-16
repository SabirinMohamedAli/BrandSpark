const express = require('express');
const cors = require('cors'); 
const connectDB = require('./db'); // Import Database Connection
const serviceRoutes = require('./routers/serviceRoutes');
const contactRoutes = require('./routers/contactRoutes'); 
require('dotenv').config(); 

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors()); 
app.use(express.json());

// Database Connection
connectDB(); // Connect to MongoDB

// Routes
app.use('/api/services', serviceRoutes);
app.use('/api/contact', contactRoutes); 

// Home Route
app.get('/', (req, res) => {
  res.send('BrandSpark Technology Backend');
});

// Start Server
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
