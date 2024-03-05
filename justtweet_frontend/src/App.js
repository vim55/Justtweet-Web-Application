import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import TweetNavbar from './components/navbar';
import TweetProfileCover from './components/profilecover';
import TweetProfileStats from './components/profilestats';
import TweetCards from './components/tweetcard';
import NewTweet from './components/newtweets';
import ProfileInfo from './components/profileinfo';
import { getPosts } from './components/api';

import { Container, Row, Col } from 'react-bootstrap';
import TweetRightPanel from './components/rightpanel';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: [],
    };
  }

  componentDidMount() {
    this.fetchTweets();
  }

  fetchTweets = async () => {
    try {
      const posts = await getPosts();
      console.log(posts);
      this.setState({ tweets: posts });
    } catch (error) {
      console.error(error);
    }
  };

  handleTweetChange = (newTweets) => {
    this.setState({ tweets: newTweets });
  };

  render() {
    return (
      <>
        <Container fluid>
          <Row>
            <TweetNavbar />
          </Row>
          <Row>
            <TweetProfileCover />
          </Row>
          <Row>
            <TweetProfileStats tweetsCounts={this.state.tweets.length} />
          </Row>
          <Row>
            <Col md={3}>
              <ProfileInfo
                name="John Smith"
                tweetId="johnsmith"
                tweetUrl="twitter.com/john"
                location="Perth, WA"
                joinDate="Joined November 2020"
              />
            </Col>
            <Col md={6}>
              <Row>
                <NewTweet handleTweetChange={this.handleTweetChange} />
              </Row>
              <Row>
                <TweetCards mytweets={this.state.tweets} handleTweetChange={this.handleTweetChange} />
              </Row>
            </Col>
            <Col md={3}>
              <TweetRightPanel />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default App;