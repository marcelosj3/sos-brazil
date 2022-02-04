import { Routes as RoutesSwitch, Route } from "react-router";

import { Home } from "../pages/home";
import { Register } from "../pages/register";
import { Login } from "../pages/login";
import { User } from "../pages/user";
import { Partners } from "../pages/partners";
import { DonationPage } from "../pages/donation";
import { Donachos } from "../pages/donachos";
import { PrivateRoute } from "./PrivateRoute";
import { Help } from "../pages/help";

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
    <Route path="/donation" element={<DonationPage />} />
    <Route path="/donachos" element={<Donachos />} />
    <Route path="/help" element={<Help />} />
  </RoutesSwitch>
);
