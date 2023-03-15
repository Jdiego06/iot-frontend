import { Visibility, VisibilityOff } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import {
  Divider,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export function AddUserForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    console.log("e");
  };

  return (
    <form onSubmit={handleSubmit} style={{ height: "100%" }}>
      <Box
        height="80%"
        padding={"0 25% 0 25%"}
        display="flex"
        flexDirection={"column"}
        justifyContent={"center"}
        sx={style}
      >
        <Typography variant="h3">Crear Usuario</Typography>
        <Typography variant="subtitle2">Por favor ingrese los datos</Typography>
        <Divider></Divider>
        <br />

        <TextField
          required
          onChange={(e) => setName(e.target.value)}
          label="Nombre"
          type="name"
          name="name"
          margin="dense"
          variant="outlined"
          placeholder="Nombre del usuario"
        />

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
          onChange={(e) => setRole(e.target.value)}
          label="Rol"
          type="text"
          name="role"
          margin="dense"
          variant="outlined"
          placeholder="Rol del usuario"
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
  );
}
