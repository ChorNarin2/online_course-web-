import { Home } from '../pages/Home'; // Named import
import { Login } from '../pages/auth/login'; // Named import
import Dashboard from '../pages/dashborad/index.tsx';

export const appRoutes = [
  {
    path: '/',
    element: <Home />, 
  },
  {
    path: '/auth/login',
    element: <Login />, 
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
  }
];
