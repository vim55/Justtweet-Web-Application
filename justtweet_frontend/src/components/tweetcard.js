import { Container, Card, Button } from 'react-bootstrap';
import { getPosts, deletePost } from './api';

// react bootstrap card: https://react-bootstrap.netlify.app/docs/components/cards
function TweetCards(props) {
  const tweets = props.mytweets;

  const handleDelete = async (e, tweetId) => {
    e.preventDefault();
    console.log('Deleting tweet with ID:', tweetId);
    try {
      const deletedPost = await deletePost(tweetId);
      console.log('Deleting post:', deletedPost);

      const tweets = await getPosts();
      props.handleTweetChange(tweets)
      console.log('update tweets successful:');

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container className='mt-3' style={{ height: '500px', overflowY: 'scroll' }}>
      {tweets.length > 0 ? (
        tweets.map((tweet) => (
          <Card key={tweet._id} className="my-3">
            <Card.Header className="d-flex align-items-center justify-content-between">
              <span>John Smith @johnsmith</span>
              <Button variant="danger" onClick={(e) => handleDelete(e, tweet._id)}>
                Delete
              </Button>
            </Card.Header>
            <Card.Body>
              <Card.Text>{tweet.postName}</Card.Text>
            </Card.Body>
            <Card.Footer>{tweet.date}</Card.Footer>
          </Card>
        ))
      ) : (
        <p>No tweets found.</p>
      )}
    </Container>
  );
}

export default TweetCards;