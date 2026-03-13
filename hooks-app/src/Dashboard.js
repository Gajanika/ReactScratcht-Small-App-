import { useContext, useEffect } from "react";
import { ThemeContext } from "./ThemeContext";

function Dashboard({ user }) {
    //  useContext – Props drilling avoid panna
  // App.js-la irundhu theme & setTheme direct-aa vaangrom
  const { theme, setTheme } = useContext(ThemeContext);

 //  useEffect – Component load aagumbodhu run aagum
  useEffect(() => {
    console.log("Dashboard page loaded");
  }, []);

  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: theme === "dark" ? "#222" : "#eee",
        color: theme === "dark" ? "#fff" : "#000"
      }}
    >
      <h2>Welcome {user}</h2>

      <button
        onClick={() =>
          setTheme(theme === "light" ? "dark" : "light")
        }
      >
        Change Theme
      </button>
    </div>
  );
}

export default Dashboard;
