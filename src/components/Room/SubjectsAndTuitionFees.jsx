import React, { useContext } from "react";
import { Context } from "../../Context/Context";

export default function SubjectsAndTuitionFees({ userDiscipline }) {
  const { dark, setDark } = useContext(Context);

  return (
    <div className="subjectandtuition">
      <div className="item-subjectandtuintion">
        <div className="title-subject">
          <h3 style={{ color: dark !== true ? "#593E69" : "#F9F9F9" }}>
            Дисциплины и стоимость обучения
          </h3>
        </div>

        <div className="scroll-table">
          <div className="table">
            <div
              className="place-subjectandtuition"
              style={{ color: dark !== true ? "#593E69" : "#F9F9F9" }}
            >
              <p>Название дисциплины</p>{" "}
              <div className="subject-place">
                <p>У преподавателя</p>
                <p>У ученика дома</p>
                <p>Online через Zoom</p>
              </div>
            </div>
            {userDiscipline?.map((item) => (
              <>
                <div className="border-subject"></div>
                <div
                  className="ui-programma"
                  style={{ color: dark !== true ? "#593E69" : "#F9F9F9" }}
                >
                  <p>{item.category?.name}</p>
                  <div className="tuiton-ui-programma">
                    <p>{item.price_student}$/час</p>
                    <p>{item.price_self}$/час</p>
                    <p>{item.price_zoom}$/час</p>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
        <div className="all-tuition">
          <p style={{ color: dark !== true ? "#593E69" : "#F9F9F9" }}>
            Смотреть все дисциплины и цены <i class="bx bx-down-arrow-alt"></i>
          </p>
        </div>
      </div>
    </div>
  );
}
