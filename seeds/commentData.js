const { Comment } = require('../models');

const commentdata = [
  {
    body: 'body1',
  },
  {
    body: 'body2',
  },
  {
    body: 'body3',
  },
  {
    body: 'body4',
  },
  {
    body: 'body5',
  },
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;
