import React from "react";
import '../Css/ReviewsStyle.css'
import { NavLink } from "react-router-dom";
import { Header } from "../../Header/Header";

export const Reviews = () => {
  return (
    <>
      <Header />
      <main className="reviews-main">
        <div className="reviews-container">
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
                  <li>Платные услуги</li>
                </NavLink>
                <NavLink
                  to={"/transactions"}
                  style={{ textDecoration: "none" }}
                >
                  <li>Транзакции</li>
                </NavLink>
                <NavLink to={"/reviews"} style={{ textDecoration: "none" }}>
                  <li style={{ color: "#593E69" }}>Отзывы</li>
                </NavLink>
                <li>Выход</li>
              </ul>
            </div>
            </section>
        </div>
      </main>
    </>
  );
};
