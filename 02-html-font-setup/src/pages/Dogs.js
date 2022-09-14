import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Loader from "../components/Loader/Loader";
import Card from "../components/Card/Card";

import { getDogs } from "../api";

const Category = () => {
  const { breed } = useParams();
  const [loading, setLoading] = useState(true);
  const [dogs, setDogs] = useState([]);

  const resolveAfter2Seconds = (x) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(x);
      }, x);
    });
  };

  const f1 = async () => {
      const x = await resolveAfter2Seconds(500);
      console.log(x); // 10
  };

  useEffect(async () => {
    getDogs(breed.toLowerCase()).then((data) => {
      setDogs(data);
      setLoading(false);
    });

    // setTimeout( () => {
    //   const x = await new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //       resolve()
    //     }, 100);
    //   })
    // }, 0);
    await setTimeout(() => {f1()}, 3000)

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
