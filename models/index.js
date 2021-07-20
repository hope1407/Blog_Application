const User = require('./User');
const Blogs = require('./Blogs');

User.hasMany(Blog, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
  });

Blogs.belongsTo(User, {
    foreignKey: 'user_id'
})

module.exports = { User, Blogs };