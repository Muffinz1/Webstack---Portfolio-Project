import React, { useState } from 'react';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import './OnlineReservations.css'; 

const ReservationPopup = ({ setShowReservations }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [confirmation, setConfirmation] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setConfirmation(`Reservation confirmed for ${name} on ${date} at ${time}.`);
        setName('');
        setEmail('');
        setDate('');
        setTime('');
    };

    return (
        <div className='reservation-popup'>
            <form className="reservation-popup-container" onSubmit={handleSubmit}>
                <div className="reservation-popup-title">
                    <h2>Make a Reservation</h2>
                    <MdOutlineRestaurantMenu onClick={() => setShowReservations(false)} fontSize={27} className='reservation-popup__close' alt="" />
                </div>
                <div className="reservation-popup-input">
                    <input 
                        type="text" 
                        placeholder='Your Name' 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        required 
                    />
                    <input 
                        type="email" 
                        placeholder='Your Email' 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                    />
                    <input 
                        type="date" 
                        placeholder='Date' 
                        value={date} 
                        onChange={(e) => setDate(e.target.value)} 
                        required 
                    />
                    <input 
                        type="time" 
                        placeholder='Time' 
                        value={time} 
                        onChange={(e) => setTime(e.target.value)} 
                        required 
                    />
                </div>
                <button className='reservation-popup-button'>Reserve</button>
                {confirmation && <p className="reservation-popup-confirmation">{confirmation}</p>}
            </form>
        </div>
    );
};

export default ReservationPopup;
