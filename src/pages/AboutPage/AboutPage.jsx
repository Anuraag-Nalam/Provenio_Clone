import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import BigLogo from '../../assets/BigLogoProvenio.png'
import peopleThree from '../../assets/peopleThree.webp'
// import provenio from '../../assets/AboutRelatedImages/ProvenioBackground.webp'
import provenio from '../Tso/tsoComponents_files/Vidrona.jpg'
import './AboutPage.css'
import Ceo from './AboutPageCarousel.js';
import { useState } from 'react'
const AboutPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };
  console.log(Ceo.data[0].content1)
  return (
    <div className='mainClass_AboutPage'>
      <Navbar />
      <div className='content_AboutPage'>
        <div className="logoLeft_AboutPage">
          <p>
            We believe that people should apply human intelligence at work and not get bogged down with mundane tasks.
          </p>
        </div>
        <div className="logoRight_AboutPage">
          <img src={BigLogo} alt="" />
        </div>
      </div>
      <div className="light_background">
        <p>Digitising and automating the flow of data across the physical supply chain – we free people from manual, time consuming and error prone processing.</p>
      </div>
      <div className='parent_backgroundLogoPeople'>
        {/* issue here and need clarification */}
        {/* <img className='backgroundLogoPeople' src={provenio} alt="" /> */}
      </div>
      <div className="people">
        <div className="left_people">
          <img src={peopleThree} alt="" />
          <p>provenioai is a privately owned and operated Australian company founded by three entrepreneurs: Dan Pace, Lucas Laxale, and Simon Lupica.</p>
        </div>
        <div className="right_people">
          <p>
            With a keen eye for innovation and modernisation, the trio wanted to venture into something new and unique, which led them to conceptualise an AI-powered automation platform that could be used to help modernise the workplace and free people of outdated manual processes.
            <br /><br />
            The team swiftly set about adding partners: CEO Bart Heyse, CTO Sriram Bhargav and Head of Product & Delivery Ben Clannachan, to their ranks. Together, they embarked on a journey to create the provenioai platform.
            <br /><br />
            With pre-and post-pandemic pressure mounting on the supply chain logistics ecosystem, the sector was calling out for smart solutions that could help solve for back office inefficiencies, and proactively address the compounding pressures of people-availability and unsustainable workloads… so the team turned their focus to freight and logistics.
          </p>
        </div>
      </div>
      <div className='mainPeople_AboutPage'>
        <div className='About_carousel'>
          {Ceo.data.map((item, index) => (            
            <div className={index === currentSlide ? "flex_AboutPage" : "slide-hidden flex_AboutPage"}>
              <p>{item.content1}</p>
              <p>{item.content2}</p>
              <p>{item.content3}</p>
              <p className='last_content'>{item.content4}</p>              
            </div>
          ))}
          <div className="indi">
          <span className='indicators indicators_AboutPage'>
            {Ceo.data.map((_, index) => (
              <button
                onClick={() => goToSlide(index)}
                className={index === currentSlide ? 'indicator active' : 'indicator'}
                key={index}
              ></button>
            ))}
          </span>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default AboutPage
