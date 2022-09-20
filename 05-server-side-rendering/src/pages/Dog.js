import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Loader from "../components/Loader/Loader";
import Carousel from "../components/Carousel/Carousel";

import CardCarousel from "../components/CardCarousel/CardCarousel";
import ContentPageTitle from "../components/ContentPageTitle/ContentPageTitle";

// import css from "./Dog.module.css";

import { getDog, getDogs } from "../api";
import { useDispatch, useSelector } from "react-redux";

const Product = () => {
  const dispatch = useDispatch()
  const { name } = useParams();
  const [loading, setLoading] = useState(false);
  const dog = useSelector((state) => state.dog);
  const relatedDogs = useSelector((state) => state.dogs);

  useEffect(() => {
    if (!dog.name) {
      setLoading(true);
      getDog(name.toLowerCase()).then((data) => {
        dispatch({ type: "populate/dog", payload: data });
        if (data.breed) {
          getDogs(data?.breed?.toLowerCase()).then((resp) => {
            dispatch({ type: "populate/dogs", payload: resp });
            setLoading(false);
          });
        } else {
          setLoading(false);
        }
      });
    }
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="details">
          <Carousel images={dog.images} />
          <div>
            <ContentPageTitle dog={dog} />
            <p className="container-fluid col-6">{dog.description}</p>
          </div>
          {relatedDogs && <CardCarousel dogs={relatedDogs} />}
        </div>
      )}
    </>
  );
};

export default Product;
