import React from "react";

const Imgbox = (props) => {
    const{src , heading} = props;
  return (
    <div className="col-lg-6">
      <div className="imgbox">
        <img src={src} />
        <h5>{heading}</h5>
      </div>
    </div>
  );
};

export default Imgbox;
