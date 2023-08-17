import PropTypes from "prop-types";

const WCBlogCard = ({ data }) => {
  const { title, img, description } = data;
  return (
    <div className="blog__card__wrapper">
      <div className="blog__img__wrapper">
        <img src={img} alt="" />
      </div>
      <div className="blog__content__wrapper">
        <p className="blog__title">{title}</p>
        <div className="blog__description__wrapper">
          <p className="blog__description">{description.substring(0,38)}..</p>
          <div className="blog__btn">
            <button> Read</button>
          </div>
        </div>
      </div>
    </div>
  );
};

WCBlogCard.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    img: PropTypes.string,
    day: PropTypes.string,
    month: PropTypes.string,
  }).isRequired,
};

export default WCBlogCard;
