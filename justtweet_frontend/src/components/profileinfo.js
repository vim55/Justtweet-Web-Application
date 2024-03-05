import React from "react";
import { Container, Button } from 'react-bootstrap';

// boostrap spacing: https://getbootstrap.com/docs/4.0/utilities/spacing/
function ProfileInfo(props) {
  const { name, tweetId, tweetUrl, location, joinDate } = props;

  return (
    <Container>
        <h4>{name}</h4>
        <p>@{tweetId}</p>

        <Container className="mb-2">
          <a href={tweetUrl} style={{ textDecoration: 'none' }}>{tweetUrl}</a>
        </Container>
        <Container className="mb-2">
          <a href={tweetUrl} style={{ textDecoration: 'none' }}>{location}</a>
        </Container>
        <Container className="mb-2">
          <span>{joinDate}</span>
        </Container>
        <Button variant="primary" style={{ color: 'white' }}>
          Tweet to {name}
        </Button>

      <Container className="d-flex flex-column mt-3">
        <h5>Photos and Videos</h5>
        {/* photo and video section */}
      </Container>
      
    </Container>
  );
};

export default ProfileInfo;