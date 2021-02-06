import React from 'react';
import { Link } from 'react-router-dom';

import Jumbotron from 'react-bootstrap/Jumbotron';

const NotFound = () => {
    return (
        <Jumbotron className="text-center not-found-cont position-fixed">
            <h1 className="display-2">Page not found.</h1>
            <Link to="/" >🡨 go back to home</Link>
        </Jumbotron>
    )
}

export default NotFound;