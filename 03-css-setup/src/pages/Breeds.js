import { useEffect, useState } from "react";
import { getBreeds } from "../api";

import Card from "../components/Card/Card";
import Loader from "../components/Loader/Loader";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [breeds, setBreeds] = useState([]);

  useEffect(() => {
    getBreeds().then((data) => {
      setBreeds(data);
      setLoading(false);
    });
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
