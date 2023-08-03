const db = require('../models')

exports.createCourse = async (req, res) => {
    try {
        const { title, start_date, status } = req.body;
        const course = await course.create({ title, start_date, status });
  
        res.json({ message: 'Course created successfully.', course });
    }   catch (err) {
        res.status(500).json({ error: 'Failed to create the course.', err });
    }
};
  
exports.listAllCourses = async (req, res) => {
    try {
        const courses = await Course.findAll();
        res.json(courses);
    }   catch (err) {
        res.status(500).json({ error: 'Failed to fetch courses.', err });
    }
};

exports.deleteCourse = async (req, res) => {
    const { courseId } = req.params;
    try {
        const course = await Course.findByPk(courseId);
        if (!course) {
            return res.status(404).json({ error: 'Course not found.' });
        }
        await course.destroy();
        res.json({ message: 'Course deleted successfully.' });
    }   catch (err) {
        res.status(500).json({ error: 'Failed to delete the course.', err });
    }
};

exports.getCourseDetails = async (req, res) => {
    const { courseId } = req.params;
  
    try {
      const course = await Course.findByPk(courseId);
  
      if (!course) {
        return res.status(404).json({ error: 'Course not found.' });
      }
  
      res.json(course);
    } catch (err) {
      res.status(500).json({ error: 'Failed to fetch course details.', err });
    }
  };
  