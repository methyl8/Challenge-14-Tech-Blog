const { Post } = require('../models');

const postdata = [
  {
    title: 'title1',
    body: 'body1',
    userId: 1,
  },
  {
    title: 'title2',
    body: 'body2',
    userId: 1,
  },
  {
    title: 'title3',
    body: 'body3',
    userId: 2,
  },
  {
    title: 'title4',
    body: 'body4',
    userId: 3,
  },
  {
    title: 'title5',
    body: 'body5',
    userId: 1,
  },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
