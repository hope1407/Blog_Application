const sequelize = require('../config/connection');
const { User, Blogs, Comments } = require('../models');

const userData = require('./userData.json');
const blogData = require('./blogsData.json');
const commentData = require('./commentsData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    const users = await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    })

    for (const blogs of blogData) {
        await Blogs.create({
            ...blogs,
            user_id: users[Math.floor(Math.random() * users.length)].id,
        });
    };
    for (const comments of commentData) {
        await Comments.create({
            ...comments,
            user_id: users[Math.floor(Math.random() * users.length)].id,
        })
    }
    
    process.exit(0);
}

seedDatabase();