import React from 'react'
import './MidFooter.css'
import {FaStar, FaStarHalfAlt} from 'react-icons/fa'
import trustpilot from '../../images/trustpilotlogo.png'

function MidFooter() {
    return (
        <div className="MidFooterWrapper">
            <div className="TrustElement">
                <img className="TrustLogo" src={trustpilot}></img>
                <div className="TrustStars">
                    <FaStar size ={50}style={{fill: 'red'}} />
                    <FaStar size ={50}style={{fill: 'red'}} />
                    <FaStar size ={50}style={{fill: 'red'}} />
                    <FaStar size ={50}style={{fill: 'red'}} />
                    <FaStarHalfAlt size ={50}style={{fill: 'red'}} />

                </div>
                <div className="TrustTitle"><h3>Rated 4.5 Stars on Trustpilot</h3></div>
                <div className="TrustText"><p>Recognised as one of the top small web development agencies in South London.</p></div>
            </div>
            
        </div>
    )
}

export default MidFooter
