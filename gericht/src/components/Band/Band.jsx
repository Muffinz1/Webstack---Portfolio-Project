import React, { useState, useRef, useEffect } from 'react';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';
import { music } from '../../constants'; 

import './Band.css';

const Band = () => {
  const [playMusic, setPlayMusic] = useState(false);
  const audioRef = useRef(null);

 
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.5; 
    }
  }, []);

  const handleMusic = () => {
    setPlayMusic((prevPlayMusic) => {
      if (audioRef.current) {
        if (prevPlayMusic) {
          audioRef.current.pause(); 
        } else {
          audioRef.current.play() 
            .catch((error) => {
              console.warn('Autoplay was prevented:', error);
            });
        }
      }
      return !prevPlayMusic; 
    });
  };

  return (
    <div className="app__music-button">
      <audio src={music} ref={audioRef} autoPlay loop /> 
      <div className="app__music-button_circle" onClick={handleMusic}>
        {playMusic ? (
          <BsPauseFill color="#fff" fontSize={30} />
        ) : (
          <BsFillPlayFill color="#fff" fontSize={30} />
        )}
      </div>
    </div>
  );
};

export default Band;
