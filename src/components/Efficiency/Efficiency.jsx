import React from 'react'
import './Efficiency.css'
const Efficiency = () => {
    return (
        <div className='main_efficiency'>
            {/* <img src={logo_provenio} alt="" /> */}
            <h1>Achieve greater back-office Efficiency</h1>
            <div className="boxes">
                <div className="box1">
                    <p className='heading'>92.7%</p>
                    <p>Our customers have achieved up to 92.7% automated state across their P-2-P & O-2-C processes</p>
                </div>
                <div className="box2">
                <p className='heading'>60s</p>
                    <p>Our customers have reduced their cycle times from days, down to seconds</p>
                </div>
                <div className="box3">
                <p className='heading'>3x</p>
                    <p>Our customers have achieved 3x in-year Return on Investment</p>
                </div>
            </div>
        </div>
    )
}

export default Efficiency
