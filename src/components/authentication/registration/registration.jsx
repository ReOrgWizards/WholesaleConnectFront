import React from "react";
import { Link } from "react-router-dom";

const WCRegistration = () => {
  return (
    <div className="container">
      <div className="registration__contant">
        <form>
          <div className="row">
            <div className="col-12 reg__lbl__input">
              <label for="exampleInputEmail1" class="form-label">
                Title*
              </label>
              <select id="disabledSelect" class="form-select">
                <option>Mrs./Ms.</option>
                <option>Mr.</option>
              </select>
            </div>

            <div className="col-12 reg__lbl__input">
              <label for="exampleInputEmail1" class="form-label">
                Email Address*
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter your email"
              />
            </div>
            <div className="col-12 reg__lbl__input">
              <label for="exampleInputEmail1" class="form-label">
                First Name*
              </label>
              <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter your first name"
              />
            </div>
            <div className="col-12 reg__lbl__input">
              <label for="exampleInputEmail1" className="form-label">
                Last Name*
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter your last name"
              />
            </div>
            <div class="col-12 reg__lbl__input">
              <label for="exampleInputEmail1" class="form-label">
                Title*
              </label>
              <div className="input-group number__dropdown">
              <span className="input-group-text" id="basic-addon1">
                <select id="disabledSelect" class="form-select">
                  <option>+ 977</option>
                  <option>+ 908</option>
                </select>
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your phone.no"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
            </div>

            <div className="col-12 reg__lbl__input">
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
            <p className="pass__word__criteria ">
              Your password must contain at least 8 characters, including one
              uppercase, one lowercase, one number, and one special character.
            </p>
            <p className="reg__agree">
              Account creation signifies agreement to our
              <Link to="#"> Terms </Link> &<Link to="#"> Privacy Policy.</Link>
            </p>
            <div className="registration__btn">
              <button>Registration</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default WCRegistration;
