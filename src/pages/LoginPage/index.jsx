import React from "react";
import './index.css';
import { LoginForm } from "../../components";

function Login() {
  return (
    <div className="loginContainer">
        <img
          width={130}
          src="https://imgs.search.brave.com/JeoPWN1ioE26YmEwMsGByYklCD4VPPGdI9pOVPqICNg/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/cG5na2V5LmNvbS9w/bmcvZnVsbC8yMDgt/MjA4OTEzNF9yY2Nn/LWxvZ28tcmVkZWVt/ZWQtY2hyaXN0aWFu/LWNodXJjaC1sb2dv/LnBuZw"
          alt=""
        />
        <h2 className="loginHeader">User Login</h2>
      <LoginForm />
      <p className="rccgMotto">
        “Jesus Christ the same yesterday, and today, and forever” - Hebrews 13:8
      </p>
    </div>
  );
}

export default Login;
