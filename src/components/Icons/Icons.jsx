import './Icons.css'
import React from 'react'
import svg1 from "../../assets/personImage_files/53rhqg.svg";
import svg2 from "../../assets/personImage_files/5g4q3w.svg";
import svg3 from "../../assets/personImage_files/g4tgq.svg";
import svg4 from "../../assets/personImage_files/gqtg.svg";
import svg5 from "../../assets/personImage_files/y5jhw.svg";
import svg6 from "../../assets/personImage_files/thw4.svg";
import Button from '../Button/Button';

const Icons = () => {
    return (
        <>
            <div className='main-icons'>
                <div style={{ color: "black" }} className='heading'>
                    <p>Security & Standards</p>
                </div>
                <div style={{ color: "black" }} className="content-icon">
                    provenioai is hosted on Amazon Web Services (AWS) ensuring our customers benefit from region-specific regulatory hosting, in-country data availability and security standards, including ISO 27001.
                </div>
                <div className="security">
                    <div className="security-icons">
                        <div>We follow strict security, data encryption and data storage policies and protocols.</div>
                    </div>
                    <div className="all-icons">
                        <div className='all_icons_div_element'><img src={svg1} alt="" /><hr class="icon-line" /><p>All data secured
                            within Country</p></div>
                        <div className='all_icons_div_element'><img src={svg2} alt="" /><hr class="icon-line" /><p>End-to-End Data Encryption while at rest and motion</p></div>
                        <div className='all_icons_div_element'><img src={svg3} alt="" /><hr class="icon-line" /><p>Enhanced Vulnerability Protection & Compliance Management</p></div>
                        <div className='all_icons_div_element'><img src={svg4} alt="" /><hr class="icon-line" /><p>Access Management and Role Based Control for Users</p></div>
                        <div className='all_icons_div_element'><img src={svg5} alt="" /><hr class="icon-line" /><p>Authentication methods such as 2FA and SSO</p></div>
                        <div className='all_icons_div_element'><img src={svg6} alt="" /><hr class="icon-line" /><p>Full Traceability and AI explainabilty</p></div>
                    </div>
                </div>
                {/* style={{marginLeft:'10rem'}} */}
                
            </div>
            <div className='explicit' style={{background:'white'}} >
            <div  className='next-step'>
                    <div className='left_content_next_step'>
                        <p>Take the next step</p>
                        <p>Start transforming your back-office processes with our ethical and explainable A.I-powered solutions and products. Request a demo with a member of our friendly team.</p>
                    </div>
                    <div className="right_content_next_step">
                        <Button buttonClass='nav-button' content='Get in Touch' />
                    </div>
                </div>

                </div>


        </>
    )
}

export default Icons
