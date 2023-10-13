import React from 'react';
import Button from './Custombutton';
import myimage from '../img/automate-img.png';

const Bannersection = () => {
  return (
    <>
      <div className='bannerBox commonPadding'>
        <div className="row">
          <div className="col-xl-6 col-lg-12" data-aos="fade-right" data-aos-duration="2000">
          <h1 className='heading'><span>Automate your</span> Meeting Notes and Proposal</h1>
          </div>
          <div className="col-xl-6 col-lg-12" data-aos="fade-left" data-aos-duration="2000">
            <div className='details'>
              <p>coPitch.ai helps your team transcribe, summarize, search, and analyze voice conversations to create an engaging proposal that helps to win whatever you are looking for.</p>
              <div className='btn-Box'>
                <Button color={"white"} text={"Request a Trail"}/>
                <Button color={"blue"} text={"Get Started for FREE"}/>     
              </div>
            </div>
          </div>

          <div className="col-md-12" data-aos="flip-left" data-aos-duration="3000">
            <div className="img">
              <img src={myimage} alt="" />
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Bannersection