import React from "react";
import "../Css/MyChatStyle.css";
import { NavLink } from "react-router-dom";
import { Header } from "../../Header/Header";
import MyChatPhotos from "../../../Images/profile-avatar.png";
import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
  MdOutlineAttachFile,
  MdArrowForward,
} from "react-icons/md";
import Footer from "../../home/Footer";

export const MyChat = () => {
  return (
    <>
      <Header />
      <main className="my-chat-main">
        <div className="my-chat-container">
          <section className="profile-menu-section">
            <div className="profile-menu-div">
              <ul>
                <NavLink to={"/profile"} style={{ textDecoration: "none" }}>
                  <li>Личные данные</li>
                </NavLink>
                <NavLink to={"/my-chat"} style={{ textDecoration: "none" }}>
                  <li style={{ color: "#593E69" }}>Мои чаты</li>
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
                  <li>Отзывы</li>
                </NavLink>
                <li>Выход</li>
              </ul>
            </div>
          </section>
          <section className="my-chat-section2">
            <div className="my-chat-photos-div">
              <button className="my-chat-photos-arrow1">
                <MdOutlineArrowBackIosNew />
              </button>
              <img src={MyChatPhotos} alt="" />
              <img src={MyChatPhotos} alt="" />
              <img src={MyChatPhotos} alt="" />
              <img src={MyChatPhotos} alt="" />
              <img src={MyChatPhotos} alt="" />
              <button className="my-chat-photos-arrow2">
                <MdOutlineArrowForwardIos />
              </button>
            </div>
            <div className="chat-box">
              <div className="who-from-chat-title">Чат с Рафаэль Ройтман</div>
              <div className="chat-write-send-div">
                <div className="write-message-div">
                  <label htmlFor="file">
                    <input type="file" name="" id="file" />
                    <MdOutlineAttachFile className="chat-send-file-icon" />
                  </label>
                  <input type="text" placeholder="Текст сообщения" />
                  <MdArrowForward className="chat-send-icon" />
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};
