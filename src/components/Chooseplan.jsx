import React from 'react';



const Chooseplan = () => {
  return (
    <section className="salescriptsection chooseplanSection">
    <div className="container-fluid">
      <div className='salescriptbox chooseplan commonPadding'>
          <div className="row">

              {/* === */}
              <div className="col-md-12">
                  <div className='detail'>
                      <h3>Choose Plan That’s Right For You</h3>
                      <p>Choose plan that works best for you, feel free to contact us</p>
                  </div>


                  <div className='sliderBox'>

                    {/* ======= */}
                    <div className='DetailBbox' >
                        <h3>Free</h3>
                        <p>Have a go and test your  superpowers</p>
                        <p className='price'><sup>$</sup>0</p>
                        <div>
                        <ul>
                            <li><i class="fas fa-check"></i> 2 User</li>
                            <li><i class="fas fa-check"></i> 2 User</li>
                            <li><i class="fas fa-check"></i> Public Share & Comments</li>
                            <li><i class="fas fa-check"></i> Chat Support </li>
                            <li><i class="fas fa-check"></i> New income apps</li>
                        </ul>
                        <button>SignUp for free</button>
                        </div>
                    </div>

                    <div className='DetailBbox' >
                        <h3>Pro</h3>
                        <p>Have a go and test your  superpowers</p>
                        <p className='price'><sup>$</sup>8</p>
                        {/* <p className='save'>Save a year</p> */}
                        <div>
                        <ul>
                            <li><i class="fas fa-check"></i> 2 User</li>
                            <li><i class="fas fa-check"></i> 2 User</li>
                            <li><i class="fas fa-check"></i> Public Share & Comments</li>
                            <li><i class="fas fa-check"></i> Chat Support </li>
                            <li><i class="fas fa-check"></i> New income apps</li>
                        </ul>
                        <button>SignUp for free</button>
                        </div>
                    </div>

                    <div className='DetailBbox' >
                        <h3>Business</h3>
                        <p>Have a go and test your  superpowers</p>
                        <p className='price'><sup>$</sup>16</p>
                        <div>
                        <ul>
                            <li><i class="fas fa-check"></i> 2 User</li>
                            <li><i class="fas fa-check"></i> 2 User</li>
                            <li><i class="fas fa-check"></i> Public Share & Comments</li>
                            <li><i class="fas fa-check"></i> Chat Support </li>
                            <li><i class="fas fa-check"></i> New income apps</li>
                        </ul>
                        <button>SignUp for free</button>
                        </div>
                    </div>

                  </div>
              </div>

            

          </div>
      </div>
    </div>
  </section>
  )
}

export default Chooseplan