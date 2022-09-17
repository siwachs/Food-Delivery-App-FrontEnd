import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

//Env Variables
import { projectId, dataset, apiVersion } from "@env";

// lib/config.js
export const config = {
  projectId: projectId,
  dataset: dataset,
  useCdn: true,
  apiVersion: apiVersion,
};

const client = sanityClient(config);

//Image Builder
export const urlFor = (source) => imageUrlBuilder(config).image(source);

//ADD exception for localhost CORS

export default client;
