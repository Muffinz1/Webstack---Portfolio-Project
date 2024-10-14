import React, { useState } from 'react';
import { Header ,AboutUs} from './container';
import {  Loader, OnlineReservations,Navbar } from './components';
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
                </div>
            </div>
        </>
    );
};
export default App;

