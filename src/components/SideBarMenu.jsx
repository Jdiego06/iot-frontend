import { MenuItem, Menu, Sidebar } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import MemoryIcon from "@mui/icons-material/Memory";
import TimelineIcon from "@mui/icons-material/Timeline";
import { Divider, Typography, useTheme } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import logo from "../assets/logo_transparent.png";

export const SideBarMenu = () => {
  const theme = useTheme();

  return (
    <Sidebar backgroundColor={theme.palette.primary.main}>
      <Menu
        menuItemStyles={{
          button: {
            backgroundColor: theme.palette.primary,
            "&:hover": {
              backgroundColor: theme.palette.primary.light,
            },
          },
        }}
      >
        <img src={logo} alt="" width={"100%"} />

        <Divider
          sx={{
            backgroundColor: theme.palette.background.default,
            margin: "0px 20px 20px 20px",
          }}
        ></Divider>

        <MenuItem
          icon={<TimelineIcon color="secondary" />}
          component={<Link to="/users" />}
        >
          <Typography variant="subtitle2" color="Background">
            Dashboard
          </Typography>
        </MenuItem>

        <MenuItem
          icon={<MemoryIcon color="secondary" />}
          component={<Link to="/devices" />}
        >
          <Typography variant="subtitle2" color="Background">
            Dispositivos
          </Typography>
        </MenuItem>

        <MenuItem
          icon={<PersonIcon color="secondary" />}
          component={<Link to="/users" />}
        >
          <Typography variant="subtitle2" color="Background">
            Usuarios
          </Typography>
        </MenuItem>

        <MenuItem
          icon={<LogoutIcon color="secondary" />}
          component={<Link to="/login" />}
        >
          <Typography variant="subtitle2" color="Background">
            Salir
          </Typography>
        </MenuItem>
      </Menu>
    </Sidebar>
  );
};
