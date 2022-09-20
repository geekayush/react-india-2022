import { useEffect, useState, lazy, Suspense } from "react";
import { getBreeds } from "../api";

const Card = lazy(() => import("../components/Card/Card"));
const Loader = lazy(() => import("../components/Loader/Loader"));

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
      <Suspense fallback="Loading component...">
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
