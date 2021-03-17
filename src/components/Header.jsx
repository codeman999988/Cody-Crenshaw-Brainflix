import React from 'react';
import './Header.scss';
import {ReactComponent as BrainflixLogo} from '../assets/Logo-brainflix.svg';

const Header = () => {
    return (
    <header className="header">
        <div className="header__logo-container">
            <BrainflixLogo className="header__Logo"/>
        </div>   
        <input className="header__searchBar" placeholder="Search" />
        <div>
            <button className="header__btn">
                + UPLOAD
            </button>
            <img />
        </div>
    </header>
    );
}

export default Header;