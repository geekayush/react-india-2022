import React from "react";
import css from "./Header.module.css";

const Header = () => (
  <header className={`${css.masthead} clear`}>
    <div className="centered">
      <div className="site-branding">
        <h1 className={css["site-title"]}>Get a dog</h1>
      </div>
    </div>
  </header>
);

export default Header;
