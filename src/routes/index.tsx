import { Routes as RoutesSwitch, Route } from "react-router";

import { Home } from "../pages/home";
import { Register } from "../pages/register";
import { Login } from "../pages/login";
import { User } from "../pages/user";
import { Partners } from "../pages/partners";
import { PrivateRoute } from "./PrivateRoute";

export const Routes = () => (
  <RoutesSwitch>
    <Route path="/" element={<Home />} />
    <Route path="/register" element={<Register />} />
    <Route path="/login" element={<Login />} />
    <Route
      path="/user/:id"
      element={
        <PrivateRoute>
          <User />
        </PrivateRoute>
      }
    />
    <Route path="/partners" element={<Partners />} />
  </RoutesSwitch>
);
