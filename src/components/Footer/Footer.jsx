import React, { useEffect } from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/VidronaLogos/190910_VIDRONA_LOGO_128px.png';

const Footer = () => {
    // useEffect(() => {
    //     window.scrollTo(0, 0); // Scrolls to the top when component mounts
    // }, []);

    const scrollToTop = () => {
        document.documentElement.classList.add('scroll-to-top'); 
        window.scrollTo(0, 0);
    };

    return (
        <div className='main-footer'>
            <div className='Vidrona_Logo'>
                <img className='image_main_footer' src={logo} alt="" />
            </div>

            <div className="entire_flex">
                <div className='footer_class1'>
                    AI-powered productivity for the supply chain back-office.
                </div>
                <div className='quick_links'>
                    <h2>Quick Links</h2>
                    <p className='highlight'><Link style={{ textDecoration: 'none', color: 'inherit' }} to="/" onClick={scrollToTop}>
                        Home
                    </Link></p>
                    <p className='highlight'><Link style={{ textDecoration: 'none', color: 'inherit' }} to="/Tso" onClick={scrollToTop}>Transmission (TSO)</Link></p>
                    <p className='highlight'><Link style={{ textDecoration: 'none', color: 'inherit' }} to="/Dso" onClick={scrollToTop}>Distribution (DSO)</Link></p>
                    <p className='highlight'><Link style={{ textDecoration: 'none', color: 'inherit' }} to="/Arboriculture" onClick={scrollToTop}>Arboriculture</Link></p>
                    <p className='highlight'><Link style={{ textDecoration: 'none', color: 'inherit' }} to="/contact" onClick={scrollToTop}>Book a Demo</Link></p>
                </div>
                <div className='contact'>
                    <h2>Contact</h2>
                    <p>info@vidrona.tech</p>
                    <p>+44 7469 231693</p>
                </div>
                <div className='Address'>
                    <h2>Address</h2>
                    <p>G10 Atlas Building European Space Agency: BIC Campus, Fermi Avenue, Harwell, Didcot OX11 0QX, UK</p>
                </div>
            </div>
            <div className="copyright">
                <p>© 2024 - Provenio || All Rights Reserved</p>
                <p>Terms and Conditions || Privacy Policy</p>
            </div>
        </div>
    );
};

export default Footer;
