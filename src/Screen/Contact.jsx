import React, { cloneElement } from "react";
import { connect } from "react-redux";

const Contact = (prop) => {
  return (
    <>
      <div className="maindiv">
        <h1>Hi</h1>
        <p>`Hi Customer $`{prop.Custid}`</p>
      </div>
    </>
  );
};

const mapStateToProps = (myLogindata) => {
  return {
    Custid: myLogindata.Custid,
  };
};
export default connect(mapStateToProps)(Contact);
