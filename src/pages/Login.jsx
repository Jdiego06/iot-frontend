import React, { useState } from "react";
import axios from "axios";
import { setAuthToken } from "../helpers/setAuthToken";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { LoadingButton } from "@mui/lab";
import {
  Grid,
  TextField,
  Box,
  Card,
  CardContent,
  CardAction,
  FormControl,
  FormLabel,
  Select,
  InputLabel,
  MenuItem,
  InputAdornment,
  IconButton,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import LoginIcon from "@mui/icons-material/Login";
//import { bgcolor } from "@mui/system";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    colorButtom: {
      main: "#041635",
      contrastText: "#fff",
    },
  },
});

function Login() {
  const [loading, setLoading] = useState(false);

  const [values, setValues] = useState({
    email: "",
    pass: "",
    showPass: false,
  });

  const handlePassVisibility = () => {
    setValues({
      ...values,
      showPass: !values.showPass,
    });
  };

  const handleSubmit = (email, password) => {
    //reqres registered sample user
    const loginPayload = {
      email: email,
      password: password,
    };

    axios
      .post("https://iot-app.herokuapp.com/api/auth/login", loginPayload)
      .then((response) => {
        //get token from response
        const token = response.data.token;

        //set JWT token to local
        localStorage.setItem("token", token);

        //set token to axios common header
        setAuthToken(token);

        //redirect user to home page
        window.location.href = "/";
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="App">
      <header className="App-header">
        <Box my={2} mx="20%">
          <Card>
            <CardContent>
              <Grid
                container
                direction="column"
                spacing={2}
                justifyContent="center"
              >
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={12}
                  lg={8}
                  xl={12}
                  justifyContent="center"
                >
                  <TextField
                    error={false}
                    label="Correo Electrónico"
                    type="email"
                    name="email"
                    margin="dense"
                    fullWidth
                    variant="outlined"
                    helperText="Campo obligatorio"
                    placeholder="EMAIL ADDRESS"
                  />
                </Grid>

                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={12}
                  lg={8}
                  xl={12}
                  justifyContent="center"
                >
                  <TextField
                    error={false}
                    label="Password"
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
                              <VisibilityOffIcon />
                            ) : (
                              <VisibilityIcon />
                            )}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>

                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={12}
                  lg={8}
                  xl={12}
                  justifyContent="center"
                >
                  <Box
                    sx={{
                      "& > button": {
                        my: 2,
                      },
                    }}
                  >
                    <ThemeProvider theme={theme}>
                      <LoadingButton
                        //onClick={handleClick}
                        size="large"
                        endIcon={<LoginIcon />}
                        loading={loading}
                        loadingPosition="end"
                        variant="contained"
                        color="colorButtom"
                        fullWidth
                      >
                        <span>Ingresar</span>
                      </LoadingButton>
                    </ThemeProvider>
                  </Box>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Box>
      </header>
    </div>
  );
}

export default Login;
