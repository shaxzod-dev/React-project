import React, { useContext } from "react";
import { Header } from "../../component/header";
import { ThemeContext } from "../../Context/useTheme";

const Contacts = () => {
  return (
    <div>
      <Header Logo={"Header-logo"} />
      <div className="container">
        <h2 className="title">Contacts</h2>
      </div>
    </div>
  );
};

export default Contacts;
