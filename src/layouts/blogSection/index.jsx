import WCTitle from "../../components/TItle/TItle";
import WCBlogCard from "../../components/cards/blogCard";
import PropTypes from "prop-types";
import WCSliderProvider from "../../components/slider/sliderProvider";
const WCBlogSection = ({ blogArr }) => {
  return (
    <div className="blog__section__wrapper">
      <WCTitle title="Blogs" />
      <WCSliderProvider>
        {blogArr?.map((item) => {
          return (
            <div className="col-6 col-md-6 col-lg-3" key={item.id}>
              <WCBlogCard data={item} />
            </div>
          );
        })}
      </WCSliderProvider>
    </div>
  );
};

WCBlogSection.propTypes = {
  blogArr: PropTypes.array,
};

export default WCBlogSection;
