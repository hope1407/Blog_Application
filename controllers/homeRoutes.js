const router = require('express').Router();
const { Blogs, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {
        const blogData = await Blogs.findAll({
            include: [
                {
                    model: User,

                }
            ]
        })
    }
})