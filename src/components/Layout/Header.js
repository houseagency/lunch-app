import React from 'react';
import { Router, Route } from 'react-router';
import { Link } from 'react-router-dom';

import Home from '../Pages/Home';
import Randomizer from '../Pages/Randomizer';
import Info from '../Pages/Info';

const Header = (props) => { 
    return (
        <header>
            <div className="logo-container"></div>
        </header>
    );
}    
export default Header;
