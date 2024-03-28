import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import './Arboriculture.css'
import ArboImage from '../ArboImage/ArboImage'
import electricity from './image2.jpg'
import Footer from '../../components/Footer/Footer'
import InitialContent from '../../components/InitialContent/InitialContent'
import trepo from './TreeHanging1.jpg'
import tree from './treetrim.jpg'
import prox from './treeElectric.avif'
import health from './TreeHanging.jpg'
const Arboriculture = () => {
    return (
        <div className='background_color'>
            <Navbar />
            <div className="ArboDef">
                <InitialContent content1={'What is Arboriculture?'} content2={'Arboriculture analysis for electric utilities involves assessing the impact of trees on power lines and infrastructure. This evaluation typically includes identifying tree species, assessing their proximity to power lines, and evaluating their risk of causing outages or safety hazards. Additionally, it involves determining the best strategies for tree trimming, pruning, or removal to minimize potential risks while preserving the health and aesthetics of the trees. The goal is to ensure reliable electricity distribution while promoting environmental stewardship and community safety.'} addImage={trepo} trepo={true} />
            </div>
            <div class="grid-container_Arbo">
                <div class="grid-item">
                    <div class="card">
                        <img class="card-img-top" src={trepo} alt="Card image cap" />
                        <div class="card-body">
                            <h5 class="card-title">Tree Identification</h5>
                            <p class="card-text">Tree Species Identification: Identifying the types of trees present in the vicinity of utility infrastructure.</p>

                        </div>
                    </div>
                </div>
                <div class="grid-item">
                    <div class="card">
                        <img class="card-img-top" src={electricity} alt="Card image cap" />
                        <div class="card-body">
                            <h5 class="card-title">Risk Assesment</h5>
                            <p class="card-text">Evaluating the potential risk posed by trees to power lines, substations, and other utility equipment.</p>

                        </div>
                    </div>
                </div>
                <div class="grid-item">
                    <div class="card">
                        <img class="card-img-top" src={tree} alt="Card image cap" />
                        <div class="card-body">
                            <h5 class="card-title">Tree Trimming and Pruning Recommendations</h5>
                            <p class="card-text">Providing recommendations for trimming or pruning trees to minimize interference with power lines and ensure safety.</p>

                        </div>
                    </div>
                </div>
                <div class="grid-item">
                    <div class="card" >
                        <img class="card-img-top" src={prox} alt="Card image cap" />
                        <div class="card-body">
                            <h5 class="card-title">Proximity Analysis</h5>
                            <p class="card-text">Assessing the distance between trees and utility infrastructure to determine potential hazards.</p>

                        </div>
                    </div>
                </div>
                <div class="grid-item">
                    <div class="card" >
                        <img class="card-img-top" src={health} alt="Card image cap" />
                        <div class="card-body">
                            <h5 class="card-title">Health Assessment</h5>
                            <p class="card-text">Evaluating the health and condition of trees to identify signs of disease, decay, or structural weakness.</p>

                        </div>
                    </div>
                </div>
                <div class="grid-item">
                    <div class="card" >
                        <img class="card-img-top" src={trepo} alt="Card image cap" />
                        <div class="card-body">
                            <h5 class="card-title">Growth Prediction</h5>
                            <p class="card-text">Predicting the growth patterns of trees to anticipate future interactions with utility infrastructure.</p>

                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Arboriculture
