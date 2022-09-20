import React, { useEffect, useState, lazy, Suspense } from "react";
import { useParams } from "react-router-dom";

const Loader = lazy(() => import("../components/Loader/Loader"));
const Card = lazy(() => import("../components/Card/Card"));

import { getDogs } from "../api";

import { useSelector, useDispatch } from "react-redux";

const Category = () => {
  const dispatch = useDispatch();
  const { breed } = useParams();
  const [loading, setLoading] = useState(false);
  const dogs = useSelector((state) => state.dogs);

  useEffect(() => {
    if (!dogs.length) {
      setLoading(true);
      getDogs(breed.toLowerCase()).then((data) => {
        dispatch({ type: "populate/dogs", payload: data });
        setLoading(false);
      });
    }
  }, []);

  return (
    <div className="centered">
      <h1>{breed}</h1>
      <Suspense fallback="Loading component...">
        {loading ? (
          <Loader />
        ) : (
          <section className="cards">
            {dogs.map((dog) => (
              <Card
                url={`/${dog.name?.toLowerCase()}`}
                header={dog.name}
                image={dog.image}
              />
            ))}
          </section>
        )}
      </Suspense>
    </div>
  );
};

export default Category;
