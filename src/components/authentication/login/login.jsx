import React from "react";

const WCLogin = () => {
  return (
    <div className="container">
      <div className="login__content">
        <form>
          <div className="row">
            <div className="col-12 label__input__wrapper">
              <label for="exampleInputEmail1" class="form-label">
                Email*/Phone no*
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter your email/phone no"
              />
            </div>
            <div className="col-12 label__input__wrapper">
              <label for="exampleInputEmail1" class="form-label">
                Password*
              </label>
              <input
                type="password"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter your password"
              />
            </div>
          </div>
          <a href="#">
            <p>Forgot password?</p>
          </a>
          <div className="login__btn">
          <button type="button">Log In</button>
        </div>
        </form>
        
      </div>
    </div>
  );
};

export default WCLogin;
