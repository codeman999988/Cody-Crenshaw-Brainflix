import React from 'react';
import './Header.scss';
import {ReactComponent as BrainflixLogo} from '../../assets/Logo-brainflix.svg';
import magGlass from "../../assets/Icon-search.svg";
import {Link} from 'react-router-dom';

const Header = () => {
return (
    <header className="header">
        <div className="header__logo-container">
            <Link to={{pathname: "/" }}>
                <BrainflixLogo className="header__Logo"/>
            </Link>
        </div>
        <div className="header__desktop-right-container">
            <div className="header__search-container">
                <img 
                    className="header__search-icon" 
                    src={magGlass} 
                    alt="" />
                <input 
                    type="search" 
                    className="header__searchBar" 
                    placeholder={"Search..." } 
                    alt="Search" 
                    result="0"/>
            </div>
            <div className="header__btn-container">
                <Link to="/upload">
                    <button className="header__btn">＋ UPLOAD
                    </button>
                </Link>
                <div className="header__profile-image" id="profile-pic"> 
                </div>
            </div>
        </div>
    </header>
);
}

export default Header;