import React,{useState} from "react";
import { Link } from "react-router-dom";

const WCRegistration = () => {
  const [formData, setFormData] = useState({
    title: "Mrs./Ms.",
    email: "",
    firstName: "",
    lastName: "",
    countryCode: "+ 977",
    phoneNumber: "",
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
      <div className="registration__contant">
        <form>
          <div className="row">
            <div className="col-12 reg__lbl__input">
              <label className="form-label">Title*</label>
              <select
                name="title"
                className="form-select"
                value={formData.title}
                onChange={handleInputChange}
              >
                <option>Mrs./Ms.</option>
                <option>Mr.</option>
              </select>
            </div>
            <div className="col-12 reg__lbl__input">
              <label className="form-label">Email Address*</label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email"
              />
            </div>
            <div className="col-12 reg__lbl__input">
              <label className="form-label">First Name*</label>
              <input
                type="text"
                className="form-control"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                placeholder="Enter your first name"
              />
            </div>
            <div className="col-12 reg__lbl__input">
              <label className="form-label">Last Name*</label>
              <input
                type="text"
                className="form-control"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                placeholder="Enter your last name"
              />
            </div>
            <div className="col-12 reg__lbl__input">
              <label className="form-label">Phone Number*</label>
              <div className="input-group number__dropdown">
                <span className="input-group-text">
                  <select
                    name="countryCode"
                    className="form-select"
                    value={formData.countryCode}
                    onChange={handleInputChange}
                  >
                    <option>+ 977</option>
                    <option>+ 908</option>
                  </select>
                </span>
                <input
                  type="text"
                  className="form-control"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  placeholder="Enter your phone number"
                />
              </div>
            </div>
            <div className="col-12 reg__lbl__input">
              <label className="form-label">Password*</label>
              <input
                type="password"
                className="form-control"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Enter your password"
              />
            </div>
            <p className="pass__word__criteria">
              Your password must contain at least 8 characters, including one
              uppercase, one lowercase, one number, and one special character.
            </p>
            <p className="reg__agree">
              Account creation signifies agreement to our
              <Link to="#"> Terms </Link> &<Link to="#"> Privacy Policy.</Link>
            </p>
            <div className="registration__btn">
              <button type="submit">Registration</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default WCRegistration;
