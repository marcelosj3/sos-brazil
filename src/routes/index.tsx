import { Routes as RoutesSwitch, Route } from 'react-router';

import { PrivateRoute } from './PrivateRoute';

import { Home } from '../pages/home';

export const Routes = () => (
  <RoutesSwitch>
    <Route path="/" element={<Home />} />
  </RoutesSwitch>
);
