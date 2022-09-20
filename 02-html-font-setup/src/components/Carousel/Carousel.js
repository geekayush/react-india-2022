import React, { useState, useRef, useCallback } from "react";
import debounce from "lodash/debounce";

function Carousel({ images }) {
  /* Slider Logic Starts here */
  const [activeDot, setActiveDot] = useState(0);
  const imageSliderRef = useRef(null);

  const handleScroll = () => {
    const scrolledItem = parseInt(
      (parseInt(imageSliderRef.current.scrollWidth) -
        parseInt(imageSliderRef.current.scrollLeft)) /
        (parseInt(imageSliderRef.current.clientWidth) - 24)
    );
    setActiveDot(images.length - scrolledItem);
  };

  const debouncedChangeDots = useCallback(debounce(handleScroll, 10), []);
  /* Slider Logic Ends here */

  return (
    <div className="slider">
      <div
        class="container-fluid"
        className=" slides x mandatoryScrollSnapping"
        ref={imageSliderRef}
        onScroll={debouncedChangeDots}
      >
        {images?.map((image, index) => {
          return (
            <React.Fragment key={index}>
              {index === 0 && <div className="spacer" />}
              <div className="col-6 marginBoth-8 slide">
                <img src={image} alt="animal thumbnail" className="bannerImg" />
              </div>
              {index === images.length - 1 && <div className="spacer" />}
            </React.Fragment>
          );
        })}
      </div>
      {images?.length > 1 && (
        <div className="col-6 dotsContainer">
          <div className="flex dotsScrollableContainer">
            {images?.map((el, index) => {
              return (
                <span
                  key={index}
                  className={`dot ${index === activeDot ? "activeDot" : ""}`}
                />
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default Carousel;
