import React, { useContext } from "react";
import UserContext from "./UserContext";

function Profile() {
  const user = useContext(UserContext);

  return <h2>Hello {user}</h2>;
}

export default Profile;