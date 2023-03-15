import { Button, Divider, Modal, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import UserCard from "../context/UserCard";
import AddIcon from "@mui/icons-material/Add";
import axios from "axios";
import { AddUserForm } from "../context/AddUserForm";

//const { dataUsers } = useContext(UserContext);
function Users() {
  const [dataUsers, setDataUsers] = useState([]);
  const [newUser, setNewUser] = useState(false);
  const handleOpen = () => setNewUser(true);
  const handleClose = () => setNewUser(false);

  useEffect(() => {
    axios
      .get("https://iot-app.herokuapp.com/api/users")
      .then((response) => {
        setDataUsers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Box p={2}>
      <Box
        display={"flex"}
        alignItems="center"
        justifyContent={"space-between"}
      >
        <Typography variant="h3" fontWeight={400} color={"primary"}>
          Usuarios
        </Typography>

        <Button variant="outlined" startIcon={<AddIcon />} onClick={handleOpen}>
          Añadir usuario
        </Button>
        <Modal
          open={newUser}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <AddUserForm></AddUserForm>
        </Modal>
      </Box>

      <Divider sx={{ my: 1 }}></Divider>

      <Box display="flex" flexWrap="wrap" mt={3}>
        {dataUsers.length === 0 ? (
          <Typography variant="h2" color={"secondary.dark"}>
            No hay usuarios
          </Typography>
        ) : (
          dataUsers.map((user) => <UserCard key={user.id} user={user} />)
        )}
      </Box>
    </Box>
  );
}

export default Users;
