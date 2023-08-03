const courseController = require('../controllers/courseController.js')

const express = require('express');
const router = express();

// Create Course
router.post('/createCourse', courseController, async (req, res) => {});
  
  // List All Courses
router.get('/ListAllCourses', courseController, async (req, res) => {});
  
  // Delete Course
router.delete('/deleteCourse', authenticateUser, async (req, res) => {
    // Implement the logic to delete a course based on the provided course ID
  });
  
  // Get Course Details
router.get('/getCourseDetails', authenticateUser, async (req, res) => {
    // Implement the logic to get details for a specific course based on the provided course ID
  });
  