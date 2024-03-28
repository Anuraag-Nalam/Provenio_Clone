import React from 'react'
import './ArboImage.css'
import image from '../../assets/Arboriculture1.jpg'
import icon from '../../assets/ArboIcon.png'
const ArboImage = () => {
    return (
        <>
            <div className='Arbo_Main'>
                <img className='Argo_Icon' src={icon} alt="" />
                <div className="Arbo_Bar">
                    <p>Home</p>
                    <p>Know More!!</p>
                    <p>Contact Us</p>
                    <p>LandScape Supply</p>
                    <p>Emergency Services</p>
                </div>
                <img className='Arbo_Image' src={image} alt="" />
            </div>
        </>
    )
}

export default ArboImage
