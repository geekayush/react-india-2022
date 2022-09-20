import { request } from "../util/request";

let hasPort = "";
if (typeof window !== "undefined") hasPort = window.location.port;

const basePath = hasPort ? "http://localhost:3001" : "";

export const getBreeds = () => {
  return request.get(`${basePath}/api/breeds`);
};

export const getDogs = (breed) => {
  return request.get(`${basePath}/api/dogs/${breed}`);
};

export const getDog = (name) => {
  return request.get(`${basePath}/api/dog/${name}`);
};
