import React from 'react'
import './Footer.css'
// import logo from '../../assets/Provenio_Logo_Whiten.png'
import logo from '../../assets/VidronaLogos/190910_VIDRONA_LOGO_128px.png'
const Footer = () => {
    return (
        <div className='main-footer'>
            <div>
                <img className='image_main_footer' src={logo} alt="" />
            </div>

            <div className="entire_flex">
                <div className='footer_class1'>
                    AI-powered productivity for the supply chain back-office.

                </div>
                <div className='quick_links'>
                    <h2>Quick Links</h2>
                    <p>Home</p>
                    <p>Fraitey</p>
                    <p>Trepo</p>
                    <p>Book a demo</p>
                </div>
                <div className='contact'>
                    <h2>Contact</h2>
                    <p>info.vidrona.tech</p>
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
    )
}

export default Footer
