import React, { useState, useRef, useCallback } from "react";
import * as _ from "lodash";
import Card from "../Card/Card";

function CardCarousel({ dogs }) {
  /* Slider Logic Starts here */
  const [activeDot, setActiveDot] = useState(0);
  const dogSliderRef = useRef(null);

  const handleScroll = () => {
    const scrolledItem = parseInt(
      (parseInt(dogSliderRef.current.scrollWidth) -
        parseInt(dogSliderRef.current.scrollLeft)) /
        (parseInt(dogSliderRef.current.clientWidth) - 24)
    );
    setActiveDot(dogs.length - scrolledItem);
  };

  const debouncedChangeDots = useCallback(_.debounce(handleScroll, 10), []);
  /* Slider Logic Ends here */

  return (
    <div className="slider">
      <div
        className="container-fluid slides x mandatoryScrollSnapping"
        ref={dogSliderRef}
        onScroll={debouncedChangeDots}
      >
        {dogs.map((dog, index) => {
          return (
            <React.Fragment key={index}>
              {index === 0 && <div className="spacer" />}
              <div className="col-6 marginBoth-8 slide">
                <Card
                    key={dog.id}
                    url={`/${dog.name?.toLowerCase()}`}
                    header={dog.name}
                    image={dog.image}
                    imgHeight={200}
                    description={`${dog.name} is a friendly ${dog.size?.toLowerCase() || 'small'} sized ${dog.gender?.toLowerCase() || 'female'} ${dog.age?.toLowerCase() || 'young'} dog.`}
                    dog={dog.dog}
                />
              </div>
              {index === dogs.length - 1 && <div className="spacer" />}
            </React.Fragment>
          );
        })}
      </div>
      {dogs?.length > 1 && (
        <div className="col-6 dotsContainer">
          <div className="flex dotsScrollableContainer">
            {dogs.map((el, index) => {
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

export default CardCarousel;


