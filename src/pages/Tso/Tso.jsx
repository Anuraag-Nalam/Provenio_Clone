import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import InitialContent from '../../components/InitialContent/InitialContent'
import Footer from '../../components/Footer/Footer'
import Computer from '../../assets/Computer'
import Fraitey from '../IndComponents/Fraitey/Fraitey'
import './Tso.css'
import ImageComponent from '../IndComponents/ImageComponent/ImageComponent'
import peopleThree from './tsoComponents_files/Fraiety-img-1024x759.webp'
import Button from '../../components/Button/Button'
import Rect from './tsoComponents_files/arlington-research-nFLmPAf9dVc-unsplash.webp'
const Tso = () => {
    return (
        <>
            <Navbar />
            <InitialContent content1={'Fraitey'} content2={'Complex freight validation, made easy,'} content3={'Your people, spreadsheets, documents and emails all cover the gaps in your P2P and O2C processes and systems, costing you time and money.'} addImage={Computer} />
            <Fraitey />
            <ImageComponent />
            <div className="people">
                <div className="left_people">
                    {/* <img src={peopleThree} alt="" /> */}
                    <h2>Create cost transparency and be confident that you’re paying what you should be.</h2>
                </div>
                <div className="right_people">
                    <p>
                        Retail and FMCG businesses rely on supply chain logistic solutions to produce and distribute their products, but reconciling orders and invoices is a manual task that is prone to errors – and, is humanly impossible to validate and calculate every single line item, against multiple data-points and systems.
                        <br /><br />
                        Fraitey does all the time consuming and complex calculations to ensure that you’re paying the correct rates across your supply chain network.
                        <br /><br />
                        Fraitey rapidly validates all of your freight costs, without laborious manual intervention – giving you greater control and transparency over your freight costs, whilst simplifying your process.
                    </p>
                </div>
            </div>
            <div className="people">
                <div className="right_people">
                    <p>
                        With a keen eye for innovation and modernisation, the trio wanted to venture into something new and unique, which led them to conceptualise an AI-powered automation platform that could be used to help modernise the workplace and free people of outdated manual processes.
                        <br /><br />
                        The team swiftly set about adding partners: CEO Bart Heyse, CTO Sriram Bhargav and Head of Product & Delivery Ben Clannachan, to their ranks. Together, they embarked on a journey to create the provenioai platform.
                        <br /><br />
                        With pre-and post-pandemic pressure mounting on the supply chain logistics ecosystem, the sector was calling out for smart solutions that could help solve for back office inefficiencies, and proactively address the compounding pressures of people-availability and unsustainable workloads… so the team turned their focus to freight and logistics.
                    </p>
                </div>
                <div className="left_people">
                    <img src={peopleThree} alt="" />
                </div>
            </div>

            <div className='main-running_Tso'>
                <div className='flex-box'>
                    <div className='left-div-running_TSO'>
                        <h1 className='left-content-running_Tso'>
                            Freight Audit and Payments.
                        </h1>
                        <p className='running-p'>Find out how Fraitey can help you
                            with your FAP compliance.</p>
                            <Button buttonClass='nav-button' content='Book a demo' />
                    </div>
                    <div className="right-div-running">
                        <img src={Rect} alt="" />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Tso
