import Home from 'pages/Home';
import Login from 'pages/Auth/Login';
import Register from 'pages/Auth/Register';
import {Route} from 'types/routing'
const defaultRoutes:Route[] = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path:'/auth',
    element:<Login/>
  },
  {
    path:'/auth/login',
    element:<Login/>
  },
  {
    path:'/auth/register',
    element:<Register/>
  }
];
export default defaultRoutes;