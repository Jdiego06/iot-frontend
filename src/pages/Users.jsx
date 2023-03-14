import { Button, Grid } from "@mui/material";
//import { Box } from "@mui/system";
import { Fragment, useContext } from "react";
import UserCard from "../context/UserCard";
import { UserContext } from "../context/UserContext";

function Users() {
  const { dataUsers } = useContext(UserContext);
  if (dataUsers.length === 0) {
    return (
      <h1 className="text-white text-4xl font-bold text-center">
        No hay usuarioa aún
      </h1>
    );
  }

  return (
    <div>
      <Fragment>
        <Grid
          container
          sx={8}
          spacing={3}
          direction="row"
          justifyContent="center"
          paddingBottom={4}
          alignItems="center"
        >
          <Grid item xs={4} justifyContent="center">
            <h1>Usuarios</h1>
          </Grid>
          <Grid item xs={3}></Grid>
          <Grid item xs={5} >
            <Button variant="contained" size="small">
              Agregar usuario
            </Button>
          </Grid>
        </Grid>
        <Grid container spacing={4} justify="center" justifyContent="center" alignItems="center">
          {dataUsers.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </Grid>
      </Fragment>
    </div>
  );
}

export default Users;
