import React from 'react'
import lazyload from '../../assets/lazyProvenio.webp'
import './BigComponent.css'
import prna from '../../assets/personImage_files/prna.webp'
import prvc from '../../assets/personImage_files/prvc.webp'
import prvb from '../../assets/personImage_files/prvb.webp'
const BigComponent = () => {
    return (
        <div className='bc_Container'>
            <div className="content">
                <p>We are a proud Australian company, passionate about helping businesses succeed, using ethical and explainable A.I.
                </p><p>
                    We believe that human intellect should be maximised in the workplace and not get bogged down with mundane processes.
                </p>
            </div>
            <img className='background-image' src={lazyload} alt="" />
            <div className="contain">                
                <div className="content2">
                    <div className='content2_element'>
                        <h1>Save Time & Money</h1>
                        <p>Save time by automating up to 90% of your manual processing. Prevent revenue leakage and avoid the risks of unaccounted liabilities.</p>
                    </div>
                    <div className='content2_image'>
                        <img src={prna} alt="" />
                    </div>
                </div>
            </div>
            <div className="contain">
                <div className="content2 reverseElement">
                    <div className='content2_image'>
                        <img src={prvc} alt="" />
                    </div>
                    <div className='content2_element'>
                        <h1>
                            Insights & Control</h1>
                        <p>Create near real time cost transparency, know your cost-to-serve and produce richer insights to make better data-driven decisions.</p>
                    </div>
                </div>
            </div>
            <div className="contain">
                <div className="content2">
                    <div className='content2_element'>
                        <h1>
                            Experience</h1>
                        <p>Improve your Time-to-Process and Time-to-Pay cycles, prevent errors, and elevate the experience of your people, customers and suppliers.</p>
                    </div>
                    <div className='content2_image'>
                        <img src={prvb} alt="" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default BigComponent


