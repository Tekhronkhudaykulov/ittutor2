import React from "react";
import "../Css/TransactionsStyle.css";
import { Header } from "../../Header/Header";
import { NavLink } from "react-router-dom";
import Footer from "../../home/Footer";

export const TransactionsPage = () => {
  return (
    <>
      <Header />
      <main className="transactions-main">
        <div className="transactions-container">
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
                  <li style={{ color: "#593E69" }}>Транзакции</li>
                </NavLink>
                <NavLink to={"/reviews"} style={{ textDecoration: "none" }}>
                  <li>Отзывы</li>
                </NavLink>
                <li>Выход</li>
              </ul>
            </div>
          </section>
          <section className="transactions-section">
            <h1>Транзакции</h1>
            <div className="transactions-div">
              <span>
                <p>ID</p>
                <p>Услуга</p>
              </span>
              <span>
                <p>Дата</p>
                <p>Статус</p>
              </span>
            </div>
            <div className="transactions-system-div">
              <span>
                <p>123</p>
                <p>Текст услуги</p>
              </span>
              <span>
                <p>20.11.2022</p>
                <p>Оплачено</p>
              </span>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};
