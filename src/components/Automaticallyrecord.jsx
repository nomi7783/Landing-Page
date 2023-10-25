import React from "react";
import Automaticallybox from "./Automaticallybox";
import Automaticallyboxflip from "./Automaticallyboxflip";

const Automaticallyrecord = () => {
  return (
    <section className="automaticallyRecordSection">
      <div className="container-fluid">
        <Automaticallybox />
        <Automaticallyboxflip margin="marginLeft"/>
        <Automaticallybox />
        <Automaticallyboxflip  margin="marginLeft"/>
      </div>
    </section>
  );
};

export default Automaticallyrecord;
