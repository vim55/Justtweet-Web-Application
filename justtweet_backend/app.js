// https://www.tutorialspoint.com/expressjs/index.htm
const express = require('express');
const bodyParser = require('body-parser');
const Joi = require('@hapi/joi');
const mongoose = require('mongoose');
const cors = require('cors');


const app = express()
const port = 3001

// middleware to translate json and xurl
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect('<mongodb+srv://<your mongodb connection string>.mongodb.net/>')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));

const postSchema = new mongoose.Schema({
  postName: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

// Todo model
const Post = mongoose.model('Post', postSchema);

// Joi schema for task validation
const postValidationSchema = Joi.object({
  postName: Joi.string().required()
});


// ################  CRUD  ######################
// adapted from EasyToDo with modification into pure endpoint i.e. no pug interface rendering

// GET endpoint to get all post
app.get('/posts', (req, res) => {
  Post.find()
    .then(posts => {
      res.json(posts);
    })
    .catch(err => {
      console.error(err);
      res.status(500).send('An error occurred while retrieving posts');
    });
});


// POST endpoint to create a new post
app.post('/posts', (req, res) => {
  // Validate using Joi
  const { error } = postValidationSchema.validate(req.body);

  if (error) {
    res.status(400).send(error.details[0].message);
    return;
  }

  // Create new post from form
  const newPost = new Post({
    postName: req.body.postName
  });

  // Save new post to the MongoDB database
  newPost.save()
    .then(savedPost => {
      console.log('New post created:', savedPost);
      res.json(savedPost); // Return the saved post as the response
    })
    .catch(err => {
      console.error(err);
      res.status(500).send('An error occurred while creating the post');
    });
});

// DELETE a post by ID
app.delete('/posts/:id', async (req, res) => {
  const postId = req.params.id;
  try {
    // delete todo
    const result = await Post.deleteOne({ _id: postId });
    console.log('Post deleted successfully:', result);
    res.json({ message: 'Post deleted successfully' });
  } catch (err) {
    console.error('An error occurred while deleting the post:', err);
    res.status(500).json({ error: 'Failed to delete the post' });
  }
});


app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})