import React, { useState} from 'react';
import { Header, AboutUs, FindUs, Intro, SpecialMenu, Gallery, Chef, Laurels, Footer } from './container';
import { Loader, Navbar, Band, ClassicWatch } from './components';
import LoginPopup from './components/LoginPopup/LoginPopup';
import './App.css';

const App = () => {
    const [showLogin, setShowLogin] = useState(false);
    const [setShowReservations] = useState(false);

    return (
        <div className="app">
            {showLogin && <LoginPopup setShowLogin={setShowLogin} setShowReservations={setShowReservations} />}

            <Loader />
            <Navbar setShowLogin={setShowLogin} />
            <Band />
            <ClassicWatch />
            
            <div className="content">
                <Header />
                <AboutUs />
                <SpecialMenu />
                <Chef />
                <Intro />
                <Laurels />
                <Gallery />
                <FindUs />
                <Footer />
            </div>
        </div>
    );
};

export default App;
