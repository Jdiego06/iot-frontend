import { Grid } from "@mui/material";
import { useContext } from "react";
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
    <div className="grid grid-rows-3 grid-cols-4 gap-2">
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {dataUsers.map((user) => (
          <Grid item spacing={3} direction="row">
            <UserCard key={user.id} user={user} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Users;
