import { Container,Image, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';


function TweetProfileStats(props) {
    return (
        <Container className="text-center my-3">
            <Row>
                <Col xs={2} className="text-center">
                    <Image src="images/profileimg.jpg" roundedCircle style={{ height: '150px', width: '150px' }} />
                </Col>
                <Col xs={2} className="text-center">
                    <div>Tweets</div>
                    <div className="fw-bold">{props.tweetsCounts}</div>

                </Col>
                <Col xs={2} className="text-center">
                    <div>Following</div>
                    <div className="fw-bold">200</div>

                </Col>
                <Col xs={2} className="text-center">
                    <div>Followers</div>
                    <div className="fw-bold">300</div>

                </Col>
                <Col xs={2} className="text-center">
                    <div>Likes</div>
                    <div className="fw-bold">520</div>

                </Col>
            </Row>
        </Container>

    );
};
// Typechecking to ensure tweetsCounts is a number
TweetProfileStats.propTypes = {
    tweetsCounts: PropTypes.number.isRequired,
};

export default TweetProfileStats;



// function TweetProfileStats() {
//     return (
//         <Container>
//             <Row>
//                 <Col md={3}>
//                     <p>profile image</p>
//                     <Image src="images/profileimg.jpg" thumbnail roundedCircle height={150} width={150}/>
//                 </Col>
//                 <Col md={1}>
//                     <p>Tweets</p>
//                     <p>Number</p>
//                 </Col>
//                 <Col md={1}>
//                 <p>Following</p>
//                 <p>Number</p>
//                 </Col>
//                 <Col md={1}>
//                 <p>Followers</p>
//                 <p>Number</p>
//                 </Col>
//                 <Col md={1}>
//                 <p>Likes</p>
//                 <p>Number</p>
//                 </Col>
//                 <Col md={5}>
//                     Nothing
//                 </Col>
//             </Row>
//         </Container>
//     );
// }

