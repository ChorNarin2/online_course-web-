import { Routes, Route } from 'react-router-dom';
import { appRoutes } from './routes';

export default function AppRoutes() {
  return (
    <Routes>
      {appRoutes.map((route, index) => (
        <Route key={index} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
}
