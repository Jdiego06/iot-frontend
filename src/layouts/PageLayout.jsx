import {
  Avatar,
  Box,
  Divider,
  IconButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import { useState } from "react";

import { Outlet, useNavigate } from "react-router-dom";
import { SideBarMenu } from "../components/SideBarMenu";
import LogoutIcon from "@mui/icons-material/Logout";
import { logoutUser } from "../services/AuthService";

export const TopBar = () => {
  const [anchorEl, setAnchorEl] = useState();
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();

  const logOut = () => {
    logoutUser();
    navigate("/login");
  };

  const recordButtonPosition = (event) => {
    setAnchorEl(event.currentTarget);
    setMenuOpen(true);
  };

  const topBarHeight = "64px";
  return (
    <>
      <Box
        // width={"100%"}
        height={topBarHeight}
        sx={{ backgroundColor: "primary.main" }}
        display="flex"
        flexDirection="row-reverse"
        alignItems={"center"}
      >
        <IconButton onClick={recordButtonPosition}>
          <Avatar
            alt="JD"
            src="https://api.dicebear.com/5.x/initials/svg?seed=Juan%20Diego&backgroundColor=00897b,00acc1,039be5,1e88e5,3949ab,43a047,5e35b1,7cb342,8e24aa,c0ca33,fb8c00,fdd835,ffb300"
            sx={{ mr: 2 }}
          ></Avatar>
        </IconButton>
      </Box>

      <Menu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        onClick={() => setMenuOpen(false)}
        anchorEl={anchorEl}
        PaperProps={{
          style: {
            minWidth: "250px",
          },
        }}
      >
        <Box px={2}>
          <Box display={"flex"} alignItems={"center"}>
            <Box>
              <Avatar
                alt="JD"
                src="https://api.dicebear.com/5.x/initials/svg?seed=Juan%20Diego&backgroundColor=00897b,00acc1,039be5,1e88e5,3949ab,43a047,5e35b1,7cb342,8e24aa,c0ca33,fb8c00,fdd835,ffb300"
                sx={{ mr: 2 }}
              ></Avatar>
            </Box>

            <Box>
              <Typography variant="h6">Juan Diego</Typography>
              <Typography variant="body2" color={"gray"}>
                jd99@outlook.com
              </Typography>
            </Box>
          </Box>

          <Divider sx={{ my: 1 }}></Divider>

          <MenuItem onClick={logOut}>
            <ListItemIcon>
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText>Salir</ListItemText>
          </MenuItem>
        </Box>
      </Menu>
    </>
  );
};

export const PageLayout = () => {
  const topBarHeight = "64px";

  return (
    <Box style={{ height: "100%" }}>
      <TopBar></TopBar>

      <Box display={"flex"} height={`calc(100% - ${topBarHeight})`}>
        <SideBarMenu></SideBarMenu>
        <Box overflow={"auto"} width="100%">
          <Outlet></Outlet>
        </Box>
      </Box>
    </Box>
  );
};
