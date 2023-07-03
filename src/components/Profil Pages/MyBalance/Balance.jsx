import React from "react";
import "../Css/BalanceStyle.css";
import { NavLink } from "react-router-dom";
import { Header } from "../../Header/Header";
import SystemUzCard from "../../../Images/system-uz-card.svg";
import SystemHumo from "../../../Images/system-humo.svg";
import SystemVisa from "../../../Images/system-visa.svg";
import Footer from "../../home/Footer";

export const Balance = () => {
  return (
    <>
      <Header />
      <main className="balance-main">
        <div className="balance-container">
          <section>
            <h4 className="profile-page-title">Личный кабинет</h4>
            <div className="profile-menu-div">
              <ul>
                <NavLink to={"/profile"} style={{ textDecoration: "none" }}>
                  <li>Личные данные</li>
                </NavLink>
                <NavLink to={"/my-chat"} style={{ textDecoration: "none" }}>
                  <li>Мои чаты</li>
                </NavLink>
                <NavLink to={"/my-calendar"} style={{ textDecoration: "none" }}>
                  <li>Мой календарь</li>
                </NavLink>
                <NavLink to={"/balance"} style={{ textDecoration: "none" }}>
                  <li style={{ color: "#593E69" }}>Баланс</li>
                </NavLink>
                <NavLink
                  to={"/paid-services"}
                  style={{ textDecoration: "none" }}
                >
                  <li>Платные услуги</li>
                </NavLink>
                <NavLink
                  to={"/transactions"}
                  style={{ textDecoration: "none" }}
                >
                  <li>Транзакции</li>
                </NavLink>
                <NavLink to={"/reviews"} style={{ textDecoration: "none" }}>
                  <li>Отзывы</li>
                </NavLink>
                <li>Выход</li>
              </ul>
            </div>
          </section>
          <section className="balance-section">
            <div className="all-balance-div">
              <h1>Баланс</h1>
              <p>На счету: 30.000 сум</p>
            </div>
            <div className="balance-pay-type">
              <h1>Способы пополнения:</h1>
              <div className="pay-system-div">
                <div style={{ border: "2px solid #504368" }}>
                  <img src={SystemUzCard} alt="" />
                </div>
                <div>
                  <img src={SystemHumo} alt="" />
                </div>
                <div>
                  <img src={SystemVisa} alt="" />
                </div>
              </div>
            </div>
            <div className="balance-pay-data">
              <h1>Данные:</h1>
              <div className="pay-card-info-div">
                <div>
                  <p>Номер карты</p>
                  <input type="text" />
                </div>
                <div>
                  <p>Срок годности</p>
                  <input type="text" />
                </div>
              </div>
            </div>
            <button className="balance-pay-button">Пополнить</button>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};
