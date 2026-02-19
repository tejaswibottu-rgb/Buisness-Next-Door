const express = require('express');
const Business = require('../models/Business');

const router = express.Router();

// return all businesses
router.get('/', async (req, res) => {
  try {
    const list = await Business.find({}).sort('id');
    res.json(list);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'server error' });
  }
});

// seed with initial data (idempotent) (no auth for simplicity)
router.post('/seed', async (req, res) => {
  // expected payload: array of business objects
  const { data } = req.body;
  if (!Array.isArray(data)) {
    return res.status(400).json({ error: 'bad payload' });
  }
  try {
    for (const biz of data) {
      await Business.updateOne({ id: biz.id }, { $set: biz }, { upsert: true });
    }
    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'server error' });
  }
});

module.exports = router;
