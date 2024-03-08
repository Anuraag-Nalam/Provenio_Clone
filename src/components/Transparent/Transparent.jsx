import React from 'react'
import './Transparent.css'
// import Rectangle from '../../assets/Rectangle.webp'
// import Green from '../../assets/greenfield.jpg'
// import high from '../../assets/high_voltage.jpg'
import green from '../../assets/green.jpg'
import Group from '../../assets/personImage_files/Group-31.webp'
const Transparent = ({topImage,bottomImage}) => {
  return (
    <div class="containerit">
      {/* <img src={Group} className="top-image" alt="BottomImage" />
      <img src={green} className="bottom-image" alt="TopImage" /> */}

      <img src={topImage} className="top-image" alt="BottomImage" />
      <img src={bottomImage} className="bottom-image" alt="TopImage" />
    </div>
  )
}
Transparent.defaultProps = {
 topImage:Group,
 bottomImage:green
}

export default Transparent
