import { useContext } from "react";
import { UserContext } from "../context/UserContext";

function Users() {
  const { dataUsers } = useContext(UserContext);
  const { deleteUser } = useContext(UserContext);
  if (dataUsers.length === 0) {
    return <h1 className="text-white text-4xl font-bold text-center">No hay tareas aún</h1>;
  }

  return (
    <div className="grid grid-cols-4 gap-2">
      {dataUsers.map((user) => (
        <div className="bg-gray-400 text-white p-3 rounded-md">
        <h1 className="text-xl font-bold capitalize">{user.name}</h1>
        <p className="text-gray-700 text_sm">{user.description}</p>
        <button
          className="bg-red-500 px-2 py-1 rounded-lg mt-4 hover:bg-red-300"
          onClick={() => deleteUser(user.id)}
        >
          Eliminar usuario
        </button>
      </div>
      ))}
    </div>
  );
}

export default Users;
