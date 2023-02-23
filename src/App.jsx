import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import RouteGuard from "./components/RouteGuard";
import HomePage from "./pages/HomePage";
import { setAuthToken } from "./helpers/setAuthToken";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#041635",
      contrastText: "#fff",
    },
  },
});

function App() {
  const token = localStorage.getItem("token");
  if (token) {
    setAuthToken(token);
  }

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<RouteGuard></RouteGuard>}>
            <Route exact path="/" element={<HomePage />} />
          </Route>
          <Route path="/login" element={<Login></Login>} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
