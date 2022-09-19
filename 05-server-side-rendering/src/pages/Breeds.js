import React, { useEffect, useState } from "react";
import { getBreeds } from "../api";

import Card from "../components/Card/Card";
import Loader from "../components/Loader/Loader";

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
      {loading ? (
        <Loader />
      ) : (
        <section className="cards">
          {breeds.map((breed) => (
            <Card key={breed} url={`/dogs/${breed}`} header={breed} />
          ))}
        </section>
      )}
    </div>
  );
};

export default Home;
