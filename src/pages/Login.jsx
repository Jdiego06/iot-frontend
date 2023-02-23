import React, { useState } from "react";
import axios from "axios";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { LoadingButton } from "@mui/lab";
import {
  Grid,
  TextField,
  Box,
  InputAdornment,
  IconButton,
  Typography,
  Divider,
} from "@mui/material";

import LoginIcon from "@mui/icons-material/Login";
import logo from "../assets/logo_transparent.png";

import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

export default function Login() {
  const [values, setValues] = useState({
    email: "",
    pass: "",
    showPass: false,
  });

  const [loading, setLoading] = useState(false);

  const handlePassVisibility = () => {
    setValues({
      ...values,
      showPass: !values.showPass,
    });
  };

  const handleSubmit = (email, password) => {
    setLoading(true);

    const loginPayload = {
      email: email,
      password: password,
    };

    console.log(loginPayload);

    axios
      .post("https://iot-app.herokuapp.com/api/auth/login", loginPayload)
      .then((response) => {
        //get token from response
        const token = response.data.token;

        //set JWT token to local
        localStorage.setItem("token", token);

        //set token to axios common header
        // setAuthToken(token);

        //redirect user to home page
        window.location.href = "/";

        setLoading(false);

        toast.success("🦄 Wow so easy!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      })
      .catch(
        setLoading(false), (err) => console.log(err)
        );
  };

  return (
    <Grid height="100%" container>
      <Grid item xs={5} bgcolor="#E3E3E3">
        <Box
          height="100%"
          padding={"0 100px 0 100px"}
          display="flex"
          flexDirection={"column"}
          // alignItems="center"
          justifyContent={"center"}
        >
          <Typography variant="h3">Bienvenido</Typography>
          <Typography variant="subtitle2">
            Por favor ingrese sus credenciales
          </Typography>
          <Divider></Divider>
          <br />

          <TextField
            error={false}
            onChange={(e) => (values.email = e.target.value)}
            label="Correo Electrónico"
            type="email"
            name="email"
            margin="dense"
            variant="outlined"
            fullWidth
            helperText="Campo obligatorio"
            placeholder="Correo Electrónico"
          />

          <TextField
            error={false}
            label="Password"
            onChange={(e) => (values.pass = e.target.value)}
            type={values.showPass ? "text" : "password"}
            //name="password"
            margin="dense"
            fullWidth
            variant="outlined"
            helperText="Campo obligatorio"
            placeholder="Password"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={handlePassVisibility}
                    aria-label="toggle password visibility"
                    edge="end"
                  >
                    {values.showPass ? (
                      <VisibilityIcon />
                    ) : (
                      <VisibilityOffIcon />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <LoadingButton
            onClick={() => handleSubmit(values.email, values.pass)}
            size="large"
            endIcon={<LoginIcon />}
            loading={loading}
            loadingPosition="end"
            variant="contained"
            fullWidth
            disabled={!loading ? false : true}
          >
            <span>Ingresar</span>
          </LoadingButton>
        </Box>
        <ToastContainer />
      </Grid>

      <Grid
        item
        xs={7}
        style={{
          background: "linear-gradient(45deg, #041635 45%, #231d81)",
        }}
      >
        <Box
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          height={"100%"}
        >
          <Box>
            <img src={logo} alt="logo" loading="lazy" />
            {/* <Typography
              variant="h3"
              color={"#FFF"}
              fontWeight={"medium"}
              textAlign={"center"}
            >
              My IoT Crop
            </Typography> */}
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
