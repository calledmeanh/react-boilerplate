import { REQUEST_URL_BASE } from "../constants";

const environmentDev = {
  production: false,
  constants: {
    /* ==========Base========= */
    api_domain: 'https://jsonplaceholder.typicode.com',
    server_domain: 'https://jsonplaceholder.typicode.com',
    base_url: REQUEST_URL_BASE,
    /* ==========Base========= */
  },
};

export default environmentDev;
