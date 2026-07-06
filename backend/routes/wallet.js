const express = require('express');
const router = express.Router();
const User = require('../models/User');
const WalletTransaction = require('../models/WalletTransaction');

router.post('/add', async (req, res) => {
  const { userId, amount } = req.body;
  const user = await User.findById(userId);
  if (!user) return res.status(404).json({ error: 'User not found' });

  user.walletBalance += amount;
  await user.save();

  await WalletTransaction.create({ userId, type: 'credit', amount, description: 'Added to wallet' });
  res.json({ success: true, newBalance: user.walletBalance });
});

router.get('/history/:userId', async (req, res) => {
  const txns = await WalletTransaction.find({ userId: req.params.userId }).sort({ createdAt: -1 });
  res.json(txns);
});

module.exports = router;