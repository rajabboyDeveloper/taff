import React, { useState, useEffect } from "react";
import style from "./Footer.module.css";
import { NavLink } from "react-router-dom";
import axios from "axios";
import {
  YMaps,
  Map,
  Placemark,
  FullscreenControl,
  TrafficControl,
} from "react-yandex-map";
export default function Footer() {
  const [info, setinfo] = useState([]);
  useEffect(() => {
    axios.get("https://admin.taffeine.com/api/menu").then((resp) => {
      setinfo(resp.data.data);
    });
  }, []);
  return (
    <div className={style.footer}>
      <div className="container">
        <div className={style.first}>
          <h1 className={style.title}>Будьте в курсе новостей</h1>
          <div className={style.input_group}>
            <input
              type="text "
              className={style.input}
              placeholder="Введите адрес электронной почты"
            />
            <button className={style.btn}>Отправлять</button>
          </div>
        </div>
        <div className={style.second}>
          <div className={style.left}>
            <div className={style.mini}>
              <div className={style.colls}></div>
              <div className={style.gmail}></div>
              <div className={style.loc}></div>
            </div>
            <ul className={style.item}>
              {info.map((item, index) => {
                return (
                  <li>
                    <NavLink to={item.slug}>{item.title}</NavLink>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className={style.right}>
            <YMaps>
              <Map
                defaultState={{
                  center: [41.311151, 69.279737],
                  zoom: 10,
                }}
                width="400px"
                height="400px"
              >
                <Placemark geometry={[41.327526, 69.184264]} />
                <Placemark geometry={[41.330623, 69.223106]} />
                <FullscreenControl />
                <TrafficControl
                  options={{
                    float: "right",
                  }}
                />
              </Map>
            </YMaps>
          </div>
        </div>
      </div>
    </div>
  );
}
