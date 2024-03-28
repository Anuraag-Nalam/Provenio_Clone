import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import trepo from './DSO_Files_files/trepo-img.webp'
import InitialContent from '../../components/InitialContent/InitialContent'
import Footer from '../../components/Footer/Footer'
import Button from '../../components/Button/Button'
import ceo_image from './ceo.webp'
import sap from './SAP.webp'
import pink from './pink.webp'
import './Dso.css'
const Dso = () => {
  return (
    <div className='main_Dso'>
      <Navbar />
      <InitialContent content1={'trePO'} content2={'Advanced artificial intelligence to automate procure-to-pay.'} content3={`trePO uses advanced A.I. and M.L. to digitise and intelligently automate up to 90% of the P2P process.
      
      By reducing exceptions and automating complex and time consuming 3-way PO matches, trePO saves you time and improves your time-to-process.`} addImage={trepo} trepo={true} />

      <div className='main-Australia'>
        <div className='left-div-Fraitey'>
          <h1 style={{ padding: '1rem 8rem', fontSize: '30px' }}
            className='left-content-fraitey'>
            Reduce manual intervention whilst rapidly improving time-to-process and time-to-pay cycles, down to a matter of seconds!
          </h1>
          <Button buttonClass='nav-button' content='Find out how' />
        </div>
      </div>
      <div className='main_efficiency_DSO'>
        <div className="boxes">
          <div className="box1">
            <p className='heading'>92.7%</p>
            <p>Our customers have achieved up to 92.7% automated state across their P-2-P & O-2-C processes</p>
          </div>
          <div className="box2_DSO">
            <p className='heading'>60s</p>
            <p>Our customers have reduced their cycle times from days, down to seconds</p>
          </div>
          <div className="box3">
            <p className='heading'>3x</p>
            <p>Our customers have achieved 3x in-year Return on Investment</p>
          </div>
        </div>
      </div>
      <div className="ceo_image">
        <div className="left_ceo_image">
          <img className='image_ceo' src={ceo_image} alt="" />
        </div>
        <div className="right_ceo_image">
          <div className="rightContentCeo">
            <h3>HEAD OF FINANCE PERSPECTIVE</h3>
            <p>“trePO has helped us reduce the amount of manual work involved in our high-volume Procure-to-Pay process, giving time back to focus on other priorities.
              <br />
              trePO has automated our complex and time-consuming 3-way PO matching process, making it simpler and more efficient to manage.”
            </p>
            <br /><br />
            <p>FINANCIAL CONTROLLER, FMCG</p>
          </div>
        </div>

      </div>

      <div className='main-content_DSO'>
        <div className='left-content'>
          <h1 className='left-content-h1'>
            trePO turbo-charges your accounts payable process.
          </h1>
          <p className='left-content-p'>
            Taking away all the manual keying, alerting you to the few things that need your attention, and having invoices ready for payment in under a minute!
          </p>
        </div>
        <div className="right-content_DSO">
          <img src={sap} alt="Computer" />
        </div>
      </div>

      {/* <div style={{ marginLeft: '10rem' }} className='next-step_DSO'>
        <div className='left_content_next_step_DSO'>
          <p>Take the next step</p>
          <p>Start transforming your back-office processes with our ethical and explainable A.I-powered solutions and products. Request a demo with a member of our friendly team.</p>
          <Button buttonClass='nav-button' content='Book a Demo' />
        </div>
        <div className="right_content_next_step_DSO">
          <img src={pink} alt="" />
        </div>
      </div> */}


      <div className="ceo_image ceo_image_pink">
        <div className="right_ceo_image_pink">
          <div className="rightContentCeo rightContentCeo_pink">
            <h3>Take the next step</h3>
            <p>Start transforming your back-office processes with our ethical and explainable A.I-powered solutions and products. Request a demo with a member of our friendly team.</p>
            <Button buttonClass='nav-button' content='Book a Demo' />
          </div>
        </div>

        <div className="left_ceo_image_pink">
          <img className='image_ceo_pink' src={pink} alt="" />
        </div>

      </div>


      <Footer />
    </div>

  )
}

export default Dso
