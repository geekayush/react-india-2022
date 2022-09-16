import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Loader from "../components/Loader/Loader";
import CarouselStyled from "../components/Carousel/Carousel.styled";

import { getDog } from "../api";

const Product = () => {
  const { name } = useParams();
  const [loading, setLoading] = useState(true);
  const [dog, setDog] = useState({
    images: [],
    name: "",
    animal: "",
    breed: "",
    city: "",
    state: "",
    description: "",
  });

  useEffect(() => {
    getDog(name.toLowerCase()).then((data) => {
      setDog({
        images: data.photos,
        name: data.name,
        animal: data.animal,
        breed: data.breed,
        city: data.city,
        state: data.state,
        description: data.description,
      });
      setLoading(false);
    });
  }, []);

  return (
    <div className="centered">
      {loading ? (
        <Loader />
      ) : (
        <div className="details">
          <CarouselStyled images={dog.images} />
          <div>
            <h1>{dog.name}</h1>
            <h2>{`${dog.animal} — ${dog.breed} — ${dog.city}, ${dog.state}`}</h2>
            <button>Adopt {dog.name}</button>
            <p>{dog.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Product;
