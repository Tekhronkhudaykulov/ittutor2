import React, { useContext } from "react";
import { Context } from "../../../Context/Context";
import { Data } from "./Data";
import { useNavigate } from "react-router-dom";
import { baseUrl } from "../../../helpers/request";
import jobs_img from "../../../Images/3d.png";
import { useSelector } from "react-redux";

export default function ItTexnology({ item }) {
  const navigate = useNavigate();

  const { dark, setDark } = useContext(Context);

  const { loading } = useSelector(
    (state) => state.loading.effects.TeacherSlice.getTeachersLoad
  );

  return (
    <>
      {loading
        ? "Loading..."
        : item?.slice(0, 6).map((item, index) => {
            return (
              <div
                className="skill"
                key={index}
                onClick={() => navigate("/ProviteRoom/" + item.id)}
              >
                <div className="skill-top">
                  <img src={jobs_img} alt="3d-photo" className="job-img" />
                  <img
                    src={`${baseUrl}/${item.photo}`}
                    alt="avatar1"
                    className="avatar"
                  />
                </div>

                <div className="skill-bottom">
                  <div className="title-bottom-skill">
                    <p style={{ color: dark !== true ? "#593E69" : "#F9F9F9" }}>
                      {item.name}
                    </p>
                    <h3
                      style={{ color: dark !== true ? "#593E69" : "#F9F9F9" }}
                    >
                      {item.userDisciplineMain?.category.name}
                    </h3>
                    <div className="bottom-information-skill">
                      <span
                        style={{ color: dark !== true ? "#593E69" : "#F9F9F9" }}
                      >
                        <i
                          class="bx bxs-user"
                          style={{
                            color: dark !== true ? "#593E69" : "#F9F9F9",
                          }}
                        ></i>{" "}
                        {item.reviewCount}
                      </span>
                      <span
                        style={{ color: dark !== true ? "#593E69" : "#F9F9F9" }}
                      >
                        {" "}
                        <i class="bx bxs-star star"></i> {item.rating_total}{" "}
                      </span>
                      <span className="pur">
                        {" "}
                        <i
                          style={{
                            color: dark !== true ? "#593E69" : "#F9F9F9",
                          }}
                          class="bx bx-purchase-tag-alt purchase_rotate"
                        ></i>{" "}
                        <span
                          style={{
                            color: dark !== true ? "#593E69" : "#F9F9F9",
                          }}
                        >
                          от
                        </span>{" "}
                        <o
                          style={{
                            color: dark !== true ? "#593E69" : "#F9F9F9",
                          }}
                        >
                          {item.price_student}
                          {/* {item.price_type} */}
                        </o>{" "}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
    </>
  );
}
