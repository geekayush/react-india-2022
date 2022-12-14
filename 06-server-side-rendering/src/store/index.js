import { createStore } from "redux";
import rootReducer from "../reducers";

export const initialState = {
  breeds: [
    "Akita",
    "Aussiedoodle",
    "Beagle",
    "Bernedoodle",
    "Bloodhound",
    "Cockapoo",
  ],
  dogs: [
    {
      id: 56704134,
      age: "Young",
      gender: "Male",
      size: "Large",
      name: "Marley",
      image:
        "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/56704134/1/?width=248",
    },
    {
      id: 56703487,
      age: "Young",
      gender: "Female",
      size: "Large",
      name: "Santana",
      image:
        "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/56703487/1/?width=248",
    },
    {
      id: 56699306,
      age: "Young",
      gender: "Female",
      size: "Medium",
      name: "Samantha",
      image:
        "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/56699306/1/?width=248",
    },
    {
      id: 56696595,
      age: "Adult",
      gender: "Female",
      size: "Medium",
      name: "Cocoa",
      image:
        "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/56696595/1/?width=248",
    },
    {
      id: 56695263,
      age: "Adult",
      gender: "Female",
      size: "Medium",
      name: "Juno",
      image:
        "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/56695263/1/?width=248",
    },
    {
      id: 56694707,
      age: "Adult",
      gender: "Male",
      size: "Large",
      name: "Rick Ross",
      image:
        "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/56694707/1/?width=248",
    },
    {
      id: 56693465,
      age: "Adult",
      gender: "Male",
      size: "Extra Large",
      name: "Bart",
      image:
        "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/56693465/1/?width=248",
    },
    {
      id: 56692179,
      age: "Adult",
      gender: "Female",
      size: "Large",
      name: "Chena",
      image:
        "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/56692179/1/?width=248",
    },
    {
      id: 56688433,
      age: "Adult",
      gender: "Female",
      size: "Medium",
      name: "Sasha",
      image:
        "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/56688433/1/?width=248",
    },
    {
      id: 56686995,
      age: "Baby",
      gender: "Female",
      size: "Medium",
      name: "Honey",
      image:
        "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/56686995/1/?width=248",
    },
    {
      id: 56686949,
      age: "Young",
      gender: "Male",
      size: "Large",
      name: "Maguire",
      image:
        "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/56686949/1/?width=248",
    },
    {
      id: 56686932,
      age: "Young",
      gender: "Male",
      size: "Large",
      name: "Milo",
      image:
        "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/56686932/1/?width=248",
    },
    {
      id: 56683058,
      age: "Adult",
      gender: "Male",
      size: "Extra Large",
      name: "Yoshi",
      image:
        "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/56683058/1/?width=248",
    },
    {
      id: 56677061,
      age: "Adult",
      gender: "Male",
      size: "Large",
      name: "Constantine",
      image:
        "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/56677061/1/?width=248",
    },
    {
      id: 56677007,
      age: "Adult",
      gender: "Female",
      size: "Large",
      name: "Luna",
      image:
        "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/56677007/1/?width=248",
    },
  ],
  dog: {
    images: [
      "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/56704134/1/?width=248",
      "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/56704134/2/?width=248",
      "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/56704134/3/?width=248",
      "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/56704134/4/?width=248",
      "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/56704134/5/?width=248",
    ],
    name: "Marley",
    animal: "Dog",
    breed: "Akita",
    city: "Tracy",
    state: "CA",
    description:
      "This giant boy (about 85 pounds & 2 years old) is a sofy at heart. He takes treats so gently...",
  },
};

const enhancer =
  global.window &&
  global.window.__REDUX_DEVTOOLS_EXTENSION__ &&
  global.window.__REDUX_DEVTOOLS_EXTENSION__();

export default function configureStore(preloadedState = {}) {
  return createStore(rootReducer, preloadedState, enhancer);
}
