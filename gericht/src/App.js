import React, { useState } from 'react';
import { Header , AboutUs, FindUs,Intro, SpecialMenu, Gallery,Chef,Laurels} from './container';
import {  Loader,Navbar,Band  } from './components';
import LoginPopup from './components/LoginPopup/LoginPopup';
import './App.css';


const App = () => {
    const [showLogin, setShowLogin] = useState(false);
    const [showReservations, setShowReservations] = useState(false);


    return (
        <>
            {showLogin && <LoginPopup setShowLogin={setShowLogin} setShowReservations={setShowReservations} />}
            <div className='app'>
                <Loader />  
                <Navbar setShowLogin={setShowLogin} />
                <Band/>
                <div className='content'>
                    <Header />
                    <AboutUs />
                    <SpecialMenu />
                    <Chef />
                    <Intro />
                    <Laurels />
                    <Gallery />
                    <FindUs />
                </div>
            </div>
        </>
    );
};
export default App;

