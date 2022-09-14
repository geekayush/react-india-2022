import { request } from "../util/request";

const basePath = process.env.NODE_ENV !== 'production' ? 'http://localhost:3000' : ''

export const getBreeds = () => {
  return request.get(`${basePath}/api/breeds`);
};

export const getDogs = (breed) => {
  return request.get(`${basePath}/api/dogs/${breed}`);
};

export const getDog = (name) => {
  return request.get(`${basePath}/api/dog/${name}`);
};