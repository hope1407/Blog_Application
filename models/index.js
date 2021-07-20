const User = require('./User');
const Blogs = require('./Blog');

User.hasMany(Blog, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
  });

Blog.belongsTo(User, {
    foreignKey: 'user_id'
})

module.exports = { User, Blog };