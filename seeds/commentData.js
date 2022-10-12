const { Comment } = require('../models');

const commentdata = [
  {
    body: 'body1',
    userId: 1,
    postId: 1
  },
  {
    body: 'body2',
    userId: 1,
    postId: 1
  },
  {
    body: 'body3',
    userId: 1,
    postId: 1
  },
  {
    body: 'body4',
    userId: 1,
    postId: 1
  },
  {
    body: 'body5',
    userId: 1,
    postId: 1
  },
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;
