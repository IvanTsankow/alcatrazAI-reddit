import React from 'react';

import './Navbar.css';
import Logo from './logo/Logo';
import Searchbar from './searchbar/Searchbar';
import Actions from './actions/Actions';

const Navbar = () => {
    return <div className="navbar">
        <Logo/>
        <Searchbar/>
        <Actions/>
    </div>
}

export default Navbar;