import React, { useState, useEffect } from "react";
import style from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import axios from "axios";
export default function Navbar() {
  const [info, setinfo] = useState([]);
  useEffect(() => {
    axios.get("https://admin.taffeine.com/api/menu").then((resp) => {
      setinfo(resp.data.data);
    });
  }, []);

  return (
    <div className={style.navbar}>
      <div className="container">
        <nav className={style.nav}>
          <NavLink to="/" className={style.logo}>
            <img
              src="https://taffeine.com/_nuxt/img/logo.6335003.svg"
              alt=""
              className=""
            />
          </NavLink>
          <ul className={style.item}>
            {info.map((item, index) => {
              return (
                <li>
                  <NavLink to={item.slug}>{item.title}</NavLink>
                </li>
              );
            })}
          </ul>
          <div className={style.btn_group}>
            <button className={style.btn}>Купить онлайн</button>
            <button className={style.btn2}>Uzb</button>
          </div>
        </nav>
      </div>
    </div>
  );
}
