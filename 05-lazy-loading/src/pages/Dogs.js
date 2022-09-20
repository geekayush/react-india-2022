import { useEffect, useState, lazy, Suspense } from "react";
import { useParams } from "react-router-dom";

const Loader = lazy(() => import("../components/Loader/Loader"));
const Card = lazy(() => import("../components/Card/Card"));

import { getDogs } from "../api";

const Category = () => {
  const { breed } = useParams();
  const [loading, setLoading] = useState(true);
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    getDogs(breed.toLowerCase()).then((data) => {
      setDogs(data);
      setLoading(false);
    });
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
