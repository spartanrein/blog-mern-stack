const express = require('express')
const blogController = require('../controllers/blog-controller')

const router = express.Router()

// router.get('/', blogController.blog_index)
router.post('/', blogController.blog_create_post)

module.exports = router