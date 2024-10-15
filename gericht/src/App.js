import React, { useState } from 'react';
import { Header , AboutUs, SpecialMenu, Chef,Laurels} from './container';
import {  Loader, OnlineReservations,Navbar , Intro } from './components';
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
                <div className='content'>
                    <Header />
                    <AboutUs/>
                    <SpecialMenu/>
                    <Chef/>
                    <Intro />
                    <Laurels/>
                </div>
            </div>
        </>
    );
};
export default App;

