const db = require('../models')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const user = db.user

//user Login
exports.login = async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await user.findOne({ where: { email } });
  
      if (!user) {
        return res.status(401).json({ error: 'Invalid credentials.' });
      }
  
      const isPasswordValid = await bcrypt.compare(password, user.password);
  
      if (!isPasswordValid) {
        return res.status(401).json({ error: 'Invalid credentials.' });
      }
  
      const token = jwt.sign({ id: user.id }, 'secret_key', { expiresIn: '1h' });
  
      res.json({ message: 'Login successful.', token });
    } catch (err) {
      res.status(500).json({ error: 'Login failed.', err });
    }
  };

//user Signup
exports.signup = async (req, res) => {
    try {
      const { name, email, password } = req.body;
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = await User.create({ name, email, password: hashedPassword });
  
      res.json({ message: 'User registered successfully.', user });
    } catch (err) {
      res.status(500).json({ error: 'Failed to register user.', err });
    }
  };

