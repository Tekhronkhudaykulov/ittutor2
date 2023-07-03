import React, { useContext, useEffect } from "react";
import Fillter from "./FillterLearingCenter";
import { useNavigate } from "react-router-dom";
import ItTexnology from "./Allsection-items/DISCIPLINES";
import { Context } from "../../Context/Context";
import { useDispatch, useSelector } from "react-redux";

export default function Allsection() {
  const { dark, setDark } = useContext(Context);

  const navigate = useNavigate();

  const FillterClick = () => {
    navigate("/Fillter");
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch.categorySlice.getCategoryLoad();
    dispatch.TeacherSlice.getTeachersLoad();
  }, []);

  const { categoryList } = useSelector((state) => state.categorySlice);

  const { teachersList } = useSelector((state) => state.TeacherSlice);

  return (
    <>
      <div className="allsections-main">
        <div className="title-all-sections title">
          <h3 style={{ color: dark !== true ? "#593E69" : "#F9F9F9" }}>
            Выбирайте предмет и одного из наших экспертов
          </h3>
          <span>
            Слева вы можете выбрать нужную категорию преподавателя, <br />
            справа вы увидите всех кто отвечает вашим критериям поиска
          </span>
        </div>
        <div className="main-sections-item">
          <div className="saidbar">
            <div className="item-saidbar saidbar-ul">
              <ul>
                <li style={{ color: dark !== true ? "#593E69" : "#F9F9F9" }}>
                  ВСЕ ДИСЦИПЛИНЫ
                </li>
                {categoryList.map((item, i) => (
                  <li
                    key={i}
                    style={{ color: dark !== true ? "#593E69" : "#F9F9F9" }}
                  >
                    {item?.name}
                  </li>
                ))}
              </ul>
              <span className="slider" onClick={FillterClick}>
                <i
                  style={{ color: dark !== true ? "#593E69" : "#F9F9F9" }}
                  class="bx bx-slider-alt"
                ></i>{" "}
                <p style={{ color: dark !== true ? "#593E69" : "#F9F9F9" }}>
                  Расширенный поиск
                </p>
              </span>
            </div>
          </div>
          <div className="all-sections">
            <div className="skill-container">
              <ItTexnology item={teachersList} />
            </div>
          </div>
        </div>
        <div className="button-look-all">
          <button onClick={FillterClick}>Смотреть все</button>
        </div>
      </div>
    </>
  );
}
