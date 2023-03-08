import { MenuItem, Menu, Sidebar, useProSidebar } from "react-pro-sidebar";
import { Link, useNavigate } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import MemoryIcon from "@mui/icons-material/Memory";
import TimelineIcon from "@mui/icons-material/Timeline";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { Divider, Typography, useTheme } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import Logo from "../assets/logo.svg";
import { Box } from "@mui/system";
import { IconButton } from "@mui/material";
import { logoutUser } from "../services/AuthService";

export const SideBarMenu = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const { collapseSidebar, collapsed } = useProSidebar();

  return (
    <Sidebar backgroundColor={theme.palette.primary.main}>
      <Box display={"flex"} justifyContent={"center"} mt={1}>
        <img
          style={{
            width: "50%",
            height: "30%",
            pointerEvents: "none",
          }}
          alt="logo"
          src={Logo}
        />
      </Box>

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
        <Divider sx={{ mx: 2, my: 1 }} color="lightgray"></Divider>

        <MenuItem
          icon={<TimelineIcon color="secondary" />}
          component={<Link to="/dashboard" />}
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
          icon={<LogoutIcon color="secondary"></LogoutIcon>}
          // component={<Link to="/login" />}
          onClick={() => {
            logoutUser();
            navigate("/login");
          }}
        >
          <Typography variant="subtitle2" color="Background">
            Salir
          </Typography>
        </MenuItem>
      </Menu>

      {collapsed ? (
        <IconButton
          onClick={() => collapseSidebar()}
          color="secondary"
          sx={{ position: "absolute", right: "25%", bottom: 0 }}
        >
          <KeyboardDoubleArrowRightIcon></KeyboardDoubleArrowRightIcon>
        </IconButton>
      ) : (
        <IconButton
          size="small"
          onClick={() => collapseSidebar()}
          color="secondary"
          sx={{ position: "absolute", right: 0, bottom: 0 }}
        >
          <KeyboardDoubleArrowLeftIcon fontSize="large"></KeyboardDoubleArrowLeftIcon>
        </IconButton>
      )}
    </Sidebar>
  );
};
