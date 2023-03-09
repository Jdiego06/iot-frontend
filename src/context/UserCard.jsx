import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { IconButton, useTheme } from "@mui/material";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import AddReactionOutlinedIcon from "@mui/icons-material/AddReactionOutlined";

function UserCard({ user }) {
  const theme = useTheme();
  const { deleteUser } = useContext(UserContext);
  return (
    <Paper
      sx={{
        p: 2,
        margin: "auto",
        maxWidth: 500,
        flexGrow: 1,
        backgroundColor: theme.palette.primary,
      }}
    >
      <Grid container spacing={2}>
        <Grid item>
          <Avatar
            alt={user.name}
            src="https://api.dicebear.com/5.x/initials/svg?seed=Sadie"
          />
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <h1>{user.name}</h1>
              <h1>{user.role}</h1>
              <h1>{user.email}</h1>
            </Grid>
            <Grid item>
              <Button variant="contained"
              onClick={() => deleteUser(user.id)}>eliminar usuario</Button>
            </Grid>
          </Grid>
          <Grid item>
            <IconButton>
              <AddReactionOutlinedIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default UserCard;
