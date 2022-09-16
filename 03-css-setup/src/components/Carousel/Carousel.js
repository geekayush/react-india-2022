import { useState } from "react";
import css from "./Carousel.module.css"

const Carousel = ({
  images = ["http://pets-images.dev-apis.com/pets/none.jpg"],
}) => {
  const [active, setActive] = useState(0);

  return (
    <div className={css.carousel}>
      <img src={images[active]} alt="animal" />
      <div className={css['carousel-smaller']}>
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
      </div>
    </div>
  );
};

export default Carousel;
