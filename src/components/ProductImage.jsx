import { useState } from "react";
import { imageData } from "./imageData";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { useMediaQuery } from "react-responsive";
import LightBox from "./LightBox";

const ProductImage = () => {
  const [products] = useState(imageData);
  const [value, setValue] = useState(0);
  const [slideIndex, setSlideIndex] = useState(1);
  const [showLightbox, setShowLightbox] = useState(false);
  const isSmallScreen = useMediaQuery({ maxWidth: 767 });

  const { mainImage } = products[value];

  const nextSlide = () => {
    if (slideIndex !== products.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === products.length) {
      setSlideIndex(1);
    }
  };
  const previousSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(products.length);
    }
  };

  return (
    <>
      {showLightbox && (
        <LightBox
          products={products}
          slideIndex={slideIndex}
          nextSlide={nextSlide}
          previousSlide={previousSlide}
          setShowLightbox={setShowLightbox}
        />
      )}
      <div className="mx-auto w-full ">
        {products.map((item, index) => (
          <div
            key={index}
            className={slideIndex === index + 1 ? "relative" : "hidden"}
          >
            <img
              src={isSmallScreen ? item.mainImage : mainImage}
              alt=""
              className="w-full rounded-2xl cursor-pointer"
              onClick={() => setShowLightbox(true)}
            />
            <div className="lg:hidden">
              <button
                className="bg-white rounded-full p-3 shadow absolute left-8 top-1/2 -translate-y-10"
                onClick={previousSlide}
              >
                <FaChevronLeft />
              </button>
              <button
                className="bg-white rounded-full p-3 shadow absolute right-8 top-1/2 -translate-y-10"
                onClick={nextSlide}
              >
                <FaChevronRight />
              </button>
            </div>
          </div>
        ))}
        <div className="hidden lg:flex items-center justify-between gap-5 flex-wrap mt-10 ">
          {products.map((item, index) => (
            <div
              key={item.id}
              className={`${
                index === value && "border-2 border-accent opacity-70"
              } border-2 overflow-hidden rounded-2xl`}
            >
              <img
                onClick={() => setValue(index)}
                src={item.thumbnail}
                alt=""
                className="w-24 cursor-pointer "
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductImage;
