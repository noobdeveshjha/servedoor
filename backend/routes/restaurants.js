const express = require('express');
const router = express.Router();
const Restaurant = require('../models/Restaurant');

router.get('/', async (req, res) => {
  const { type, search } = req.query;
  let query = {};
  if (type && type !== 'All') query.type = type;
  if (search) {
    query.$or = [
      { name: { $regex: search, $options: 'i' } },
      { cuisine: { $regex: search, $options: 'i' } }
    ];
  }
  const restaurants = await Restaurant.find(query);
  res.json(restaurants);
});

router.get('/:id', async (req, res) => {
  const restaurant = await Restaurant.findById(req.params.id);
  res.json(restaurant);
});

module.exports = router;