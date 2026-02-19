const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// connect to MongoDB
const uri = process.env.MONGODB_URI;
if (!uri) {
  console.error('MONGODB_URI not defined in environment');
  process.exit(1);
}

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// routes
const authRoutes = require('./routes/auth');
const reviewRoutes = require('./routes/reviews');
const businessRoutes = require('./routes/businesses');

app.use('/api/auth', authRoutes);
app.use('/api/reviews', reviewRoutes);
app.use('/api/businesses', businessRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
