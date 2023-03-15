import React, { useState } from "react";
import axios from "axios";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import Logo from "../assets/logo.svg";
import { LoadingButton } from "@mui/lab";
import {
  getAuthenticatedUser,
  setAuthenticatedUser,
} from "../services/AuthService";
import { Navigate } from "react-router-dom";
import {
  Grid,
  TextField,
  Box,
  InputAdornment,
  IconButton,
  Typography,
  Divider,
  useTheme,
} from "@mui/material";

export default function Login() {
  const theme = useTheme();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setPasswordError(false);

    const loginPayload = {
      email: email,
      password: password,
    };

    try {
      const response = await axios.post(
        "https://iot-app.herokuapp.com/api/auth/login",
        loginPayload
      );

      const user = response.data;
      setAuthenticatedUser(user);
    } catch (e) {
      setPasswordError(true);
    } finally {
      setLoading(false);
    }
  };

  if (getAuthenticatedUser()) {
    return <Navigate to="/"></Navigate>;
  }

  return (
    <Grid height="100%" container>
      <Grid item xs={7}>
        <form onSubmit={handleSubmit} style={{ height: "100%" }}>
          <Box
            height="100%"
            padding={"0 25% 0 25%"}
            display="flex"
            flexDirection={"column"}
            justifyContent={"center"}
          >
            <Typography variant="h3">Bienvenido</Typography>
            <Typography variant="subtitle2">
              Por favor ingrese sus credenciales
            </Typography>
            <Divider></Divider>
            <br />

            <TextField
              required
              onChange={(e) => setEmail(e.target.value)}
              label="Correo Electrónico"
              type="email"
              name="email"
              margin="dense"
              variant="outlined"
              placeholder="Correo Electrónico"
            />

            <TextField
              required
              onChange={(e) => setPassword(e.target.value)}
              label="Contraseña"
              type={showPassword ? "text" : "password"}
              margin="dense"
              variant="outlined"
              placeholder="Contraseña"
              error={passwordError}
              helperText={passwordError ? "Contraseña incorrecta" : ""}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword(!showPassword)}
                      aria-label="toggle password visibility"
                      edge="end"
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            <LoadingButton
              type="submit"
              sx={{ marginTop: "20px" }}
              size="large"
              loading={loading}
              variant="contained"
              fullWidth
              disabled={loading ? true : false}
            >
              Ingresar
            </LoadingButton>
          </Box>
        </form>
      </Grid>

      <Grid item xs={5} bgcolor={theme.palette.primary.main}>
        <Box
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          height={"100%"}
        >
          <img src={Logo} alt="" width={"30%"} />
        </Box>
      </Grid>
    </Grid>
  );
}
