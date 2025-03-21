import React from "react";
import { useState } from "react";
import "./LoginPop.css";

function LoginPop() {
  const [CurrState, SetCurrState] = useState("Login");

  return (
    <div className="login-popup">
      <form className="login-popup-container">
        <div className="login-popup-inputs">
          <h1>{CurrState}</h1>
          <button className="back-btn" type="button">
            X
          </button>
          {CurrState === "Login" ? (
            <></>
          ) : (
            <input type="text" name="Name" placeholder="Name" required />
          )}
          <br />
          <input type="email" name="Email" placeholder="Email" required />
          <br />
          <input
            type="password"
            name="Password"
            placeholder="Password"
            required
          />
        </div>
        <button>
          {CurrState === "Sign up" ? "create new account" : "Login"}
        </button>
        <div className="login-popup-condition">
          <input type="checkbox" name="" id="" />
          <p>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
        <p>
          Create a new account?
          <span id="sign-up" onClick={() => SetCurrState("Sign up")}>
            click Here
          </span>
        </p>
        {CurrState === "Login" ? (
          <></>
        ) : (
          <p>
            Already have an account?{" "}
            <span id="login" onClick={() => SetCurrState("Login")}>
              Login here
            </span>
          </p>
        )}
      </form>
    </div>
  );
}

export default LoginPop;
