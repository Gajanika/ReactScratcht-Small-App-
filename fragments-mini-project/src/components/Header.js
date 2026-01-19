import React, { Fragment, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Header = () => {
  const theme = useContext(ThemeContext);

  return (
    <Fragment>
      <h2>Student Manager</h2>
      <p>Theme: {theme}</p>
    </Fragment>
  );
};

export default Header;
