import React from 'react';
import automaticallyImage from "../img/automaticallyRecord.png";
import Button from "./Custombutton";

const Automaticallyboxflip = (props) => {

  return (
    <div className={`automaticallybox commonPadding ${props.margin}`}>
       <div className="row">
       <div className="col-xl-6">
            <div className="img" >
                <img src={automaticallyImage} alt="" />
                <div className='bg2'></div>
            </div>
            </div>
            <div className="col-xl-6">
                <div className='details' >
                    <h3>Automatically record and<span> transcribe meetings</span></h3>
                    <ol>
                        <li>Transcribe meetings across several video-conferencing apps, dialers, and audio files.</li>
                        <li>Easily invite CoPitch.ai Notetaker to meetings on your calendar.</li>
                        <li>Fireflies captures video + audio, and generates transcripts in minutes.</li>
                        <li>Integrates with apps like Google Meet, Zoom, Teams Webex, Ringcentral, Aircall and other platforms.</li>
                    </ol>
                    <Button color={"blue"} text={"Get Started for free"}/>
                </div>
            </div>
          
        </div>
       </div>
  )
}

export default Automaticallyboxflip