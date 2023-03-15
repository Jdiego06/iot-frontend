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
import {
  removeAuthenticatedUser,
  getAuthenticatedUser,
} from "../services/AuthService";
import getAvatarUrl from "../services/AvatarService";

const topBarHeight = "64px";

export const TopBar = () => {
  const [anchorEl, setAnchorEl] = useState();
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();

  const logOut = () => {
    removeAuthenticatedUser();
    navigate("/login");
  };

  const recordButtonPosition = (event) => {
    setAnchorEl(event.currentTarget);
    setMenuOpen(true);
  };

  const authenticatedUser = getAuthenticatedUser();

  return (
    <>
      <Box
        height={topBarHeight}
        sx={{ backgroundColor: "primary.main" }}
        display="flex"
        flexDirection="row-reverse"
        alignItems={"center"}
      >
        <IconButton onClick={recordButtonPosition}>
          <Avatar
            alt="JD"
            src={getAvatarUrl(authenticatedUser.name)}
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
                src={getAvatarUrl(authenticatedUser.name)}
                sx={{ mr: 2 }}
              ></Avatar>
            </Box>

            <Box>
              <Typography variant="h6">{authenticatedUser.name}</Typography>
              <Typography variant="body2" color={"gray"}>
                {authenticatedUser.email}
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
