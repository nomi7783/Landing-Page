import React from 'react';
import optimizedImg from '../img/optimized.png'

const Optimizedsection = () => {
  return (
    <section className="optimizedSection">
      <div className="container-fluid">
        <div className='optimizedBox commonPadding'>
          <div className="row">
            <div className="col-xl-8">
              <div className='details' data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
                <h3><span>Optimized For Posts on All Social Media:</span><br></br> Facebook, Instagram & Twitter</h3>
                <p>The design has an aspect ratio of 1:1 which the majority of social media recommends. The image quality is also high (1080 * 1080), you can further increase the image quality to 2x or more so that the design looks sharper.</p>

                <div className='customLinkTabs'>
                  <a href="#">Previw for Facebook<i class="fas fa-arrow-right"></i></a>
                  <a href="#">Previw for Instagram<i class="fas fa-arrow-right"></i></a>
                  <a href="#">Previw for Twitter<i class="fas fa-arrow-right"></i></a>

                </div>
              </div>
            </div>
            <div className="col-xl-4">
              <div className='image' data-aos="fade-left"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
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