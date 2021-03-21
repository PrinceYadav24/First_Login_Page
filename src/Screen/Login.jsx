import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [allvalue, setallvalue] = useState({
    userName: "",
    password: "",
  });
  const [alldata, setalldata] = useState("");
  const onChnageInput = (e) => {
    setallvalue({ ...allvalue, [e.target.name]: e.target.value });
  };
  const onSubmit = () => {
    setalldata({ ...allvalue });
    const user = {
      Username: allvalue.userName,
      password: allvalue.password,
    }

    console.log("Input Data", user);
    axios
      .post("http://localhost:1663/api/Login/Get_Login", user)
      .then((res) => {
        console.log(res);
        if (res.data.flag === "Y") {
          alert("Welcome Prince!!");
        } else {
          alert("Sorry Please Enter Right data!!");
        }
      });
  };
  return (
    <div className="maindiv">
      <div className="loginDiv">
        <h3>Sign In</h3>
        <input
          type="text"
          placeholder="Enter Username"
          onChange={onChnageInput}
          value={allvalue.userName}
          name="userName"
        />
        <br />
        <input
          type="text"
          placeholder="Enter Password"
          onChange={onChnageInput}
          name="password"
          value={allvalue.password}
        />
        <br />
        <button type="submit" onClick={onSubmit}>
          Click Me
        </button>
        <p>
          hello,{alldata.userName}
          {alldata.password}
        </p>
      </div>
    </div>
  );
};

export default Login;
