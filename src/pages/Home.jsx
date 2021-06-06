import React from 'react';
import { Link } from "react-router-dom";
import '../scss/home.scss';
import logo from '../img/logo.svg';
import mailIcon from '../img/mail-icon.svg';
import heroImage from '../img/hero-image.png';
import arrowRightWhite from '../img/arrow-right-white.svg'

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
            <main>
                <section className="hero">
                    <div className="wrapper">
                        <div className="hero__container">
                            <div className="text">
                                <h3 className="subtitle">Ingenieur Dieter Weiss</h3>
                                <h1 className="title">Ingenieurbüro für Bau- und Vermessungswesen</h1>
                                <p className="desc">Wenn Sie zuverlässige Ingenieure brauchen – das Ingenieurbüro Dieter Weiss ist Garant für den Erfolg Ihrer Projekte.</p>
                                <Link to="/" className="button">Ihr Projekt mit uns <img src={arrowRightWhite} alt=""/></Link>
                            </div>
                            <div className="image">
                                <img src={heroImage} alt=""/>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default Home;
