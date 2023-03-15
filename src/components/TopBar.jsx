import { useState } from "react";
import { useNavigate } from "react-router-dom";

import getAvatarUrl from "../services/AvatarService";
import LogoutIcon from "@mui/icons-material/Logout";

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

import {
  getAuthenticatedUser,
  removeAuthenticatedUser,
} from "../services/AuthService";

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
        <Box display={"flex"} alignItems={"center"} px={2}>
          <Avatar
            alt="avatar"
            src={getAvatarUrl(authenticatedUser.name)}
            sx={{ mr: 2 }}
          ></Avatar>

          <Box>
            <Typography variant="h6">{authenticatedUser.name}</Typography>
            <Typography variant="body2" color={"gray"}>
              {authenticatedUser.email}
            </Typography>
          </Box>
        </Box>

        <Divider sx={{ my: 1, mx: 2 }}></Divider>

        <MenuItem onClick={logOut}>
          <ListItemIcon>
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText>Salir</ListItemText>
        </MenuItem>
      </Menu>

      <Box
        height="64px"
        sx={{ backgroundColor: "primary.main" }}
        display="flex"
        flexDirection="row-reverse"
        alignItems={"center"}
      >
        <IconButton onClick={recordButtonPosition}>
          <Avatar
            alt="avatar"
            src={getAvatarUrl(authenticatedUser.name)}
            sx={{ mr: 2 }}
          ></Avatar>
        </IconButton>
      </Box>
    </>
  );
};
