import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Loader from "../components/Loader/Loader";
import Card from "../components/Card/Card";

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
      {loading ? (
        <Loader />
      ) : (
        <section className="cards">
          {dogs.map((dog) => (
            <Card
              url={`/${dog.name?.toLowerCase()}`}
              header={dog.name}
              description={dog.description || "No dog description present!"}
              image={dog.image}
            />
          ))}
        </section>
      )}
    </div>
  );
};

export default Category;
