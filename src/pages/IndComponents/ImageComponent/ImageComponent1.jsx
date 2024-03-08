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
                <div style={{ marginTop: '3rem' }} class="icon">
                    <img src={icon2} alt="" />
                    <div className="hover_text">Hover Text</div>
                </div>
                <div class="grid-container">
                    {/* 2 rows 3 columns */}
                    {/* 1st column */}
                    <div class="icon iconTop1">
                        <img src={icon1} alt="" />
                        <div className="hover_text">Hover Text</div>
                    </div>
                    {/* second column */}
                    <div className="containerImageTso">
                        <img className="computerImageTso" id="targetImage" src={image} alt="" />
                        {/* Bottom icons Below Image */}
                        <div className="bottom_container_icons">
                            <div class="icon icon1">
                                <img src={icon3} alt="" />
                                <div className="hover_text1">
                                    Hover Text
                                </div>
                            </div>
                            <div class="icon icon2">
                                <img src={icon1} alt="" />
                                <div className="hover_text">Hover Text</div>
                            </div>
                        </div>
                    </div>
                    <div class="icon iconTop2">
                        <img src={icon1} alt="" />
                        <div className="hover_text">Hover Text</div>
                    </div>
                    <div class="icon iconBottom1">
                        <img src={icon1} alt="" />
                        <div className="hover_text">Hover Text</div>
                    </div>
                    <div class="icon iconBottom2">
                        <img src={icon1} alt="" />
                        <div className="hover_text">Hover Text</div>
                    </div>
                </div>
            </div>

            <Transparent topImage={top} bottomImage={bottom} />
        </>
    )
}

export default ImageComponent
