import React, { Component, useEffect, useState } from "react";
import "../index.css";
import logo from "../Screen/Images/logo.png";
import axios from "axios";
import { connect } from "react-redux";
const LogoLogin = (prop) => {
  console.log("MyStoredata", prop);

  const [data, setdata] = useState({
    username: "",
    passowrd: "",
  });
  const OnChnageInput = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
  };
  const onSbmit = (e) => {
    const user = {
      Username: data.username,
      password: data.passowrd,
    };

    console.log("Input Data", user);
    axios
      .post("http://localhost:1663/api/Login/Get_Login", user)
      .then((res) => {
        console.log(res);
        if (res.data.flag === "Y") {
          prop.changeCustId(res.data.custid);
          alert("Welcome Prince!!");
        } else {
          alert("Sorry Please Enter Right data!!");
        }
      });
  };
  return (
    <>
      <div className="maindiv">
        <img src={logo} className="logoAv"></img>
        <h2>User login</h2>

        <div>
          <input
            type="text"
            className="inputbox"
            placeholder="Username"
            name="username"
            value={data.username}
            onChange={OnChnageInput}
          ></input>
        </div>
        <div>
          <input
            type="password"
            className="inputbox"
            placeholder="password"
            name="passowrd"
            value={data.passowrd}
            onChange={OnChnageInput}
          ></input>
        </div>
        <br />
        <div>
          <button type="submit" onClick={onSbmit} value="Login">
            Login
          </button>
        </div>

        <br></br>
        <div className="Forget">
          <h6>ForgetPassowrd?</h6>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (myLogindata) => {
  return {
    Custid: myLogindata.Custid,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeCustId: (custid) => {
      dispatch({ type: "Cust_ID", Customerid: custid });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LogoLogin);
