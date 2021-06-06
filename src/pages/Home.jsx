import React from 'react';
import { Link } from "react-router-dom";
import '../scss/home.scss'
import logo from '../img/logo.svg'
import mailIcon from '../img/mail-icon.svg'

function Home() {
    return (
        <div className="App">
            <header className="header">
                <div className="wrapper">
                    <nav className="header__container">
                        <img src={logo} className="logo" alt="Weiss"/>
                        <ul className="menu">
                            <li><Link to="/" className="active">Startseite</Link></li>
                            <li><Link to="/">Referenzen</Link></li>
                            <li><Link to="/">Über uns</Link></li>
                        </ul>
                        <Link to="/" className="button">Kontakt <img src={mailIcon} alt=""/></Link>
                    </nav>
                </div>
            </header>
        </div>
    );
}

export default Home;
