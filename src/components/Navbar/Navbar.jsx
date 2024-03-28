import React from 'react'
import './Navbar.css'
// import logo from '../../assets/logo.png'
import logo from '../../assets/VidronaLogos/190910_VIDRONA_LOGO_128px.png'
import Button from '../Button/Button'
import { Link } from 'react-router-dom'
import whitelogo from '../../pages/Contact/Provenio_Logo_Whiten.png'

const Navbar = ({ colorProp }) => {
    const navBackground = {
        backgroundColor: colorProp || '#e3edff',
        color: colorProp && 'white'
    }
    return (
        <div style={colorProp && navBackground} className='navbar'>
            <div className="navbar-logo">
                {colorProp ? <Link to="/"><img src={logo} alt="logo" /></Link> : <Link to="/"><img src={logo} alt="logo" /></Link>}

            </div>
            <div className="navbar-elements">
                <div className="dropdown">
                    <span>Solutions</span>
                    <div className="dropdown-content">
                        <p style={{color:'black'}}>
                            <Link style={{ textDecoration: 'none', color: 'inherit' }} to="/Tso">Transmission (TSO)</Link>
                        </p>
                        <p style={{color:'black'}}><Link style={{ textDecoration: 'none', color: 'inherit' }} to="/Dso">Distribution (DSO)</Link></p>
                    </div>
                </div>
                <div className='style_about'><Link style={{ textDecoration: 'none', color: 'inherit' }} to="/about">
                    About
                </Link></div>
                <div className='style_about'><Link style={{ textDecoration: 'none', color: 'inherit' }} to="/contact">
                    Contact Us
                </Link></div>
                <Button buttonClass='nav-button' content='Book a demo' />
            </div>
        </div>
    )
}

export default Navbar
