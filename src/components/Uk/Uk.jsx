import React from 'react';
import './Uk.css';
import msedl from '../../assets/msedl.jpg'
import bses from '../../assets/bses.jpg'
import Adani from '../../assets/Adani_Transmission-removebg-preview.png'
import Tata from '../../assets/Tata.jpg'
import mpcz from '../../assets/mpcz.png'
import kseb from '../../assets/kseb.png'
const Australia = () => {
    return (
        <div className='main-Australia'>
            <div className='left-div-australia'>
                <h1 className='left-content-australia'>
                    List of Companies we work with
                </h1>
            </div>
            <div className="right-content-australia">
                <img src={kseb} alt="" />
                <img src={mpcz} alt="bses" />
                <img src={msedl} alt="bses" />
                <img src={bses} alt="bses" />
                <img src={Tata} alt="Tata" />
                <img src={Adani} alt="Adani" />

            </div>
        </div>
    );
}

export default Australia;
