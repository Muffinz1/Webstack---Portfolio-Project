import React, { useState } from 'react';
import { Header } from './container';
import {  Loader, OnlineReservations } from './components';
import './App.css';


const App = () => {
    return (
    <>
    <Loader/>
    <Header/>
    </>
    );
};

export default App;

