const router = require('express').Router();
const Post = require('../models/Post');
const User = require('../models/User');

// CREATE POST
router.post('/', async (req, res) => {
  const newPost = new Post(req.body);
  try {
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } catch (err) {
    res.status(500).json(err);
  }
});

// UPDATE POST
router.put('/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.userId === req.body.userId) {
      await post.updateOne({ $set: req.body });
      res.status(200).json('The post has been updated');
    } else {
      res.status(403).json('You can update only your posts.');
    }
  } catch (err) {
    res.status(500).json(err);
  }
});
// DELETE POST
router.delete('/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.userId === req.body.userId) {
      await post.deleteOne();
      res.status(200).json('The post has been deleted');
    } else {
      res.status(403).json('You can delete only your posts.');
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// LIKE/DISLIKE POST
router.put('/:id/like', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post.likes.includes(req.body.userId)) {
      await post.updateOne({ $push: { likes: req.body.userId } });
      res.status(200).json('The post has been liked');
    } else {
      await post.updateOne({ $pull: { likes: req.body.userId } });
      res.status(200).json('The post has been disliked');
    }
  } catch (err) {
    res.status(500).json(err);
  }
});
// GET POST
router.get('/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    return res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET ALL USER'S POSTS
router.get('/:userId/all', async (req, res) => {
  try {
    const userPosts = await Post.find({ userId: req.params.userId });
    return res.status(200).json(userPosts);
  } catch (err) {
    return res.status(500).json(err);
  }
});

// GET TIMELINE POSTS
router.get('/:userId/feed', async (req, res) => {
  try {
    const currentUser = await User.findById(req.params.userId);
    const friendsOfCurrentUser = [...currentUser.followings];
    const friendsAndCurrentUserId = [
      currentUser._id.toString(),
      ...friendsOfCurrentUser,
    ];
    const allPosts = await Post.find({
      userId: { $in: friendsAndCurrentUserId },
    }).sort({
      createdAt: 'desc',
    });

    return res.status(200).json(allPosts);
  } catch (err) {
    res.status(500).json(err.message);
  }
});
module.exports = router;
