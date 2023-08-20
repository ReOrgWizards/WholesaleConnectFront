import { useState } from "react";
import WCLogin from "../../components/authentication/login/login";
import WCRegistration from "../../components/authentication/registration/registration";

const WCAuthLoginRegistration = () => {
  const [selected, setSelected] = useState(false);
  const btnClicked = () => {
    setSelected(!selected);
  };
  return (
    <div className="container login__register__container">
      <div className="btn__container">
        <button className="btn__one custom__btn" onClick={() => btnClicked()}>
          <span className={selected ? "btn__text__unselected" : "btn__text"}>
            I am new here
          </span>
          <div
            className={selected ? "triangle-down-unselected" : "triangle-down"}
          ></div>
        </button>
        <button className="btn__one custom__btn" onClick={btnClicked}>
          <span className={selected ? "btn__text" : "btn__text__unselected"}>
            Been here before
          </span>
          <div
            className={selected ? "triangle-down" : "triangle-down-unselected"}
          ></div>
        </button>
      </div>
      {selected ? <WCLogin /> : <WCRegistration />}
    </div>
  );
};

export default WCAuthLoginRegistration;
