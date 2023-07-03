import React from "react";
import "../Css/ProfilPageStyle.css";
import { Header } from "../../Header/Header";
import ProfileAvatar from "../../../Images/profile-avatar.png";
import { MdModeEdit, MdClear, MdOutlineAdd } from "react-icons/md";
import Footer from "../../home/Footer";
import { NavLink, Route, Routes } from "react-router-dom";

export const ProfilPage = () => {
  return (
    <>
      <Header />
      <main className="profil-page-main">
        <div className="profile-page-container">
          <section className="profile-menu-section">

            <div className="profile-menu-div">
              <ul>
                <li style={{ color: "#593E69" }}>Личные данные</li>
                <NavLink style={{ textDecoration: "none" }} to={"/my-chat"}>
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
                  <li>Отзывы</li>
                </NavLink>
                <li>Выход</li>
              </ul>
            </div>
          </section>

          <section className="profile-edit-section">
            <div className="profile-avatar-div">
              <img src={ProfileAvatar} alt="#" />
              <div className="profile-avatar-edit">
                <MdModeEdit className="profile-avatar-edit-icon" />
              </div>
            </div>
            <div className="profile-edits-container">
              <div className="profile-fname-lname-edit">
                <div>
                  <p>Имя</p>
                  <input type="text" placeholder="Рафаэль" />
                </div>
                <div>
                  <p>Фамилия</p>
                  <input type="text" placeholder="Ройтман" />
                </div>
              </div>
              <div className="profile-name-phone-edit">
                <div>
                  <p>Отчество</p>
                  <input type="text" placeholder="Евгеньевич" />
                </div>
                <div>
                  <p>Номер телефона</p>
                  <input type="text" placeholder="+998 99 999 99 99" />
                </div>
              </div>
              <div className="profile-name-phone-edit">
                <div>
                  <p>Почта</p>
                  <input type="text" placeholder="rafaelroytman@gmail.com" />
                </div>
                <div>
                  <p>Страна</p>
                  <input type="text" placeholder="Узбекистан" />
                </div>
              </div>
              <div className="profile-name-phone-edit">
                <div>
                  <p>Регион</p>
                  <input type="text" placeholder="Ташкент" />
                </div>
                <div>
                  <p>Дата рождения</p>
                  <input type="text" placeholder="01.09.2002" />
                </div>
              </div>
              <div className="profile-name-phone-edit">
                <div>
                  <p>Пол</p>
                  <input type="text" placeholder="Мужской" />
                </div>
                <div>
                  <p>Пароль</p>
                  <input type="text" />
                </div>
              </div>
              <div className="profile-comment-edit">
                <p>Пол</p>
                <textarea />
              </div>
              <div className="profile-discipline-edit">
                <p>Дисциплина 1</p>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "30px",
                    marginTop: "24px",
                  }}
                >
                  <select name="discipline1" id="">
                    <option value="web-design">Веб дизайн</option>
                    <option value="">Programmer</option>
                    <option value="">Desinger</option>
                  </select>
                  <div className="discipline-clear-btn">
                    <MdClear />
                  </div>
                </div>
              </div>
              <div className="profile-teach-price">
                <div>
                  <p>Стоимость у преподавателя</p>
                  <input type="text" placeholder="40$" />
                </div>
                <div>
                  <input type="text" placeholder="40$" />
                </div>
                <div>
                  <input type="text" placeholder="40$" />
                </div>
              </div>
              <div className="profile-discipline-edit">
                <p>Дисциплина 2</p>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "30px",
                    marginTop: "24px",
                  }}
                >
                  <select name="discipline2" id="">
                    <option value="web-design">Веб дизайн</option>
                    <option value="">Programmer</option>
                    <option value="">Desinger</option>
                  </select>
                  <div className="discipline-clear-btn">
                    <MdOutlineAdd />
                  </div>
                </div>
              </div>
              <div className="profile-teach-price">
                <div>
                  <p>Стоимость у преподавателя</p>
                  <input type="text" placeholder="40$" />
                </div>
                <div>
                  <p>У ученика дома</p>
                  <input type="text" placeholder="40$" />
                </div>
                <div>
                  <p>Online через Zoom</p>
                  <input type="text" placeholder="40$" />
                </div>
              </div>
              <div className="profile-education-edit-div">
                <div>
                  <p>Образование</p>
                  <input type="text" placeholder="1. Университет Плеханова" />
                </div>
                <div className="education-clear-btn">
                  <MdClear />
                </div>
              </div>
              <div className="profile-admission-edit">
                <div>
                  <p>Год поступления</p>
                  <input type="text" />
                </div>
                <div>
                  <p>Год окончания</p>
                  <input type="text" />
                </div>
              </div>
              <div className="profile-education-edit-div">
                <div>
                  <p>Образование</p>
                  <input type="text" placeholder="2. Университет Плеханова" />
                </div>
                <div className="education-clear-btn">
                  <MdOutlineAdd />
                </div>
              </div>
              <div className="profile-admission-edit">
                <div>
                  <p>Год поступления</p>
                  <input type="text" />
                </div>
                <div>
                  <p>Год окончания</p>
                  <input type="text" />
                </div>
              </div>
              <div className="profile-education-edit-div">
                <div>
                  <p>Опыт работы</p>
                  <input type="text" placeholder="1. Proweb" />
                </div>
                <div className="education-clear-btn">
                  <MdOutlineAdd />
                </div>
              </div>
              <div className="profile-certificates-edit">
                <p>Сертификаты</p>
                <div className="profile-certificate-add">
                  <div>
                    <input type="file" />
                    <MdOutlineAdd className="profile-certificate-add-icon" />
                    <p>Загрузить</p>
                  </div>
                  <div>
                    <input type="file" />
                    <MdOutlineAdd className="profile-certificate-add-icon" />
                    <p>Загрузить</p>
                  </div>
                </div>
              </div>
              <div className="profile-training-center-edit">
                <p>Принадлежность к учебному центру:</p>
                <div>
                  <input type="checkbox" />
                  <p>Да</p>
                  <input type="checkbox" style={{ marginLeft: "50px" }} />
                  <p>Нет</p>
                </div>
              </div>
              <div className="profile-learn-center-name">
                <p>Наименование учебного центра</p>
                <input type="text" />
              </div>
              <div className="profile-learn-center-name">
                <p>Ссылка на учебный центр</p>
                <input type="text" />
              </div>
              <button className="profile-save-button">Сохранить</button>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};
