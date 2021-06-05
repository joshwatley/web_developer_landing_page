import React, {useState} from 'react';
import './Hero.css';

function Hero() {
  
    return (

    
        <div className="HeroWrapper">
            <div className="centerT">

            <div className="Hero-Text-Wrapper">
                <div className="TextFormatter">
                <h1>BUILD YOUR WEBSITE WITH CONFIDENCE</h1>
                <h2>Here at Company Name we are a top rated digital product studio based in South London</h2>
                <h3>Built with confidence and industry expertise</h3>
                <p><span className="boldtext">INDUSTRY LEADING PROTOTYPE DEVELOPMENT SYSTEM:</span> We understand the problem of paying for a service and not being compeltly happy with the result. We provide quick turnaround free site prototypes to ensure you know exactly what you are getting before you pay.</p>
                <p><span className="boldtext">A STEP BY STEP APPROACH:</span> All of our clients value our process for its key checkpoints along the way, we ensure every major change or upgrade is validated, as well as looking for feedback constantly to ensure customers are happy.</p>
                <p><span className="boldtext">A LOVE FOR PROJECTS LIKE YOURS:</span> We specialise in the rapid prototyping of web site concepts, taking your vision and making it a reality as quick as possible for as cheap as possible.</p>

                </div>
            </div>
            <div className="Hero-Form-Wrapper">
                <div id="thankyou" className="ThankYouForm">
                    <h1>
                        THANK YOU
                    </h1>
                    <h2>
                        Thank you for contacting Company! <br></br><br></br> One of our founders will be in touch within 1 business day. We look forward to organising a call and getting to know more about your project.
                    </h2>
                    <p>
                        In the meantime, please feel free to continue taking a looking around : 
                        <br></br><br></br>
                        - Head to our <a href="/">main site</a>.<br></br>
                        - Review some <a href="/">samples of our work</a>.<br></br>
                        - Read some <a href="/">client reviews</a>.
                    </p>
                </div>
                <form id="cform" className="Hero-Contact-Form">
                    <h2>Get in contact with one of our founder for a free 30 minute consultation call:</h2>

                    <label for="firstname">First Name<span className="asterix">*</span></label>
                    <input id="firstname" type="text"  name="firstname"></input>

                    <label for="lastname">Last Name<span className="asterix">*</span></label>
                    <input id="lastname" type="text"  name="lastname"></input>

                    <label for="email">Email<span className="asterix">*</span></label>
                    <input id="email" type="text"  name="email"></input>

                    <label for="phonenumber">Phone Number<span className="asterix">*</span></label>
                    <input id="phonenumber" type="text"  name="phonenumber"></input>

                    <label for="message">Your message</label>
                    <textarea id="message" type="text"  name="message"></textarea>

                    <button>Schedule a free consultation call</button>

                </form>

            </div>

            </div>
        </div>
    )
}

export default Hero
