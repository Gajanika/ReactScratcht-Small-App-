import React from "react";
import Student from "./Student";

function App() {
  return (
    <div>
      <Student name="Gajanika" age={22} />
      <Student name="Jathushan" age={22} />
    </div>
  );
}

export default App;
//✔ props → read-only (change பண்ண முடியாது)
//✔ props → function parameter மாதிரி
//✔ Same component-ஐ different data-வுடன் reuse பண்ணலாம்