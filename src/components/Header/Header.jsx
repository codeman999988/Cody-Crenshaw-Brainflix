import React from 'react';
import './Header.scss';
import {ReactComponent as BrainflixLogo} from '../../assets/Logo-brainflix.svg';
import something from "../../assets/Mohan-muruge.jpg";
import magGlass from "../../assets/Icon-search.svg";

const Header = () => {
    return (
    <header className="header">
        <div className="header__logo-container">
            <BrainflixLogo className="header__Logo"/>
        </div>
            <div className="header__search-container">
            <img className="header__search-icon" src={magGlass}/>
        <input type="search" className="header__searchBar" placeholder={"Search..." } alt="Search" result="0"/>
        </div>
        <div className="header__btn-container">
            <button className="header__btn">
            ＋ UPLOAD
            </button>
                <div>
                <div className="header__profile-image" id="profile-pic"> </div>
        </div>
        </div>
    </header>
    );
}

export default Header;