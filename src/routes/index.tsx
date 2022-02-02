import { Routes as RoutesSwitch, Route } from "react-router";

import { PrivateRoute } from "./PrivateRoute";

import { Home } from "../pages/home";
import { Register } from "../pages/register";
import { Login } from "../pages/login";
import { User } from "../pages/user";

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
  </RoutesSwitch>
);
