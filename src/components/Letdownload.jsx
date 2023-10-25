import React from 'react';
import Button from './Custombutton';


const Letdownload = () => {
  return (
    <section className="letDownloadSection">
      <div className="container-fluid">
        <div className='letdownloadBox'>
            <div className="row">
                <div className="col-md-8 mx-auto" >
                    <div className='details' >
                        <button className='downloadBtn'>Download</button>
                        <h4>Let’s Download coPitch.ai  Right Now</h4>
                        <p>Record your meetings with live transcription and let us do the magic with our AI Generated business proposal that hit right on spot!</p>
                        <div className='btnBox'>
                        <Button color={"blue"} text={"Get Started for free"}/>   
                        <Button color={"white"} text={"Request a demo"}/>
                       
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </section>
  )
}

export default Letdownload