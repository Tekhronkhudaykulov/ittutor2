import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";

const Passwordrecovery = () => {
  const [code, setCode] = useState();

  const dispatch = useDispatch();
  return (
    <div className="registratsiya">
      <div className="item-registratsiya">
        <form id="form"></form>
        <div className="top-registratsiya">
          <NavLink to="/ChoseType">
            <span>
              <i class="fa-sharp fa-solid fa-arrow-left-long"></i> Вернуться
              обратно
            </span>
          </NavLink>
        </div>
        <div className="register-inputs">
          <div className="passwordrecovery">
            <div className="top-recovery">
              <p>Код подтверждения</p>
            </div>
            <span>
              <label htmlFor="email-recovery">Введите код</label>
              <input onChange={(e) => setCode(e.target.value)} type="number" />
            </span>
            <button
              onClick={() => dispatch.authSlice.conFirmNumber({ code: code })}
            >
              Подтвердить
            </button>
            <p>Запросить еще раз ( 0:50 )</p>
          </div>

          <div className="bottom-man-emotion">
            <div className="man">
              <div className="massage-man">
                <span>Как можно было забыть пароль?!</span>
              </div>
              <img src="./images/register/man1.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Passwordrecovery;
