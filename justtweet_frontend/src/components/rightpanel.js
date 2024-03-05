import { Container, Card, Button, Image } from 'react-bootstrap';

//react bootstrap card: https://react-bootstrap.netlify.app/docs/components/cards
//boostrap flex: https://getbootstrap.com/docs/4.0/utilities/flex/
function TweetRightPanel() {
  return (
    <Container>
      <Container className="d-flex justify-content-between align-items-center mb-3">
        <h5>Who to follow</h5>
        <div>
          <a href=" " className="mr-3" style={{ textDecoration: 'none' }}>Refresh</a>
          <a href=" " style={{ textDecoration: 'none' }}>View all</a>
        </div>
      </Container>

      <Container>
        <Card>
          <Card.Body className="d-flex align-items-center">
            <Image src="images/profileimg.jpg" roundedCircle alt="Profile" style={{ height: '50px', width: '50px' }} />
            <Container style={{ marginLeft: '15px' }}>
              <h6 className="mb-0">John Doe</h6>
              <Button variant="primary" size="sm">Follow</Button>
            </Container>
          </Card.Body>
        </Card>

        <Card>
          <Card.Body className="d-flex align-items-center">
            <Image src="images/profileimg.jpg" roundedCircle alt="Profile" style={{ height: '50px', width: '50px' }} />
            <Container style={{ marginLeft: '15px' }}>
              <h6 className="mb-0">Jane Smith</h6>
              <Button variant="primary" size="sm">Follow</Button>
            </Container>
          </Card.Body>
        </Card>

        <Card>
          <Card.Body className="d-flex align-items-center">
            <Image src="images/profileimg.jpg" roundedCircle alt="Profile" style={{ height: '50px', width: '50px' }} />
            <Container style={{ marginLeft: '15px' }}>
              <h6 className="mb-0">Bob Johnson</h6>
              <Button variant="primary" size="sm">Follow</Button>
            </Container>
          </Card.Body>
        </Card>
      </Container>
    </Container>
  );
}

export default TweetRightPanel;
