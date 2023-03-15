import { Button, Divider, Modal, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useContext, useState } from "react";
import UserCard from "../context/UserCard";
import { UserContext } from "../context/UserContext";
import AddIcon from "@mui/icons-material/Add";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function Users() {
  let { dataUsers } = useContext(UserContext);
  dataUsers = [
    ...dataUsers,
    { name: "Pedro Pablo", email: "pedroperez@hmail.com", role: "viewer" },
    { name: "Camila Restrepo", email: "pedroperez@hmail.com", role: "viewer" },
    { name: "Jorge Mario", email: "marioga@yahoo.com", role: "admin" },
  ];

  const [newUser, setNewUser] = useState(false);
  const handleOpen = () => setNewUser(true);
  const handleClose = () => setNewUser(false);

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
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              crear usuario
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              ingresar datos del usuario
            </Typography>
          </Box>
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
