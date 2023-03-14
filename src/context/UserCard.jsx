import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { Card, IconButton } from "@mui/material";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
//import Paper from "@mui/material/Paper";
import AddReactionOutlinedIcon from "@mui/icons-material/AddReactionOutlined";

function UserCard({ user }) {
  //const theme = useTheme();
  const { deleteUser } = useContext(UserContext);
  return (
    <Card>
      <Grid container xs={12} spacing={4} direction="row" alignItems="center" justifyContent="center">
        <Grid item xs={2} alignItems="center" justifyContent="center">
          <Avatar
            alt={user.name}
            src="https://api.dicebear.com/5.x/initials/svg?seed=Sadie"
            sx={{ width: 60, height: 60 }}
          />
        </Grid>
        <Grid
          item
          xs={8}
          sm
          container
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
          <Grid
            item
            xs={9}
            container
            direction="row"
            spacing={2}
            alignItems="center"
          >
            <Grid item xs direction="row">
              <Grid item>{user.name}</Grid>
              <Grid item>{user.role}</Grid>
              <Grid item>{user.email}</Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={2} justifyContent="center" alignItems="center">
          <Grid>
            <IconButton>
              <AddReactionOutlinedIcon />
            </IconButton>
          </Grid>

          <Grid item xs alignItems="center">
            <Button variant="contained" onClick={() => deleteUser(user.id)}>
              eliminar
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
}

export default UserCard;
