import React, { useState } from "react";

const WCLogin = () => {
  const [formData, setFormData] = useState({
    emailPhone: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="container">
      <div className="login__content">
        <form>
          <div className="row">
            <div className="col-12 label__input__wrapper">
              <label htmlFor="emailPhone" className="form-label">
                Email*/Phone no*
              </label>
              <input
                type="text"
                className="form-control"
                id="emailPhone"
                name="emailPhone"
                value={formData.emailPhone}
                onChange={handleInputChange}
                placeholder="Enter your email or phone no"
              />
            </div>
            <div className="col-12 label__input__wrapper">
              <label htmlFor="password" className="form-label">
                Password*
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Enter your password"
              />
            </div>
          </div>
          <a href="#">
            <p>Forgot password?</p>
          </a>
          <div className="login__btn">
            <button type="submit">Log In</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default WCLogin;
