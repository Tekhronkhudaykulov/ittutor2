import React from "react";
import "../Css/MyCalendarStyle.css";
import { Header } from "../../Header/Header";
import { NavLink } from "react-router-dom";
import Footer from "../../home/Footer";

export const MyCalendar = () => {
  return (
    <>
      <Header />
      <main className="my-calendar-main">
        <div className="my-calendar-container">
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
                  <li style={{ color: "#593E69" }}>Мой календарь</li>
                </NavLink>
                <NavLink to={"/balance"} style={{ textDecoration: "none" }}>
                  <li>Баланс</li>
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
          <section className="my-calendar-section">
            <div className="my-calendar-div">
              <p className="calendar-title">Шахматка занятости</p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};
