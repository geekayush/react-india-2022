import React, { useEffect, useState, lazy, Suspense } from "react";
import { getBreeds } from "../api";

const Card = lazy(() => import("../components/Card/Card"));
const Loader = lazy(() => import("../components/Loader/Loader"));

import { useSelector, useDispatch } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const breeds = useSelector((state) => state.breeds);

  useEffect(() => {
    if (!breeds.length) {
      setLoading(true);
      getBreeds().then((data) => {
        dispatch({ type: "populate/breeds", payload: data });
        setLoading(false);
      });
    }
  }, []);

  return (
    <div className="centered">
      <h1>Breeds</h1>
      <Suspense fallback="Loading...">
        {loading ? (
          <Loader />
        ) : (
          <section className="cards">
            {breeds.map((breed) => (
              <Card key={breed} url={`/dogs/${breed}`} header={breed} />
            ))}
          </section>
        )}
      </Suspense>
    </div>
  );
};

export default Home;
