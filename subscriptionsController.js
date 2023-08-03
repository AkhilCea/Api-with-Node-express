const db = require('../models')
const Subscription = require('subscription')

// Subscribe to Course
exports.subscribeToCourse = async (req, res) => {
    const { courseId } = req.params;
    try {
        const course = await Course.findByPk(courseId);
        if (!course) {
            return res.status(404).json({ error: 'Course not found.' });
        }
        const user = req.user;
        await user.addCourse(course);
        res.json({ message: 'Subscribed to the course successfully.' });
    }   catch (err) {
        res.status(500).json({ error: 'Failed to subscribe to the course.', err });
    }
};

// List course subscriptions
exports.listCourseSubscriptions = async (req, res) => {
    const { courseId } = req.params;
    try {
        const course = await Course.findByPk(courseId, {
            include: [
                {
                    model: User,
                    attributes: ['id', 'name', 'email'],
                },
            ],
        });
        if (!course) {
            return res.status(404).json({ error: 'Course not found.' });
        }
        res.json(course.Users);
    }   catch (err) {
        res.status(500).json({ error: 'Failed to fetch course subscriptions.', err });
    }
};