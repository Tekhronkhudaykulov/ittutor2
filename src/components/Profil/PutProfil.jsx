import React, { useContext } from "react";
import Footer from "../home/Footer";
import { Header } from "../Header/Header";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import Modal1 from "./Modal1";
import { Context } from "../../Context/Context";
import NoPhoto from "../../Images/no-photo.jpeg";

export default function Profil() {
  const [isModal, setIsModal] = useState(false);

  const { dark, setDark } = useContext(Context);

  const convertBase64 = (file, element) => {
    const fileReader = new FileReader();

    fileReader.addEventListener("load", function (e) {
      element.src = e.target.result;
    });

    fileReader.readAsDataURL(file);
  };

  const [photo, setPhoto] = useState({});

  return (
    <>
      <Header />
      <div className="profil">
        <div className="item-profil">
          <div className="saidbar-profil">
            <ul>
              <NavLink to="/Edit">
                <li>Личные данные</li>
              </NavLink>

              <NavLink to="/Chat">
                <li>Мои чаты</li>
              </NavLink>
              <NavLink to="/Balanc">
                <li>Баланс</li>
              </NavLink>
              <NavLink to="/PlatnieServises">
                <li>Платные услуги</li>
              </NavLink>
              <NavLink to="/transanksiya">
                <li>Транзакции</li>
              </NavLink>
              <NavLink to="/MyOtzif">
                <li>Мои отзывы</li>
              </NavLink>
              <NavLink to="/Pictures">
                <li>Избранные</li>
              </NavLink>
              <NavLink to="/MainProfil">
                <li style={{ color: "#000" }}>Выход</li>
              </NavLink>
            </ul>
          </div>
          <div className="main-profil">
            <div className="edit">
              <div className="top-edit">
                <label className="ava-edit">
                  <img src={NoPhoto} id="img_file" alt="img " />
                  <input
                    type="file"
                    multiple
                    name="Ads[imageFiles][]"
                    onchange="loadImage(event)"
                    id="file-input"
                    className="img-input"
                    style={{ display: "none" }}
                    onChange={(e) => {
                      convertBase64(
                        e.target.files[0],
                        document.querySelectorAll("#img_file")[0]
                      );
                      setPhoto(e.target.files[0]);
                    }}
                  />
                  <i class="bx bxs-pencil"></i>
                </label>
                {/* <div className="ava-edit">
                  <img src="./images/roomava.png" alt="" />
                  <i class="bx bxs-pencil"></i>
                </div> */}
              </div>
              <div className="middle-edit">
                <div className="item-middle-edit">
                  <div className="name_surname">
                    <span>
                      <label
                        htmlFor="name"
                        style={{ color: dark ? "#fff" : "#000" }}
                      >
                        Имя
                      </label>
                      <br />
                      <input
                        type="text"
                        name=""
                        id="name"
                        placeholder="Рафаэль"
                      />
                    </span>
                    <span>
                      <label
                        htmlFor="email"
                        style={{ color: dark ? "#fff" : "#000" }}
                      >
                        Email
                      </label>
                      <br />
                      <input
                        type="email"
                        id="email"
                        placeholder="rafaelroytman@gmail.com"
                      />
                    </span>
                  </div>
                  <div className="phone_email">
                    <span>
                      <label
                        htmlFor="phone"
                        style={{ color: dark ? "#fff" : "#000" }}
                      >
                        Номер телефона
                      </label>
                      <br />
                      <input
                        type="number"
                        id="phone"
                        placeholder="+998 93 565 32 45"
                      />
                    </span>
                    <span>
                      <label
                        htmlFor="password"
                        style={{ color: dark ? "#fff" : "#000" }}
                      >
                        Пароль
                      </label>
                      <br />
                      <input type="text" id="password" />
                    </span>
                  </div>
                  <div className="coutr_city">
                    {/* <span>
                      <label
                        htmlFor="country"
                        style={{ color: dark ? "#fff" : "#000" }}
                      >
                        Страна
                      </label>
                      <br />
                      <input
                        type="text"
                        id="country"
                        placeholder="Узбекистан"
                      />
                    </span> */}
                    {/* <span>
                      <label
                        htmlFor="city"
                        style={{ color: dark ? "#fff" : "#000" }}
                      >
                        {" "}
                        Регион
                      </label>
                      <br />
                      <input type="text" id="city" placeholder="Ташкент" />
                    </span> */}
                  </div>
                  <div className="password">
                    {/* <span>
                      <label
                        htmlFor="password2"
                        style={{ color: dark ? "#fff" : "#000" }}
                      >
                        Подтвердите пароль
                      </label>
                      <br />
                      <input type="text" id="password2" />
                    </span> */}
                  </div>
                  <div className="bottom-button-edit">
                    <button
                      style={{ color: dark ? "#fff" : "#000" }}
                      onClick={() => setIsModal((prev) => !prev)}
                    >
                      Сохранить
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <Modal1 isModal={isModal} setIsModal={setIsModal} />
    </>
  );
}
