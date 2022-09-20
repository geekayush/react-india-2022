import React, { useState, useRef, useCallback } from "react";
import styled from "styled-components";
import debounce from "lodash/debounce";

const CarouselSlider = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-flow: column nowrap;
`;

const CarouselSlides = styled.div`
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
  display: flex;
  overflow-x: auto;
  flex: none;
  width: 100%;
  scrollbar-width: none;
  overflow-y: hidden;
  position: relative;
  width: 100%;
  flex-flow: row nowrap;
  padding: 0 12px;
`;

const Spacer = styled.div`
  padding-left: 12px;
  scroll-snap-stop: always;
`;

const Slide = styled.div`
  text-align: center;
  display: grid;
  scroll-snap-align: center;
  flex: none;
  scroll-snap-stop: always;
  margin: 0 8px;
  width: calc(calc(100vw - 72px) + 40px);
`;

const Banner = styled.img`
  border-radius: 4px;
  height: 316px;
`;

const DotsContainer = styled.div`
  width: calc(calc(100vw - 72px) + 40px);
  margin-left: 4px;
  margin-right: 4px;
  justify-content: center;
  overflow: hidden;
  position: relative;
  bottom: 8px;
  width: 100%;
`;

const DotsScrollableContainer = styled.div`
  transition: transform 0.5s ease;
  display: flex;
`;

const Dot = styled.span`
  height: 4px;
  width: 4px;
  margin: 0 2px;
  background-color: #a9a9a9;
  border-radius: 50%;
  display: inline-block;
  flex-shrink: 0;
  transition: width 0.3s ease;
`;

const ActiveDot = styled.span`
  height: 4px;
  width: 4px;
  margin: 0 2px;
  background-color: #3b3b3b;
  border-radius: 50%;
  display: inline-block;
  flex-shrink: 0;
  transition: width 0.3s ease;
`;

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
    <CarouselSlider>
      <CarouselSlides ref={imageSliderRef} onScroll={debouncedChangeDots}>
        {images?.map((image, index) => {
          return (
            <React.Fragment key={index}>
              {index === 0 && <Spacer />}
              <Slide>
                <Banner src={image} alt="animal thumbnail" />
              </Slide>
              {index === images.length - 1 && <Spacer />}
            </React.Fragment>
          );
        })}
      </CarouselSlides>
      {images?.length > 1 && (
        <DotsContainer>
          <DotsScrollableContainer>
            {images?.map((el, index) => {
              return (
                <React.Fragment key={index}>
                  {index === activeDot ? <ActiveDot /> : <Dot />}
                </React.Fragment>
              );
            })}
          </DotsScrollableContainer>
        </DotsContainer>
      )}
    </CarouselSlider>
  );
}

export default Carousel;
