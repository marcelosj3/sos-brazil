import { Routes as RoutesSwitch, Route } from "react-router";

import { PrivateRoute } from "./PrivateRoute";

import { Home } from "../pages/home";
import { Register } from "../pages/register";
import { Login } from "../pages/login";
import { Partners } from "../pages/partners";
import { DonationPage } from "../pages/donation";

export const Routes = () => (
  <RoutesSwitch>
    <Route path="/" element={<Home />} />
    <Route path="/register" element={<Register />} />
    <Route path="/login" element={<Login />} />
    <Route path="/partners" element={<Partners />} />
    <Route path="/donation" element={<DonationPage />} />
  </RoutesSwitch>
);
