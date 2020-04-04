/* apps */
import ExampleContainer from '../app/containers/example.con';
import logo from '../assets/images/logo.png';
const routes = [
  {
    path: '/home',
    nameEn: 'Home',
    component: ExampleContainer,
    icons: [{ active: logo, inActive: logo }],
  },
  {
    path: '/about',
    nameEn: 'About',
    component: ExampleContainer,
    icons: [{ active: logo, inActive: logo }],
  },
  {
    path: '/policy',
    nameEn: 'Policy',
    component: ExampleContainer,
    icons: [{ active: logo, inActive: logo }],
  },
];

export default routes;
