const { User } = require('../models');

const userdata = [
  {
    username: 'test',
    password: '1234',
  },
  {
    username: 'test2',
    password: '1234',
  },
  {
    username: 'test3',
    password: '1234',
  },
  {
    username: 'test4',
    password: '1234',
  },
];

const seedUsers = () => User.bulkCreate(userdata);

module.exports = seedUsers;
