import { MenuItem, Menu, Sidebar, useProSidebar } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import MemoryIcon from "@mui/icons-material/Memory";
import TimelineIcon from "@mui/icons-material/Timeline";
import { Button, Divider, Grid, Typography, useTheme } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import Logo from "../assets/logo.svg";
import MenuIcon from "@mui/icons-material/Menu";

export const SideBarMenu = () => {
  const theme = useTheme();
  const { collapseSidebar, collapsed } = useProSidebar();

  return (
    <Sidebar backgroundColor={theme.palette.primary.main}>
      {!collapsed ? (
        <>
          <Grid container justifyContent={"center"}>
            <img src={Logo} alt="" width={"30%"} />
          </Grid>
        </>
      ) : (
        <Grid mt={"10px"} container justifyContent={"center"}>
          <MenuIcon onClick={() => collapseSidebar()} color="secondary" />
        </Grid>
      )}

      <Divider
        sx={{
          backgroundColor: theme.palette.background.default,
          margin: "20px 20px",
        }}
      ></Divider>
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
          icon={<LogoutIcon color="secondary" />}
          component={<Link to="/login" />}
        >
          <Typography variant="subtitle2" color="Background">
            Salir
          </Typography>
        </MenuItem>

        <Button
          color="secondary"
          variant="outlined"
          style={{ width: "90%", marginLeft: "5%" }}
          onClick={() => collapseSidebar()}
          size="small"
        >
          {collapsed ? "expand" : "collapse"}
        </Button>
      </Menu>
    </Sidebar>
  );
};
