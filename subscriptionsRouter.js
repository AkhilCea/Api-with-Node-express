const subscriptionsController = require('../controllers/subscriptionsController.js')

const express = require('express');
const router = express();

// Subscribe to Course
app.post('/api/courses/:courseId/subscribe', authenticateUser, async (req, res) => {});
  
// List Course Subscriptions
app.get('/api/courses/:courseId/subscriptions', authenticateUser, async (req, res) => {});