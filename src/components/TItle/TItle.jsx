import PropTypes from "prop-types";

const WCTitle = (props) => (
  <div className="title__container">
    <p>{props.title}</p>
  </div>
);

WCTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default WCTitle;
