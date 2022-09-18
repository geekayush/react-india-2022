import { useState } from "react";
// import css from "./Carousel.module.css"
import styled from 'styled-components';

const CarouselDiv = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 400px;
    margin-top: 8px;
    img {
        max-width: 4kill5%;
        max-height: 400px;
    }
`

const CarouselChildDiv = styled.div`
    width: 50%;
    img {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        display: inline-block;
        margin: 15px;
        cursor: pointer;
        border: 2px solid #333;
    }
`


const CarouselStyled = ({
  images = ["http://pets-images.dev-apis.com/pets/none.jpg"],
}) => {
  const [active, setActive] = useState(0);

  return (
    <CarouselDiv>
      <img src={images[active]} alt="animal" />
      <CarouselChildDiv>
        {images.map((photo, index) => (
          <img
            key={photo}
            src={photo}
            className={index === active ? "active" : ""}
            alt="animal thumbnail"
            onClick={() => setActive(index)}
            data-index={index}
          />
        ))}
      </CarouselChildDiv>
    </CarouselDiv>
  );
};

export default CarouselStyled;
