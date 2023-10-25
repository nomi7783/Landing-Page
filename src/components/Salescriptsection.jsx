import React from "react";
import salesscriptimg1 from "../img/salescript-img1.png";
import salesscriptimg2 from "../img/salescript-img2.png";
import Imgbox from "./Imgbox";

const Salescriptsection = () => {
  return (
    <section className="salescriptsection">
      <div className="container-fluid">
        <div className="salescriptbox commonPadding">
          <div className="row">
            {/* === */}
            <div className="col-md-12">
              <div className="detail">
                <h3>
                  What is <span>SalesScript Pro?</span>
                </h3>
                <p>
                  Skilline is a platform that allows educators to create online
                  classes whereby they can store the course materials online;
                  manage assignments, quizzes and exams; monitor due dates;
                  grade results and provide students with feedback all in one
                  place.
                </p>
              </div>
            </div>

            {/* === */}

            <Imgbox src={salesscriptimg1} heading="FOR B2B SAAS"/>
            <Imgbox src={salesscriptimg2} heading="FOR FREELANCERS"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Salescriptsection;
