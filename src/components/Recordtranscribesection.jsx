import React from "react";
import audioImg from '../img/audio.png';
import Button from './Custombutton';

const Recordtranscribesection = () => {
  return (
    <section className="recordSection">
      <div className="container">
        <div className="row" data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
            <div className="col-lg-8 col-md-10 mx-auto" >
                    <h2>Rec<span><img src={audioImg}/></span>rd, Transcribe, Take Notes & Get AI-generated proposals.</h2>
            </div>
            <div className="col-md-12">
            <Button color={"blue"} text={"Get Started for FREE"}/>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Recordtranscribesection;
