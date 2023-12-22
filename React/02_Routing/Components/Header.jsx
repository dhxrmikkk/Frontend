import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <React.Fragment>
            <Link to="/">Home with Link</Link>
            <br />
            <Link to="/about">About with Link</Link>
        </React.Fragment>
    );
};

export default Header;