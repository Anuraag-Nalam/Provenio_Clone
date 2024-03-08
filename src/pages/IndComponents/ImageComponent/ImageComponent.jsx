import React from 'react'
import './ImageComponent.css'
import image from '../../Tso/tsoComponents_files/Fraite-PPfn-b-g.webp'
import icon1 from '../../Tso/tsoComponents_files/icon1.svg'
import icon2 from '../../Tso/tsoComponents_files/icon2.svg'
import icon3 from '../../Tso/tsoComponents_files/icon3.svg'
import Transparent from '../../../components/Transparent/Transparent'
import top from '../../Tso/tsoComponents_files/Fraiety-testimonial-b.webp'
import bottom from '../../Tso/tsoComponents_files/sunset.jpg'
const ImageComponent = () => {
    return (
        <>
            <div className='imageComponent_TSO'>
                <h1>Manage complexity, easily and efficiently</h1>
                <div style={{ marginTop: '3rem' }} className="main_container_TSO1">
                    <div class="icon iconTop2 frontElement">
                        <img src={icon2} alt="" />
                    </div>
                    <div className="hover_text1 backElement">
                        <h5>Intelligent Classification</h5>
                        <p>Recognising, understanding and treating different document types.</p>
                    </div>
                </div>
                <div className="grid-container">
                    {/* 2 rows 3 columns */}
                    {/* 1st column */}
                    <div style={{ marginTop: '3rem' }} className="main_container_TSO1">
                        <div class="icon iconTop2 frontElement">
                            <img src={icon2} alt="" />
                        </div>
                        <div className="hover_text1 backElement">
                            <h5>Intelligent Extraction</h5>
                            <p>Digitising and extracting 1000s of lines of data and information from documents and images.</p>
                        </div>
                    </div>
                    {/* second column */}
                    <div className="containerImageTso">
                        <img className="computerImageTso" id="targetImage" src={image} alt="" />
                        {/* Bottom icons Below Image */}
                        <div className="bottom_container_icons">
                            <div className="main_container_TSO1">
                                <div className="icon icon1 frontElement">
                                    <img src={icon3} alt="" />
                                </div>
                                <div className="hover_text1 backElement">
                                    <h5>Business Logic</h5>
                                    <p>Conducting complex calculations – validating rates, levies and surcharges.</p>
                                </div>
                            </div>
                            <div className="main_container_TSO1">
                                <div className="icon icon2 frontElement">
                                    <img src={icon1} alt="" />
                                </div>
                                <div className="hover_text1 backElement">
                                    <h5>Actionable Intelligence</h5>
                                    <p>Finding and presenting anomalies and actionable intelligence.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="main_container_TSO1">
                        <div className="icon iconTop2 frontElement">
                            <img src={icon3} alt="" />
                        </div>
                        <div className="hover_text1 backElement">
                            <h5>Workflow Automation</h5>
                            <p>Sending correspondence to suppliers and team members.</p>
                        </div>
                    </div>

                    <div className="main_container_TSO1">
                        <div className="icon iconBottom1 frontElement">
                            <img src={icon3} alt="" />
                        </div>
                        <div className="hover_text1 backElement">
                            <h5>Predictive</h5>
                            <p>Learning and creating predictive forecasting and insights.</p>
                        </div>
                    </div>

                    <div className="main_container_TSO1">
                        <div className="icon iconBottom2 frontElement">
                            <img src={icon3} alt="" />
                        </div>
                        <div className="hover_text1 backElement">
                            <h5>Contextual Intelligence</h5>
                            <p>Retrieving, reading & understanding emails, document content and images.</p>
                        </div>
                    </div>
                </div>
            </div>

            <Transparent topImage={top} bottomImage={bottom} />
        </>
    )
}

export default ImageComponent
