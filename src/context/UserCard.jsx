//import { useContext } from "react";
//import { UserContext } from "../context/UserContext";
import { Card, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
// eslint-disable-next-line
//import EditIcon from "@mui/icons-material/Edit";
//import DeleteIcon from "@mui/icons-material/Delete";
import { Box } from "@mui/system";

function UserCard({ user }) {
  // eslint-disable-next-line
  {
    /*const { deleteUser } = useContext(UserContext);*/
  }
  return (
    <Card sx={{ p: 1, width: "31%", m: 1 }}>
      <Box display={"flex"}>
        <Box
          sx={{
            mr: 1,
            pr: 1,
            ml: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Avatar
            alt={user.name}
            src="https://api.dicebear.com/5.x/initials/svg?seed=Sadie"
            sx={{ width: 60, height: 60 }}
          />
        </Box>
        <Box
          width={"100%"}
          sx={{
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
            ml: 2,
          }}
        >
          <Typography
            fontWeight={"bold"}
            fontSize="small"
            variant="subtitle1"
            color="black"
          >
            {user.name}
          </Typography>
          <Typography
            fontWeight={"bold"}
            fontSize="small"
            variant="subtitle2"
            color="black"
          >
            {user.role}
          </Typography>
          <Typography
            fontWeight={"bold"}
            fontSize="small"
            variant="subtitle2"
            color="black"
          >
            {user.email}
          </Typography>
        </Box>

        {/*<Box
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
        </Box>*/}
      </Box>
    </Card>
  );
}

export default UserCard;
