import React from 'react'
import './Contact.css'
import Navbar from '../../components/Navbar/Navbar'
import pink from '../Dso/pink.webp'
import Button from '../../components/Button/Button'
import Footer from '../../components/Footer/Footer'
const Contact = () => {
    return (
        <>
            <div className='main_contact'>
                <Navbar colorProp={'#0e215d'} />
                <div className="no_image">
                    <h1>Contact Us to get Started</h1>
                </div>
                <div className="form_contact">
                    <div className="form_left">
                        <div className="form_left_contact_control">
                            <h2>Get in touch, <br /> Fill out the Form:</h2>
                            <br />
                            <p>Or alternatively, you can
                                reach us here:
                                info@provenio.ai</p>
                            <br />
                            <p>Level 17, International Towers 3, Barangaroo Avenue, Barangaroo,
                                Sydney,</p>
                            <br /><p>02 8667 5398</p>
                        </div>
                    </div>
                    <div className="form_right">
                        <form>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputEmail4">First Name</label>
                                    <input type="email" className="form-control" id="inputEmail4" placeholder="First Name" />
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputPassword4">Last Name</label>
                                    <input type="password" className="form-control" id="inputPassword4" placeholder="Last Name" />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputEmail5">Company</label>
                                    <input type="email" className="form-control" id="inputEmail5" placeholder="Company" />
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputPassword40">Role</label>
                                    <input type="password" className="form-control" id="inputPassword40" placeholder="Role" />
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputEmail6">Business Email</label>
                                    <input required type="Business Email" className="form-control" id="inputEmail6" placeholder="Company" />
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputPassword7">Phone Number</label>
                                    <input type="password" className="form-control" id="inputPassword7" placeholder="Phone Number" />
                                </div>
                            </div>
                            <div className="questions_Contact">
                                <p>What can we provide you more information on? *<br />
                                    (select multiple options if required)</p>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                    <label className="form-check-label" htmlFor="defaultCheck1">
                                        Book a demo
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="defaultCheck15" />
                                    <label className="form-check-label" htmlFor="defaultCheck1">
                                        provenio<b>ai</b> product information
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="defaultCheck16" />
                                    <label className="form-check-label" htmlFor="defaultCheck1">
                                        Book a discovery session for your operation
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="defaultCheck18" />
                                    <label className="form-check-label" htmlFor="defaultCheck1">
                                        Other
                                    </label>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlTextarea1">Comments</label>
                                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="10"></textarea>
                                </div>
                            </div>
                            <button style={{marginTop:'1rem'}} type="submit" className="btn btn-primary">Save</button>
                        </form>
                    </div>
                </div>

                <div className="ceo_image ceo_image_pink contact_pink">
                    <div className="right_ceo_image_pink">
                        <div className="rightContentCeo rightContentCeo_pink">
                            <h3>Take the next step</h3>
                            <p>Start transforming your back-office processes with our ethical and explainable A.I-powered solutions and products. Request a demo with a member of our friendly team.</p>
                            <Button buttonClassName='nav-button' content='Book a Demo' />
                        </div>
                    </div>
                    <div className="left_ceo_image_pink">
                        <img className='image_ceo_pink' src={pink} alt="" />
                    </div>
                </div>

                <Footer />
            </div>
        </>
    )
}

export default Contact
