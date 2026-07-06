const express = require('express');
const router = express.Router();
const User = require('../models/User');

// OTP Send (Fast2SMS integration point)
router.post('/send-otp', async (req, res) => {
  const { phone } = req.body;
  // TODO: Integrate Fast2SMS here
  console.log(`OTP sent to ${phone} (demo: 1234)`);
  res.json({ success: true, message: 'OTP sent' });
});

// Verify OTP
router.post('/verify-otp', async (req, res) => {
  const { phone, otp } = req.body;
  if (otp === '1234') {
    let user = await User.findOne({ phone });
    if (!user) {
      user = await User.create({ phone });
    }
    res.json({ success: true, user });
  } else {
    res.status(400).json({ success: false, message: 'Invalid OTP' });
  }
});

module.exports = router;