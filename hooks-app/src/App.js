import { useState } from "react";
import { ThemeContext } from "./ThemeContext";
import Login from "./Login";
import Dashboard from "./Dashboard";

function App() {
  //  useState – State maintain panna
  // user -> login pannina username store pannum
  const [user, setUser] = useState("");
   //  useState – Theme value store pannum (light / dark)
  const [theme, setTheme] = useState("light");

  return (
    // useContext – Props drilling avoid panna
    // theme, setTheme direct-aa ellaa child components-kum available
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {user ? <Dashboard user={user} /> : <Login setUser={setUser} />}
    </ThemeContext.Provider>
  );
}

export default App;
