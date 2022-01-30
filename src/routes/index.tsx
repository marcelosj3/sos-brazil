import { Routes as RoutesSwitch, Route } from "react-router";

import { PrivateRoute } from "./PrivateRoute";

import { Home } from "../pages/home";
import { Register } from "../pages/register";

export const Routes = () => (
  <RoutesSwitch>
    <Route path="/" element={<Home />} />
    <Route path="/register" element={<Register />} />
  </RoutesSwitch>
);
