import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { Card, IconButton, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Box } from "@mui/system";
import getAvatarUrl from "../services/AvatarService";

function UserCard({ user }) {
  const { deleteUser } = useContext(UserContext);
  return (
    <Card sx={{ p: 2, minWidth: "30%", m: 1 }}>
      <Box display={"flex"}>
        <Box
          sx={{
            mr: 2,
            pr: 2,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Avatar
            alt="avatar"
            src={getAvatarUrl(user.name)}
            sx={{ width: 70, height: 70, pointerEvents: "none" }}
          />
        </Box>
        <Box width={"80%"}>
          <Typography fontWeight={"bold"} variant="caption" color="gray">
            Nombre
          </Typography>
          <Typography>{user.name}</Typography>

          <Typography fontWeight={"bold"} variant="caption" color="gray">
            Correo
          </Typography>
          <Typography>{user.email}</Typography>

          <Typography fontWeight={"bold"} variant="caption" color="gray">
            Rol
          </Typography>
          <Typography>
            {user.role == "admin" ? "Administrador" : "Observador"}
          </Typography>
        </Box>

        <Box
          display="flex"
          flexDirection={"column"}
          justifyContent={"space-between"}
          alignItems="flex-end"
        >
          <IconButton>
            <EditIcon />
          </IconButton>

          <IconButton variant="outlined" onClick={() => deleteUser(user.id)}>
            <DeleteIcon />
          </IconButton>
        </Box>
      </Box>
    </Card>
  );
}

export default UserCard;
