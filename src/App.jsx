import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import RouteGuard from "./components/RouteGuard";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { ProSidebarProvider } from "react-pro-sidebar";
import Page404 from "./pages/Page404";
import { PageLayout } from "./layouts/PageLayout";
import { CssBaseline } from "@mui/material";

const theme = createTheme({
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
      default: "#D3D3D3",
    },
  },
});

function App() {
  /*const token = localStorage.getItem("token");
  if (token) {
    setAuthToken(token);
  }*/

  return (
    <ThemeProvider theme={theme}>

      <CssBaseline></CssBaseline>
      <ProSidebarProvider>
        <Router>
          <Routes>
            {/* Combine Layout with RouteGuard */}
            <Route path="/" element={<RouteGuard></RouteGuard>}>
              <Route path="/" element={<PageLayout></PageLayout>}>
                <Route path="/users" element={<h1>Users</h1>}></Route>
                <Route path="/devices" element={<h1>Devices</h1>}></Route>
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
