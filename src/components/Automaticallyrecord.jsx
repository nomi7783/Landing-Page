import React from "react";
import Automaticallybox from "./Automaticallybox";
import Automaticallyboxflip from "./Automaticallyboxflip";

const Automaticallyrecord = () => {
  return (
    <section className="automaticallyRecordSection">
      <div className="container-fluid">
        <Automaticallybox />
        <Automaticallyboxflip />
        <Automaticallybox />
        <Automaticallyboxflip />
      </div>
    </section>
  );
};

export default Automaticallyrecord;
