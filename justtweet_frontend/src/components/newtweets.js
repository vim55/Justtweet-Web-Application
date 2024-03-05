import React, { useState } from 'react';
import { Container, Form, Button, Image } from 'react-bootstrap';
import { createPost, getPosts } from './api';

// react bootstrap form: https://react-bootstrap.netlify.app/docs/forms/form-control 
function NewTweet(props) {
  const [post, setPost] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // create post
      const createdPost = await createPost(post);
      console.log('New tweet created:', createdPost);

      // re-fetch posts to change parent state
      const postsToSendBack = await getPosts();
      props.handleTweetChange(postsToSendBack)
      console.log('update tweets successful:');

      // Reset input in the form textarea
      setPost('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container className="d-flex">
        <Image src="images/profileimg.jpg" roundedCircle className="mr-3" width="50" height="50" />

        <Container>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="text-input" className="mb-0">
              <Form.Control
                as="textarea"
                placeholder="What's happening?"
                style={{ height: '100px' }}
                value={post}
                onChange={(e) => setPost(e.target.value)}
              />
            </Form.Group>
            <Container className="d-flex justify-content-between" style={{ marginTop: '10px' }}>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Container>
          </Form>
        </Container>
    </Container>
  );
};

export default NewTweet;
