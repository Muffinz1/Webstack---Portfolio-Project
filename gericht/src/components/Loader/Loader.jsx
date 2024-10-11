import React, { useState, useEffect } from 'react';
import './Loader.css'; 
import {images} from '../../constants' 

const Loader = () => {
    const [isTypingDone, setIsTypingDone] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      const typingTimer = setTimeout(() => {
        setIsTypingDone(true);
      }, 0);
        const loaderTimer = setTimeout(() => {
        setIsLoading(false);
      }, 2000);
  
      return () => {
        clearTimeout(typingTimer);
        clearTimeout(loaderTimer);
      };
    }, []);
  
    if (!isLoading) {
      return null;
    }
  
    return (
      <div className="loader">
        <div className={`app__loader-logo ${isTypingDone ? 'zoom-out' : 'typing'}`}>
          <img src={images.gericht} alt="loader" />
        </div>
      </div>
    );
  };
  
  export default Loader;