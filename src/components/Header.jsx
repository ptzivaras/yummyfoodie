import React from 'react';
import { Link } from 'react-router-dom';

const Header = ()=>{
    return(
        <header>
            <nav>
                <Link to="/">Menu</Link> |{' '}
                <Link to="/order">Order</Link>
            </nav>
        </header>
    );
};

export default Header;