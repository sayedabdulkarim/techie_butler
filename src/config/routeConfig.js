import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import App from "../App";
//screens
import HomeScreen from "../screens/auth/HomeScreen";
import UserDetailsScreen from "../screens/auth/UserDetailsScreen";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomeScreen />} />
          <Route path="userdetails/:id" element={<UserDetailsScreen />} />
        </Route>
        <Route path="*" element={<h1>404 Component</h1>} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
