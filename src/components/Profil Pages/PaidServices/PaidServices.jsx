import React from "react";
import { NavLink } from "react-router-dom";
import { Header } from "../../Header/Header";
import Footer from "../../home/Footer";
import "../Css/PaidServices.css";

export const PaidServices = () => {
  return (
    <>
      <Header />
      <main className="paid-services-main">
        <div className="paid-services-container">
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
                  <li>Баланс</li>
                </NavLink>
                <NavLink
                  to={"/paid-services"}
                  style={{ textDecoration: "none" }}
                >
                  <li style={{ color: "#593E69" }}>Платные услуги</li>
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
          <section className="paid-services-section">
            <h1>Платные услуги</h1>
            <div className="paid-services-div" style={{ marginTop: "45px" }}>
              <h2>Текст услуги</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <button>Купить</button>
            </div>
            <div className="paid-services-div" style={{ marginTop: "18px" }}>
              <h2>Текст услуги</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <button>Купить</button>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};
