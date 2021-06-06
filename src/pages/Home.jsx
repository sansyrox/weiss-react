import React from 'react';
import { Link } from "react-router-dom";
import '../scss/home.scss';
import logo from '../img/logo.svg';
import mailIcon from '../img/mail-icon.svg';
import heroImage from '../img/hero-image.png';
import arrowRightWhite from '../img/arrow-right-white.svg';
import serviceImg1 from '../img/service-image-1.png';
import serviceImg2 from '../img/service-image-2.png';
import serviceImg3 from '../img/service-image-3.png';
import arrowRightOrange from '../img/arrow-right-orange.svg';
import historyImage from '../img/history-image.png';


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
                        <Link to="/" className="button">Kontakt <img src={mailIcon} alt="Mail"/></Link>
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
                                <Link to="/" className="button">Ihr Projekt mit uns <img src={arrowRightWhite} alt="arrowRight"/></Link>
                            </div>
                            <div className="image">
                                <img src={heroImage} alt=""/>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="service-and-history">
                    <section className="service">
                        <div className="wrapper">
                            <h2 className="service__title">Unsere Dienstleistungen</h2>
                            <p className="service__desc">Dienstleistung ist für unsere Mitarbeiter Herausforderung, das ist die Stärke unseres Teams. Ganz gleich, ob Verkehrsplanungen, Ver- und Ent­sorgung, Lärmschutz oder Spezialgebiete – wir bieten Rundum-Service mit:</p>
                            <div className="service__container">
                                <div className="service__item">
                                    <img src={serviceImg1} className="preview" alt="Studien und Konzepte, Gesamtplanung"/>
                                    <h3>Studien und Konzepte, Gesamtplanung</h3>
                                    <p>Neubau und Ausbau von Straßen, Verkehrsflächen, Wasserwegen und Eisenbahnen erfordert überzeugende Verkehrskonzepte.</p>
                                    <Link to="/">Erfahren Sie mehr <img src={arrowRightOrange} alt="arrowRight"/></Link>
                                </div>
                                <div className="service__item">
                                    <img src={serviceImg2} className="preview" alt="Verkehrsanlagen und Ingenieurbauwerke"/>
                                    <h3>Verkehrsanlagen und Ingenieurbauwerke</h3>
                                    <p>Verkehrskonzepte sind ein entscheidender Faktor jeglicher Infrastruktur. Das Ingenieurbüro Weiss hat deshalb ein Expertenteam aufgebaut.</p>
                                    <Link to="/">Erfahren Sie mehr <img src={arrowRightOrange} alt="arrowRight"/></Link>
                                </div>
                                <div className="service__item">
                                    <img src={serviceImg3} className="preview" alt="Entwurfsvermessung, 3D-Laserscanning"/>
                                    <h3>Entwurfsvermessung, 3D-Laserscanning</h3>
                                    <p>Bei Ausführung sämtlicher vermessungstechnischer Aufgaben im Leistungsbild „Entwurfsvermessung“ sind wir ein leistungsstarker Partner.</p>
                                    <Link to="/">Erfahren Sie mehr <img src={arrowRightOrange} alt="arrowRight"/></Link>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="history">
                        <div className="wrapper">
                            <div className="history__container">
                                <div className="history__text">
                                    <div className="container">
                                        <h4 className="subtitle">Unsere Firmenhistorie</h4>
                                        <h3 className="title">Diplom-Ingenieur Dieter Weiss gründete im Jahre 1971 sein Ingenieurbüro.</h3>
                                        <p className="desc">Fast 30 Jahre lang führte er es als Alleininhaber. 1998 trat Sohn Klaus weiss als Stellvertreter an die Seite seines Vaters. Seit 2006 ist Diplom-Ingenieur Klaus Weiss alleiniger Geschäftsführer</p>
                                        <span className="line"></span>
                                        <Link to="/" className="link">Lesen Sie weiter <img src={arrowRightWhite} alt="arrowRight"/></Link>
                                    </div>
                                </div>
                                <div className="history__image">
                                    <img src={historyImage} alt="Diplom-Ingenieur Dieter Weiss gründete im Jahre 1971 sein Ingenieurbüro."/>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
}

export default Home;
