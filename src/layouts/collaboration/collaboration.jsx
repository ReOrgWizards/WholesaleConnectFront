import WCTitle from "../../components/TItle/TItle";
import PropTypes from "prop-types";

const WCCollaborationSection = ({ categoryArr }) => {
  return (
    <div className="container">
      <div className="collaboration__container">
        <WCTitle title="Brand Collaboration" />
        <div className="collaboration__wrapper">
          {categoryArr.map((category, id) => (
            <img key={id} src={category.brand_img} alt={category.brand_name} />
          ))}
        </div>
      </div>
    </div>
  );
};

WCCollaborationSection.propTypes = {
  categoryArr: PropTypes.arrayOf(PropTypes.shape),
};

export default WCCollaborationSection;
