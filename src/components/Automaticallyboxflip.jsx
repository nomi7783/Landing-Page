import React from 'react';
import automaticallyImage from "../img/automaticallyRecord.png";
import Button from "./Custombutton";

const Automaticallyboxflip = () => {
  return (
    <div className="automaticallybox commonPadding">
       <div className="row">
       <div className="col-xl-6">
            <div className="img" data-aos="fade-up-right" data-aos-duration="2000">
                <img src={automaticallyImage} alt="" />
            </div>
            </div>
            <div className="col-xl-6">
                <div className='details' data-aos="fade-up-left" data-aos-duration="3000">
                    <h3>Automatically record and<span> transcribe meetings</span></h3>
                    <ol>
                        <li>Transcribe meetings across several video-conferencing apps, dialers, and audio files.</li>
                        <li>Easily invite CoPitch.ai Notetaker to meetings on your calendar.</li>
                        <li>Fireflies captures video + audio, and generates transcripts in minutes.</li>
                        <li>Integrates with apps like Google Meet, Zoom, Teams Webex, Ringcentral, Aircall and other platforms.</li>
                    </ol>
                    <Button color={"blue"} text={"Get Started for FREE"}/>
                </div>
            </div>
          
        </div>
       </div>
  )
}

export default Automaticallyboxflip