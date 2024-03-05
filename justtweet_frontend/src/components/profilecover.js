import React from "react";

import Image from 'react-bootstrap/Image'

// React bootstrap Image: https://react-bootstrap.github.io/components/images/
// image adopted from https://mdbootstrap.com/docs/react/content-styles/images/

function TweetProfileCover() {
    return (
      <Image src="images/profilecover.jpg" height={200}/>
    );
}

export default TweetProfileCover;