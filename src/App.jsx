import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import RouteGuard from "./components/RouteGuard";
import { setAuthToken } from "./helpers/setAuthToken";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { ProSidebarProvider } from "react-pro-sidebar";
import Page404 from "./pages/Page404";
import { PageLayout } from "./layouts/PageLayout";
import { CssBaseline } from "@mui/material";
import Users from "./pages/Users";
import Dashboard from "./pages/Dashboard";
import Devices from "./pages/Devices";

import { Navigate } from "react-router-dom";

const theme = createTheme({
  typography: {
    subtitle1: {
      color: "#F2F2F2",
    },
  },

  palette: {
    primary: {
      light: "#36445D",
      main: "#041635",
      dark: "#020f25",
      contrastText: "#FFFFFF",
    },

    secondary: {
      light: "#83BAF9",
      main: "#64A9F8",
      dark: "#4676AD",
    },

    background: {
      default: "#FBFBFB",
    },
  },
});

function App() {
  //const token = localStorage.getItem("token");

  const token = localStorage.getItem("token");
  if (token) {
    setAuthToken(token);
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline></CssBaseline>
      <ProSidebarProvider>
        <Router>
          <Routes>
            {/* Combine Layout with RouteGuard */}
            <Route path="/" element={<RouteGuard></RouteGuard>}>
              <Route path="/" element={<PageLayout></PageLayout>}>
                <Route
                  path="/"
                  element={<Navigate to="dashboard"></Navigate>}
                ></Route>

                <Route
                  path="/dashboard"
                  element={<Dashboard></Dashboard>}
                ></Route>
                <Route path="/users" element={<Users></Users>}></Route>
                <Route path="/devices" element={<Devices></Devices>}></Route>
              </Route>
            </Route>

            <Route path="/login" element={<Login></Login>} />
            <Route path="*" element={<Page404></Page404>} />
          </Routes>
        </Router>
      </ProSidebarProvider>
    </ThemeProvider>
  );
}

export default App;
