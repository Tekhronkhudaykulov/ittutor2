import { NavLink, useNavigate } from "react-router-dom";
import { Context } from "../../Context/Context";
import { useContext, useEffect, useState } from "react";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { InputMask } from "primereact/inputmask";

export const RegisterStud = () => {
  const { setToken } = useContext(Context);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { studentModal } = useSelector((state) => state.authSlice);

  const [phone, setPhone] = useState();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      dispatch.authSlice.registerStudent({ ...values, phone });
      navigate("/ConfrimCode");
    },
  });

  const { loading } = useSelector(
    (state) => state.loading.effects.authSlice.registerStudent
  );

  return (
    <div className="registratsiya">
      <div className="item-registratsiya">
        <div className="top-registratsiya">
          <NavLink to="/ChoseType">
            <span>
              <i class="fa-sharp fa-solid fa-arrow-left-long"></i> Вернуться
              обратно
            </span>
          </NavLink>
        </div>
        <div className="register-inputs">
          <form
            onSubmit={formik.handleSubmit}
            className="passwordrecovery grid"
          >
            <div className="top-recovery first-register">
              <p>Регистрация</p>
            </div>
            <br />
            <span>
              <label htmlFor="email-recovery">Имя</label>
              <input
                onChange={formik.handleChange}
                type="text"
                name="name"
                id="name"
              />
            </span>
            {/* <span>
              <label htmlFor="parol">Фамилия</label>
              <input form="form" name="lastname" type="text" id="parol" />
            </span> */}
            {/* <span>
              <label htmlFor="fname">Отчество</label>
              <input form="form" name="lastname" type="text" id="fname" />
            </span> */}
            <span>
              <label htmlFor="email">Почта</label>
              <input
                onChange={formik.handleChange}
                form="form"
                name="email"
                type="text"
                id="email"
              />
            </span>
            {/* <span>
              <label htmlFor="email">Тел</label>
              <InputMask
                id="phone"
                name="phone"
                onChange={(e) => {
                  formik.setFieldValue("phone", e.target.value);
                }}
                mask="999 99 999 99 99"
              />
            </span> */}
            <span>
              <label htmlFor="email-recovery">Номер телефона</label>
              <input
                mask
                onChange={(e) => setPhone(e.target.value)}
                type="number"
                name="phone"
                id="phone"
              />
            </span>
            {/* <span>
              <label htmlFor="institut-id">Institut ID</label>
              <input
                type="text"
                name="number"
                id="email-recovery"
                form="form"
              />
            </span> */}
            <span>
              <label htmlFor="parol">Пароль</label>
              <input
                onChange={formik.handleChange}
                name="password"
                type="text"
                id="password"
              />
            </span>
            <span>
              <button type="submit">
                {loading ? "Loading..." : "Зарегестрироваться"}
              </button>
            </span>
          </form>

          <div className="bottom-man-emotion">
            <div className="man">
              <div className="massage-man">
                <span>Наберем обороты!</span>
              </div>
              <img src="./images/register/superman.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
