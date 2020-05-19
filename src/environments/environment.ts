/* libs */
/* apps */
import environmentDev from './environment.dev';
import environmentProd from './environment.prod';

const getEnvironment = () => {
  let env;
  switch (process.env.NODE_ENV) {
    case 'development':
      env = { ...environmentDev };
      return env;
    case 'production':
      env = { ...environmentProd };
      return env;
    default:
      return {
        production: null,
        constants: {
          api_domain: '',
          server_domain: '',
          base_url: '',
        },
      };
  }
};

export default getEnvironment;
