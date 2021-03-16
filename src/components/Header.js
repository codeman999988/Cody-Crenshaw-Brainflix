import React from 'react';
import './Header.scss';

function Header() {
    return (
    <header>
        <div>
            <img />
            <img />
        </div>
        <input className="search"  placeholder="Search..." />
        <div>
            <button>
                + UPLOAD
            </button>
            <img />
        </div>
    </header>
    );
}

export default Header;