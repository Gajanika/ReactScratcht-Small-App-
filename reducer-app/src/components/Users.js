import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Users = () => {
  const { state, fetchUsers } = useContext(UserContext);

  return (
    <div>
      <button onClick={fetchUsers}>Fetch Users</button>

      {state.loading && <p>Loading...</p>}
      {state.error && <p>{state.error}</p>}

      <ul>
        {state.users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Users;