import React from "react";
import css from "./Loader.module.css";

const Loader = () => (
    <div className={css.loaderContainer}>
        <div className={css.loader}>
            <div className={css.box}></div>
            <div className={css.box}></div>
            <div className={css.box}></div>
            <div className={css.box}></div>
        </div>
    </div>
);

export default Loader;
