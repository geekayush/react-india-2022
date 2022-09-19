import React, { useEffect, useState, lazy } from "react";
import { useParams } from "react-router-dom";

const Loader = lazy(() => import("../components/Loader/Loader"));
const Carousel = lazy(() => import("../components/Carousel/Carousel"));

import { getDog } from "../api";
import { useDispatch, useSelector } from "react-redux";

const Product = () => {
  const dispatch = useDispatch();
  const { name } = useParams();
  const [loading, setLoading] = useState(false);
  const dog = useSelector((state) => state.dog);

  useEffect(() => {
    if (!dog.name) {
      setLoading(true);
      getDog(name.toLowerCase()).then((data) => {
        dispatch({ type: "populate/dog", payload: data });
        setLoading(false);
      });
    }
  }, []);

  return (
    <div className="centered">
      <Suspense fallback="Loading...">
        {loading ? (
          <Loader />
        ) : (
          <div className="details">
            <Carousel images={dog.images} />
            <div>
              <h1>{dog.name}</h1>
              <h2>{`${dog.animal} — ${dog.breed} — ${dog.city}, ${dog.state}`}</h2>
              <button>Adopt {dog.name}</button>
              <p>{dog.description}</p>
            </div>
          </div>
        )}
      </Suspense>
    </div>
  );
};

export default Product;
