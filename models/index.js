const User = require('./User');
const Blogs = require('./Blogs');
const Comments = require('./Comments');

User.hasMany(Blogs, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
  });

Blogs.belongsTo(User, {
    foreignKey: 'user_id'
});

Blogs.hasMany(Comments, {
  foreignKey: 'blog_id',
  onDelete: 'CASCADE'
});

Comments.belongsTo(Blogs, {
  foreignKey: 'blog_id'
});

module.exports = { User, Blogs, Comments };