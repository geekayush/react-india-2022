const breeds = require("./breeds.json");

const akita = require("./dogs/akita.json");
const aussiedoodle = require("./dogs/aussiedoodle.json");
const beagle = require("./dogs/beagle.json");
const bernedoodle = require("./dogs/bernedoodle.json");
const bloodhound = require("./dogs/bloodhound.json");
const cockapoo = require("./dogs/cockapoo.json");

const marley = require("./dog/marley.json");
const iris = require("./dog/iris.json");

const getBreeds = (req, res) => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(breeds), 100);
    }).then((response) => res.send(response.data));
};

const getDogs = (req, res) => {
  const breed = req.url.substring(1)
    return new Promise((resolve) => {
        console.log("this was hit!")
        setTimeout(() => resolve(giveBreed(breed)), 100);
    }).then((response) => res.send(response.data));
};

const getDog = (req, res) => {
  console.log("Lllllllllllll", req.url, req.url.substring(1));
  const name = req.url.substring(1);
    new Promise((resolve) => {
        setTimeout(() => resolve(giveDog(name)), 100);
    }).then((response) => 
      {console.log(response, "????????????????")
      res.send(response.data)  } 
    );
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
  console.log("ffffffffff", name, typeof name);
    if (name[0] <= "n") return marley;
    else return iris;
};

module.exports = { getBreeds, getDogs, getDog };
