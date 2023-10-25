import React from "react";
import Header from "./Header";

const HeaderComponent = () => {
  return (
    <>
      <section className="bannerSection">
        <div class="mainBackgroundContainer">
          <div class="bg"></div>
        </div>
        <div className="container-fluid">
          <Header />
        </div>
      </section>
    </>
  );
};

export default HeaderComponent;
