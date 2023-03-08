import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

export function UserContextProvider(props) {
  const [dataUsers, setDataUsers] = useState([]);

  function deleteUser(userId) {
    setDataUsers(dataUsers.filter((user) => user.id !== userId));
  }

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
    <UserContext.Provider
      value={{ dataUsers: dataUsers, deleteUser: deleteUser }}
    >
      {props.children}
    </UserContext.Provider>
  );
}
