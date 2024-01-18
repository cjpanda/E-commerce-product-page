import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import PropTypes from "prop-types";
import close from "../assets/icon-close.svg";

const LightBox = ({
  products,
  slideIndex,
  nextSlide,
  previousSlide,
  setShowLightbox,
}) => {
  return (
    <>
      <div className="bg-black bg-opacity-75 fixed top-0 left-0 right-0 bottom-0 z-50">
        {/* Close Button */}
        <button onClick={() => setShowLightbox(false)}>
          <img src={close} alt="" className="w-5 absolute top-5 right-5" />
        </button>

        <div className="flex items-center justify-center h-screen">
          {products.map((item, index) => (
            <div
              key={index}
              className={slideIndex === index + 1 ? "relative" : "hidden"}
            >
              <img
                src={item.mainImage}
                alt=""
                className="big-image lg:w-full rounded-2xl"
              />
              {/* Close Button */}
              <button onClick={() => setShowLightbox(false)}>
                <img
                  src={close}
                  alt=""
                  className="w-5 absolute top-10 right-5"
                />
              </button>
              <div className="">
                <button
                  className="bg-white rounded-full p-3 shadow absolute left-5 top-1/2 -translate-y-10"
                  onClick={previousSlide}
                >
                  <FaChevronLeft />
                </button>
                <button
                  className="bg-white rounded-full p-3 shadow absolute right-5 top-1/2 -translate-y-10"
                  onClick={nextSlide}
                >
                  <FaChevronRight />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
// Props Validation
LightBox.propTypes = {
  products: PropTypes.array.isRequired,
  slideIndex: PropTypes.number.isRequired,
  nextSlide: PropTypes.func.isRequired,
  previousSlide: PropTypes.func.isRequired,
  setShowLightbox: PropTypes.func.isRequired,
};

export default LightBox;
