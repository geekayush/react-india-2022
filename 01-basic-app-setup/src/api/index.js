import breeds from "./breeds.json";

import akita from "./dogs/akita.json";
import aussiedoodle from "./dogs/aussiedoodle.json";
import beagle from "./dogs/beagle.json";
import bernedoodle from "./dogs/bernedoodle.json";
import bloodhound from "./dogs/bloodhound.json";
import cockapoo from "./dogs/cockapoo.json";

import marley from "./dog/marley.json";
import iris from "./dog/iris.json";

export const getBreeds = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(breeds), 1000);
  }).then((response) => response.data);
};

export const getDogs = (breed) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(giveBreed(breed)), 1000);
  }).then((response) => response.data);
};

export const getDog = (name) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(giveDog(name)), 1000);
  }).then((response) => response.data);
};

const giveBreed = (breed) => {
  switch (breed) {
    case "akita":
      return akita;
    case "aussiedoodle":
      return aussiedoodle;
    case "beagle":
      return beagle;
    case "bernedoodle":
      return bernedoodle;
    case "bloodhound":
      return bloodhound;
    case "cockapoo":
      return cockapoo;
    default:
      return akita;
  }
};

const giveDog = (name) => {
  if (name.at(0) <= "n") return marley;
  else return iris;
};
