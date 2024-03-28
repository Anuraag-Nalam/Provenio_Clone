import React from 'react'
import Navbar from '../components/Navbar/Navbar';
import BigComponent from '../components/BigComponent/BigComponent';
import Carousel from '../components/Carousel/Carousel';
import Efficiency from '../components/Efficiency/Efficiency';
import Icons from '../components/Icons/Icons';
import Uk from '../components/Uk/Uk';
import InitialContent from '../components/InitialContent/InitialContent';
import Running from '../components/Running/Running';
import Transparent from '../components/Transparent/Transparent';
import Footer from '../components/Footer/Footer';
import Computer from '../assets/Computer'
import { useState, useEffect, useRef } from 'react';
const HomePage = () => {  
  return (
    <div style={{background:'#F0F0F4',width:'100%'}}>
      <Navbar />
      <InitialContent content1={'AI-powered productivity for the supply chain back-office'} content2={'Increasing the speed, accuracy, and efficiency of Order-to-Cash and Procure-to-Pay processes across supply chain logistics.'} addImage={Computer} />
      <Uk />
      <Transparent />
      <BigComponent />
      <Efficiency />
      <Carousel />
      <Running />
      <Icons />
      <Footer />
    </div>
  )
}

export default HomePage
