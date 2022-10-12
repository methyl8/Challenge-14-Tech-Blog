//seeds
const sequelize = require('../config/connection');
const seedPosts = require('./postData');
const seedComments = require('./commentData');
const { User } = require('../models');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  const userdata = {
      username: 'test',
      password: '1234',
    }
  await User.create(userdata)
  
  await seedPosts();

  await seedComments()

  process.exit(0);
};

seedAll();