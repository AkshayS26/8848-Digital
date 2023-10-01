import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import LoginPage from "./LoginPage";
import ListingPage from "./ListingPage";
import UserPage from "./UserPage";

const App = () => {
  const [accessToken, setAccessToken] = useState("");

  const handleLogin = (token) => {
    setAccessToken(token);
  };

  function PageNotFound() {
    return (
      <div>
        <p>404 Page not found</p>
      </div>
    );
  }

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<LoginPage className="max-h-full" onLogin={handleLogin} />}
        />
        <Route
          path="/users"
          element={<ListingPage accessToken={accessToken} />}
        />
        <Route
          path="/user/:userName"
          element={<UserPage accessToken={accessToken} userName="" />} // Set a default value or fetch it based on your requirement
        />
        <Route path="/404" element={<PageNotFound />} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
    </Router>
  );
};

export default App;
