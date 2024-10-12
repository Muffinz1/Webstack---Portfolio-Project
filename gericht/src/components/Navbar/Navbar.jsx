import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import OnlineReservations from '../BookingForm/OnlineReservations'; // Adjust the path as necessary
import images from '../../constants/images';
import './Navbar.css';

const Navbar = ({ setShowLogin }) => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const [showReservations, setShowReservations] = useState(false);
    return (
        <nav className="app__navbar">
            <div className='app__navbar-logo'>
                <img src={images.gericht} alt='app logo' />
            </div>
            <ul className="app__navbar-links">
                <li className="p__opensans">
                    <Link to="home" smooth={true} duration={500}>Home</Link>
                </li>
                <li className="p__opensans">
                    <Link to="about" smooth={true} duration={500}>About</Link>
                </li>
                <li className="p__opensans">
                    <Link to="menu" smooth={true} duration={500}>Menu</Link>
                </li>
                <li className="p__opensans">
                    <Link to="awards" smooth={true} duration={500}>Awards</Link>
                </li>
                <li className="p__opensans">
                    <Link to="contacts" smooth={true} duration={500}>Contacts</Link>
                </li>
            </ul>
            <div className='app__navbar-login'>
                <button type='button' className='custom__button ' onClick={() => setShowLogin(true)}>Log In / Register</button>
                <button type="button" className="custom__button " onClick={() => setShowReservations(true)} >Book Table</button>
                </div>
            <div className='app__navbar-smallscreen'>
                <GiHamburgerMenu color='#fff' fontSize={27} onClick={() => setToggleMenu(true)} />
                {toggleMenu && (
                    <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
                        <MdOutlineRestaurantMenu fontSize={27} className='overlay__close' onClick={() => setToggleMenu(false)} />
                        <ul className="app__navbar-smallscreen_links">
                            <li className="p__opensans"><Link to="home" smooth={true} duration={500}>Home</Link></li>
                            <li className="p__opensans"><Link to="about" smooth={true} duration={500}>About</Link></li>
                            <li className="p__opensans"><Link to="menu" smooth={true} duration={500}>Menu</Link></li>
                            <li className="p__opensans"><Link to="awards" smooth={true} duration={500}>Awards</Link></li>
                            <li className="p__opensans"><Link to="contacts" smooth={true} duration={500}>Contacts</Link></li>
                        </ul>
                    </div>
                )}
            </div>

            {/* Online Reservations Modal */}
            {showReservations && <OnlineReservations setShowReservations={setShowReservations} />}
        </nav>
    );
};

export default Navbar;
