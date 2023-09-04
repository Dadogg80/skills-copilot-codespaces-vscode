// Create web server application

// Import express
const express = require('express');

// Import router
const router = express.Router();

// Import comment controller
const commentController = require('../controllers/commentController');

// Import middleware
const auth = require('../middleware/auth');
const upload = require('../middleware/upload');

// Create routes
router.post('/create', auth, upload.single('image'), commentController.createComment);
router.get('/read', auth, commentController.readComment);
router.put('/update/:id', auth, commentController.updateComment);
router.delete('/delete/:id', auth, commentController.deleteComment);

// Export router
module.exports = router;