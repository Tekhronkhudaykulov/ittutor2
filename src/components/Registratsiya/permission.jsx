import axios from "axios";
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
// import { useContext } from 'react'

export default function Passwordrecovery() {
  const handleRequest = async (event) => {
    event.preventDefault();
    const data = new FormData(event.target.value);
    console.log({ data });
    const request = await axios.post(
      "http://tutor.shini.uz/api/user/send-sms-code",
      {
        phone: data.get("number"),
        password: data.get("password"),
      }
    );
    const response = await request.data;
    console.log(response);
  };


  const navigate = useNavigate()
  const handleRegisterNew = () => {
    navigate('/ChoseType')
  }



  return (
    <div className="registratsiya">
      <div className="item-registratsiya">
        <form id="form" onSubmit={handleRequest}></form>

        <div className="top-registratsiya">
          <NavLink to="/Passwordrecovery">
            <span>
              <i class="fa-sharp fa-solid fa-arrow-left-long"></i> Вернуться
              обратно
            </span>
          </NavLink>
        </div>
        <div className="register-inputs">
          <div className="passwordrecovery">
            <div className="top-recovery">
              <p>Авторизация</p>
            </div>
            <span>
              <label htmlFor="email-recovery">Номер телефона или email</label>
              <input
                form="form"
                type="text"
                name="number"
                id="email-recovery"
              />
            </span>
            <span>
              <label htmlFor="parol">Пароль</label>
              <input name="password" form="form" type="password" id="parol" />
            </span>
            <span>
              <button form="form">Войти</button>
            </span>

            <div className="bottom-onformation-register">
              <span onClick={handleRegisterNew}>Регистрация</span>
              <div className="google-and-facebook">
                <span>или авторизуйтесь через:</span>
                <div className="img-social">
                  <img src="./images/Register/google.png" alt="" />
                  <img src="./images/Register/facebook.png" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="bottom-man-emotion">
            <div className="man">
              <div className="massage-man">
                <span>Вы у нас точно зарегестрированы?</span>
              </div>
              <img src="./images/register/think.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
