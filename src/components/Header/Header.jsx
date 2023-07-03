import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { Context } from "../../Context/Context";
import Logo1 from "./white.png";
import Logo2 from "./logo.png";
import Messages from "../../Images/massage.png";
import Message2 from "../../Images/message2.png";

export const Header = () => {
  const [navshow, setNavShow] = useState(false);

  const NavRemove = () => {
    setNavShow(false);
  };
  const { dark, setDark } = useContext(Context);
  const handleChange = () => {
    setDark(!dark);
  };

  return (
    <>
      <div
        className="header-main"
        style={{ backgroundColor: dark !== true ? "#F9F9F9" : "#593E69" }}
      >
        <header>
          <nav>
            <div className="brand-logo" id="brand">
              <img
                src={Logo1}
                alt="brand-logo"
                style={{ display: dark !== true ? "block" : "none" }}
              />
              <img
                src={Logo2}
                alt="brand-logo"
                style={{ display: dark !== true ? "none" : "block" }}
              />
            </div>
            <ul className="navul" id="navul">
              <li>
                <NavLink to="/">
                  <a
                    style={{ color: dark !== true ? "#593E69" : "#F9F9F9" }}
                    href="#"
                  >
                    На Главную
                  </a>
                </NavLink>
              </li>

              <li>
                <NavLink to="/NewsMain">
                  <a
                    style={{ color: dark !== true ? "#593E69" : "#F9F9F9" }}
                    href="#"
                  >
                    Новости сервиса
                  </a>
                </NavLink>
              </li>

              <li>
                <NavLink to="/Comment">
                  <a
                    style={{ color: dark !== true ? "#593E69" : "#F9F9F9" }}
                    href="#"
                  >
                    Отзывы
                  </a>
                </NavLink>
              </li>
              <select
                className="select-language language"
                style={{
                  backgroundColor: dark !== true ? "#F9F9F9  " : "#593E69",
                  color: dark !== true ? "#593E69" : "#F9F9F9",
                }}
              >
                <option value="">RUS</option>
                <option value="">UZB</option>
                <option value="">ENG</option>
              </select>
              <div
                className="dark-and-white-mode darkblcok"
                onClick={handleChange}
                style={{ justifyContent: dark !== true ? "start" : "end" }}
              >
                <div className="mode-all">
                  <i
                    class="bx bxs-moon dark"
                    style={{ display: dark !== true ? "none" : "block" }}
                  ></i>
                  <i
                    class="bx bxs-sun white"
                    style={{ display: dark !== true ? "block" : "none" }}
                  ></i>
                </div>
              </div>
            </ul>
          </nav>
          <div className="massage-and-provite-room-container">
            <div className="massage-container">
              <NavLink to="/Chat">
                <img
                  src={Message2}
                  alt=""
                  style={{ display: dark !== true ? "block" : "none" }}
                />
                <img
                  src={Messages}
                  alt=""
                  style={{ display: dark !== true ? "none" : "block" }}
                />
              </NavLink>
              <span>1</span>
            </div>
            <div
              className="provite-room-container"
              style={{ backgroundColor: dark !== true ? "#F8EED9" : "#776083" }}
            >
              <NavLink to="/MainCenter">
                <span style={{ color: dark !== true ? "gold" : "white" }}>
                  Личный кабинет
                </span>
              </NavLink>
            </div>
          </div>
        </header>
        <i
          class="fa-solid fa-bars hamurger"
          onClick={() => setNavShow((prev) => !prev)}
          style={{ color: dark !== true ? "#593E69" : "#F9F9F9" }}
        ></i>
      </div>

      <div
        className="reaponsive-header"
        id="block"
        style={{ display: navshow ? "flex" : "none" }}
      >
        <header>
          <i class="bx bx-x res-header-clos" onClick={NavRemove}></i>
          <nav>
            <div className="brand-logo">
              <img src={Logo1} alt="brand-logo" />
            </div>
            <ul className="navul">
              <li>
                <NavLink to="/">
                  <a href="#">На Главную</a>
                </NavLink>
              </li>

              <li>
                <NavLink to="/NewsMain">
                  <a href="#">Новости сервиса</a>
                </NavLink>
              </li>

              <li>
                <NavLink to="/Comment">
                  <a href="#">Отзывы</a>
                </NavLink>
              </li>
              <select
                className="select-language-res language"
                style={{
                  backgroundColor: dark !== true ? " inhornet " : "inhornet",
                  color: dark !== true ? "#fff" : "#F9F9F9",
                }}
              >
                <option value="" id="opt">
                  RUS
                </option>
                <option value="">UZB</option>
                <option value="">ENG</option>
              </select>
              <div
                className="dark-and-white-mode-res"
                onClick={handleChange}
                style={{ justifyContent: dark !== true ? "start" : "end" }}
              >
                <div className="mode-all">
                  <i
                    class="bx bxs-moon dark"
                    style={{ display: dark !== true ? "none" : "block" }}
                  ></i>
                  <i
                    class="bx bxs-sun white"
                    style={{ display: dark !== true ? "block" : "none" }}
                  ></i>
                </div>
              </div>
            </ul>
            <div className="massage-and-provite-room-container-res">
              <div className="massage-container-res">
                <NavLink to="/Chat">
                  <img src={Messages} alt="" />
                </NavLink>
                <span>1</span>
              </div>
              <div className="provite-room-container-res">
                <NavLink to="/MainCenter">
                  <span>Личный кабинет</span>
                </NavLink>
              </div>
            </div>
          </nav>
        </header>
      </div>
    </>
  );
};
