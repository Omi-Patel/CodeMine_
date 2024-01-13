// const contentful = require('contentful/contentful.node')
// import contentful from "contentful";
import { createClient } from "contentful";

const client = createClient({
  accessToken: import.meta.env.VITE_ACCESS_TOKEN ,
  space: import.meta.env.VITE_SPACE_ID,
});

export default client;
