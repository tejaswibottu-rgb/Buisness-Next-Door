const express = require('express');
const jwt = require('jsonwebtoken');
const Review = require('../models/Review');

const router = express.Router();

// middleware to verify token
const authMiddleware = (req, res, next) => {
  const header = req.headers.authorization;
  if (!header) return res.status(401).json({ error: 'No token' });
  const token = header.split(' ')[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'secret');
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ error: 'Invalid token' });
  }
};

// post a review (authenticated)
router.post('/', authMiddleware, async (req, res) => {
  const { businessId, text } = req.body;
  if (!businessId || !text) {
    return res.status(400).json({ error: 'Missing fields' });
  }
  try {
    const review = new Review({ businessId, author: req.user.username, text });
    await review.save();
    res.json({ success: true, review });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// get reviews by business id
router.get('/:businessId', async (req, res) => {
  try {
    const reviews = await Review.find({ businessId: Number(req.params.businessId) }).sort('-createdAt');
    res.json(reviews);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
