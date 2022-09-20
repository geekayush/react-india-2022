import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Loader from "../components/Loader/Loader";

import CarouselStyled from "../components/Carousel/Carousel.styled";
import CardCarousel from "../components/CardCarousel/CardCarousel";
import ContentPageTitle from "../components/ContentPageTitle/ContentPageTitle";

import styled from "styled-components"

import { getDog, getDogs } from "../api";

const DetailStyled = styled.div`
    display: block;
`

const Product = () => {
  const { name } = useParams();
  const [loading, setLoading] = useState(true);
  const [dog, setDog] = useState({
    images: [],
    name: "",
    animal: "",
    breed: "",
    city: "",
    state: "",
    description: "",
  });

  const [relatedDogs, setDogs] = useState([]);

  useEffect(() => {
    getDog(name.toLowerCase()).then((data) => {
      setDog({
        images: data.photos,
        name: data.name,
        animal: data.animal,
        breed: data.breed,
        city: data.city,
        state: data.state,
        description: data.description,
      });
      if (data.breed) {
        getDogs(data?.breed?.toLowerCase()).then((resp) => {
          setDogs(resp);
          setLoading(false);
        });
      } else {
        setLoading(false);
      }
    });
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <DetailStyled>
          <CarouselStyled images={dog.images} />
          <div>
            <ContentPageTitle dog={dog} />
            <p className="container-fluid col-6">{dog.description}</p>
          </div>
          {relatedDogs && <CardCarousel dogs={relatedDogs} />}
        </DetailStyled>
      )}
    </>
  );
};

export default Product;
