import React from "react";
import style from "./footer.module.css";
const Footer = ({ completedTodos, totalTodos }) => {
  return (
    <div className={style.footer}>
      <span className={style.item}>completed Todos:{completedTodos}</span>
      <span className={style.item}>Total Todos:{totalTodos}</span>
    </div>
  );
};

export default Footer;
