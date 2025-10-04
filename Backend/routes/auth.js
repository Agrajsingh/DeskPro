const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Hardcoded admin credentials
const ADMIN_EMAIL = 'agraj0000@gmail.com';
const ADMIN_PASSWORD = 'Agraj0000';

// Register route (users only)
router.post('/register', async (req, res) => {
  const { name, email, password } = req.body;
  try {
    if (email === ADMIN_EMAIL) {
      return res.status(400).json({ msg: 'Cannot register as admin.' });
    }
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ msg: 'User already exists.' });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    user = new User({ name, email, password: hashedPassword });
    await user.save();
    res.status(201).json({ msg: 'User registered successfully.' });
  } catch (err) {
    res.status(500).json({ msg: 'Server error.' });
  }
});

// Login route (user & admin)
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    if (email === ADMIN_EMAIL) {
      // Admin login
      if (password === ADMIN_PASSWORD) {
        const token = jwt.sign({ email, role: 'admin' }, process.env.JWT_SECRET, { expiresIn: '1h' });
        return res.json({ token, role: 'admin' });
      } else {
        return res.status(400).json({ msg: 'Invalid credentials.' });
      }
    }
    // User login
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: 'Invalid credentials.' });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: 'Invalid credentials.' });
    }
    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token, role: user.role });
  } catch (err) {
    res.status(500).json({ msg: 'Server error.' });
  }
});

module.exports = router;
