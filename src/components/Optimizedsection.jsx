import React from 'react';
import optimizedImg from '../img/optimized.png'
import Previewsocialmedia from './Previewsocialmedia';

const Optimizedsection = () => {
  return (
    <section className="optimizedSection">
      <div className="container-fluid">
        <div className='optimizedBox commonPadding'>
          <div className="row">
            <div className="col-xl-8">
              <div className='details'>
                <h3><span>Optimized For Posts on All Social Media:</span><br></br> Facebook, Instagram & Twitter</h3>
                <p>The design has an aspect ratio of 1:1 which the majority of social media recommends. The image quality is also high (1080 * 1080), you can further increase the image quality to 2x or more so that the design looks sharper.</p>

                <div className='customLinkTabs'>
                  <Previewsocialmedia content="Previw for Instagram"/>
                  <Previewsocialmedia content="Previw for Facebook"/>
                  <Previewsocialmedia content="Previw for Twitter"/>
                </div>
              </div>
            </div>
            <div className="col-xl-4">
              <div className='image' >
                  <img src={optimizedImg} alt="" />
              </div>
            </div>
          </div>
        </div>
        </div>
        </section>
  )
}

export default Optimizedsection