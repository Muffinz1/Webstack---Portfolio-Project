import React, { useState } from 'react';
import { Header , AboutUs, SpecialMenu} from './container';
import {  Loader, OnlineReservations,Navbar , MenuItem } from './components';
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
                </div>
            </div>
        </>
    );
};
export default App;

