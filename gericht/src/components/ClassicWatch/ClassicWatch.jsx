import React, { useState, useEffect } from 'react';
import { FaRegClock } from 'react-icons/fa';
import './ClassicWatch.css';

const DigitalWatch = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      setTime(new Date().toLocaleTimeString());
    };

    const timerId = setInterval(updateTime, 1000);
    return () => clearInterval(timerId);
  }, []);

  const toggleVisibility = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <div>
      <div className="app__digital-watch-toggle" onClick={toggleVisibility}>
        <FaRegClock size={30} color="var(--color-golden)" />
      </div>

      <div className={`app__digital-watch ${isVisible ? 'slide-in' : 'slide-out'}`}>
        <div className="app__digital-watch_circle">
          <div className="time">{time}</div>
        </div>
      </div>
    </div>
  );
};

export default DigitalWatch;
