import React from 'react';
import meetingimg from '../img/meeting.jpg';
import meetingimg2 from '../img/meeting2.jpg';


const Salescriptsection = () => {
  return (
    <section className="salescriptsection">
      <div className="container-fluid">
        <div className='salescriptbox commonPadding'>
            <div className="row">

                {/* === */}
                <div className="col-md-12">
                    <div className='detail' data-aos="flip-right" data-aos-duration="2000">
                        <h3>What is <span>SalesScript Pro?</span></h3>
                        <p>Skilline is a platform that allows educators to create online classes whereby they can store the course materials online; manage assignments, quizzes and exams; monitor due dates; grade results and provide students with feedback all in one place.</p>
                    </div>
                </div>

                {/* === */}

                <div className="col-lg-6">
                    <div className='imageHoverbox' data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
                    <div className="card">
			<img src={meetingimg}/>
			<div className="overlay">
				<h1 className="text-h1">For B2B SaaS</h1>
				
			</div>
		</div>
                    </div>
                </div>

                {/* === */}

                <div className="col-lg-6">
                    <div className='imageHoverbox' data-aos="fade-left"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
                    <div className="card">
			<img src={meetingimg2}/>
			<div className="overlay">
				<h1 className="text-h1">For Freelancers</h1>
				
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

export default Salescriptsection