import React from 'react';
import './Header.scss';
import {ReactComponent as BrainflixLogo} from '../assets/Logo-brainflix.svg';
import something from "../assets/Mohan-muruge.jpg";

const Header = () => {
    return (
    <header className="header">
        <div className="header__logo-container">
            <BrainflixLogo className="header__Logo"/>
        </div>   
        <input className="header__searchBar" placeholder="Search" />
        <div className="header__btn-container">
            <button className="header__btn">
                + UPLOAD
            </button>
                <div>
                <img src={something} className="header__profile-pic" />
                </div>
        </div>
    </header>
    );
}

export default Header;