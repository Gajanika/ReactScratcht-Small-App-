import React from "react";
import UserContext from "./UserContext";
import Profile from "./Profile";

function App() {
  const user = "Kamal";

  return (
    <UserContext.Provider value={user}>
      <div>
        <h1>React useContext Example</h1>
        <Profile />
      </div>
    </UserContext.Provider>
  );
}

export default App;