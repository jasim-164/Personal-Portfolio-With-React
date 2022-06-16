import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className=" ">
            <div >
            <h1>Jasim's portfolio</h1>
            </div>
            <div>
            <Link to='/about'>about</Link>
            <Link to='/contact'>contact</Link>
            <Link to='/resume'>resume</Link>
            </div>

            <div class="logo"> logo </div>
        </div>
    );
};

export default Header;