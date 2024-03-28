import React from 'react'
import './Navbar.css'
import logo from '../../assets/VidronaLogos/190910_VIDRONA_LOGO_128px.png'
import Button from '../Button/Button'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
const Navbar = ({ colorProp }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const navBackground = {
        backgroundColor: colorProp || '#e3edff',
        color: colorProp && 'white'
    }
    useEffect(() => {
        const handleResize = () => {
            const windowWidth = window.innerWidth;
            if (windowWidth > 900) {
                setMenuOpen(false);
            }
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <>
            <div style={colorProp && navBackground} className='navbar'>
                <div className="navbar-logo">
                    {colorProp ? <Link to="/"><img src={logo} alt="logo" /></Link> : <Link to="/"><img src={logo} alt="logo" /></Link>}
                </div>
                <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className="navbar-elements">
                    <div className="dropdown">
                        <span>Solutions</span>
                        <div className="dropdown-content">
                            <p style={{ color: 'black' }}>
                                <Link style={{ textDecoration: 'none', color: 'inherit' }} to="/Tso">Transmission (TSO)</Link>
                            </p>
                            <p style={{ color: 'black' }}><Link style={{ textDecoration: 'none', color: 'inherit' }} to="/Dso">Distribution (DSO)</Link></p>
                            <p style={{ color: 'black' }}><Link style={{ textDecoration: 'none', color: 'inherit' }} to="/Arboriculture">Arboriculture Analytics</Link></p>
                        </div>
                    </div>
                    <div className='style_about'><Link style={{ textDecoration: 'none', color: 'inherit' }} to="/about">
                        About
                    </Link></div>
                    <div className='style_contact'><Link style={{ textDecoration: 'none', color: 'inherit' }} to="/contact">
                        Contact Us
                    </Link></div>
                    <div className="style_button">
                        <Button buttonClass='nav-button' content='Book a demo' forwardContent="/contact" />
                    </div>
                </div>
            </div>
            {menuOpen && <div style={colorProp && navBackground} className="menuOpened navbar-elements">
                <p style={colorProp && navBackground}>
                    <Link style={{ textDecoration: 'none', color: 'inherit' }} to="/Tso">Transmission (TSO)</Link>
                </p>
                <p style={colorProp && navBackground}><Link style={{ textDecoration: 'none', color: 'inherit' }} to="/Dso">Distribution (DSO)</Link></p>
                <p style={colorProp && navBackground}><Link style={{ textDecoration: 'none', color: 'inherit' }} to="/Arboriculture">Arboriculture Analytics</Link></p>
                <div className='style_about'><Link style={{ textDecoration: 'none', color: 'inherit' }} to="/about">
                    About
                </Link></div>
                <div className='style_contact'><Link style={{ textDecoration: 'none', color: 'inherit' }} to="/contact">
                    Contact Us
                </Link></div>
                <div className="style_button">
                    <Button buttonClass='nav-button' content='Book a demo' forwardContent="/contact" />
                </div>
            </div>}
        </>
    )
}

export default Navbar
