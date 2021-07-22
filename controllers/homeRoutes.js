const router = require('express').Router();
const { Blogs, User, Comments } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {
        const blogData = await Blogs.findAll({
            include: [
                {
                    model: User,
                    attributes: ['name'],
                },
            ],
        });

        const blogs = blogData.map((blogs) => blogs.get({ plain: true }));

        res.render('homepage', {
            blogs,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/blog/:id', async (req, res) => {
    try {
        const blogData = await Blogs.findByPk(req.params.id, {
            include: [
                User,
                {
                    model: Comments,
                    attributes: [User],
                },
            ],
        });

        
        const blog = blogData.get({ plain: true });
        console.log("blog", blog);
        
        res.render('blog',
           {blog}
        );
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/dashboard', withAuth, async (req, res) => {
    try {
        const userData = await User.findByPk(req.session.user_id, {
            attributes: { exclude: ['password'] },
            include: [{ model: Blogs }],
        });
        const user = userData.get({ plain: true });

        res.render('dashboard', {
            ...user,
            loggedIn: true,
        });
    } catch (err){
        res.status(500).json(err);
    }
});

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return
    } else {
        res.render('login')
    }
});

module.exports = router;