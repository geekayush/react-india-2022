import { useEffect, useState, lazy, Suspense } from "react";
import { useParams } from "react-router-dom";

const Loader = lazy(() => import("../components/Loader/Loader"));
const Carousel = lazy(() => import("../components/Carousel/Carousel"));

const CardCarousel = lazy(() =>
  import("../components/CardCarousel/CardCarousel")
);
const ContentPageTitle = lazy(() =>
  import("../components/ContentPageTitle/ContentPageTitle")
);

import css from "./Dog.module.css";

import { getDog, getDogs } from "../api";

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

  const [relatedDogs, setDogs] = useState([]);

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
      if (data.breed) {
        getDogs(data?.breed?.toLowerCase()).then((resp) => {
          setDogs(resp);
          setLoading(false);
        });
      } else {
        setLoading(false);
      }
    });
  }, []);

  return (
    <Suspense fallback="Loading component...">
      {loading ? (
        <Loader />
      ) : (
        <div className={css.details}>
          <Carousel images={dog.images} />
          <div>
            <ContentPageTitle dog={dog} />
            <p className="container-fluid col-6">{dog.description}</p>
          </div>
          {relatedDogs && <CardCarousel dogs={relatedDogs} />}
        </div>
      )}
    </Suspense>
  );
};

export default Product;
