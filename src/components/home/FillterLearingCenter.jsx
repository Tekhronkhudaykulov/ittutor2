import React, { useContext, useEffect, useState } from "react";
import ItTexnology from "./Allsection-items/DISCIPLINES";
import FooterSearch from "./FooterSearch";
import Students from "./HomeComment";
import Footer from "./Footer";
import FillterSAidbar from "./FillterSAidbar";
import { Context } from "../../Context/Context";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";

export default function FillterLearingCenter() {
  const [rating1, setRating1] = useState();
  const [rating2, setRating2] = useState();
  const [saidbarFillter, setSaidbarFillter] = useState(false);

  const CloseFillter = () => {
    setSaidbarFillter(false);
  };
  const { dark, setDark } = useContext(Context);

  const dispatch = useDispatch();

  const { teachersList } = useSelector((state) => state.TeacherSlice);

  const { country, directionList, region } = useSelector((state) => ({
    country: state.directorySlice.country,
    directionList: state.directorySlice.directionList,
    region: state.directorySlice.region,
  }));

  let [searchParams, setSearchParams] = useSearchParams();

  const params = Object.fromEntries([...searchParams]);

  useEffect(() => {
    const currentParams = Object.fromEntries([...searchParams]);
    if (currentParams.page === undefined) {
      setSearchParams({ ...currentParams, page: 1, per_page: 10 });
    }
    dispatch.TeacherSlice.getTeachersLoad(params);
  }, [searchParams]);

  const [sort_by_type, setSort_by_type] = useState("");
  const [discipline_id, setDiscipline_id] = useState();
  const [country_id, setCountry_id] = useState();
  const [region_id, setRegion_id] = useState();
  const [gender, setGender] = useState();
  const [range_min, setRange_min] = useState();

  useEffect(() => {
    dispatch.TeacherSlice.getTeachersLoad(params);
    dispatch.directorySlice.getCountryLoad();
    dispatch.directorySlice.getDirectionLoad();
  }, []);

  return (
    <>
      <div className="fillter">
        <div className="item-fillter">
          <div className="title-fillter title">
            <h3 style={{ color: dark !== true ? "#593E69" : "#F9F9F9" }}>
              Поиск преподавателей и учебных центров
            </h3>
          </div>

          <div className="main-fillter">
            {/* fillter saidbar  */}
            <div className="fillter-saidbar">
              <FillterSAidbar />
              <div className="select-fillter">
                <div className="SelectSearchType">
                  <h4>Выберите тип поиска</h4>
                  <div className="top-radio">
                    <input
                      onChange={() => setSort_by_type("tutor")}
                      type="radio"
                      id="tech"
                      name="select"
                    />
                    <label htmlFor="tech">Преподаватель</label>
                    <br />
                  </div>
                  <div className="bottom-radio">
                    <input
                      onChange={() => setSort_by_type("student")}
                      type="radio"
                      name="select"
                      id="center"
                    />
                    <label htmlFor="center">Учебный центр</label>
                  </div>
                  <div className="bottom-radio">
                    <input
                      onChange={() => setSort_by_type("zoom")}
                      type="radio"
                      name="select"
                      id="zoom"
                    />
                    <label htmlFor="zoom">Онлайн через Zoom</label>
                  </div>
                </div>
                {/* <div className="select-group-fillter">
                  <h4>Укажите тип занятия</h4>
                  <div className="online-zoom">
                    <div className="arrow-div-online-zoom">
                      <span>
                        <p>Онлайн через Zoom</p>
                        <i class="bx bx-chevron-down"></i>
                      </span>
                    </div>
                  </div>
                </div> */}

                <div className="select-group-fillter" id="id-select">
                  <h4>Выберите дисциплину</h4>
                  <select
                    className="online-zoom"
                    onChange={(e) => setDiscipline_id(e.target.value)}
                  >
                    {directionList.map((item) => (
                      <option value={item.id} className="arrow-div-online-zoom">
                        <span>
                          <p>{item.name}</p>
                          <i class="bx bx-chevron-down"></i>
                        </span>
                      </option>
                    ))}
                  </select>
                </div>

                <div className="select-group-fillter" id="id-select">
                  <h4>Укажите вашу страну</h4>
                  <select
                    onChange={(e) => {
                      dispatch.directorySlice.getRegionByIdLoad(e.target.value);
                      setCountry_id(e.target.value);
                    }}
                    className="online-zoom"
                  >
                    {country.map((item) => (
                      <>
                        <option
                          value={item.id}
                          className="arrow-div-online-zoom"
                        >
                          <span>
                            <p>{item.name}</p>
                            <i class="bx bx-chevron-down"></i>
                          </span>
                        </option>
                      </>
                    ))}
                  </select>
                </div>

                <div className="select-group-fillter" id="id-select">
                  <h4>Укажите ваш регион</h4>
                  <select
                    className="online-zoom"
                    onChange={(e) => setRegion_id(e.target.value)}
                  >
                    {region.map((item) => (
                      <option value={item.id} className="arrow-div-online-zoom">
                        <span>
                          <p>{item.name}</p>
                          <i class="bx bx-chevron-down"></i>
                        </span>
                      </option>
                    ))}
                  </select>
                </div>
                <div className="select-group-fillter" id="id-select">
                  <h4>Пол преподавателя</h4>
                  <select
                    onChange={(e) => setGender(e.target.value)}
                    className="online-zoom"
                  >
                    <option value={1} className="arrow-div-online-zoom">
                      <span>
                        <p>Женский</p>
                        <i class="bx bx-chevron-down"></i>
                      </span>
                    </option>
                    <option value={2} className="arrow-div-online-zoom">
                      <span>
                        <p>Мужской</p>
                        <i class="bx bx-chevron-down"></i>
                      </span>
                    </option>
                  </select>
                </div>

                <div className="rating-saidbar">
                  <h3>Рейтинг</h3>
                  <div className="rating-range">
                    <input
                      type="range"
                      id="ratingRange"
                      min="0"
                      max="5"
                      step="0.1"
                      oninput="filterByRating()"
                      onChange={(e) => setRange_min(e.target.value)}
                    />
                  </div>
                  <div className="progres">
                    <div className="left-progres"></div>
                    <div className="right-progres"></div>
                  </div>
                </div>

                <div className="saidbar-bottom-search">
                  <button
                    onClick={() => {
                      setSearchParams({
                        sort_by_type: sort_by_type,
                        discipline_id: discipline_id,
                        country_id: country_id,
                        region_id: region_id,
                        gender: gender,
                        range_min: range_min,
                      });
                      dispatch.TeacherSlice.getTeachersLoad({
                        params,
                      });
                    }}
                  >
                    Найти <i class="bx bx-search"></i>{" "}
                  </button>
                </div>
              </div>
              <div className="bottom-saidbar-location">
                <span>Искать по близости</span>
                <p>
                  <i class="bx bx-location-plus"></i> Перейти на поиск по карте
                </p>
              </div>
            </div>

            {/* responsive modal fillter saidbar  */}
            <div
              className="fillter-saidbar-modal"
              style={{ display: saidbarFillter ? "flex" : "none" }}
            >
              <div className="top-fillter-item">
                <FillterSAidbar />
              </div>

              <div className="select-fillter">
                <i
                  class="bx bx-x filter-close"
                  id="filter-close"
                  onClick={CloseFillter}
                ></i>
                <div className="SelectSearchType">
                  <h4>Выберите тип поиска</h4>
                  <div className="top-radio">
                    <input type="radio" id="tech" name="select" />
                    <label htmlFor="tech">Преподаватель</label>
                    <br />
                  </div>
                  <div className="bottom-radio">
                    <input type="radio" name="select" id="center" />
                    <label htmlFor="center">Учебный центр</label>
                  </div>
                </div>
                <div className="select-group-fillter">
                  <h4>Укажите тип занятия</h4>
                  <div className="online-zoom">
                    <div className="arrow-div-online-zoom">
                      <span>
                        <p>Онлайн через Zoom</p>
                        <i class="bx bx-chevron-down"></i>
                      </span>
                    </div>
                  </div>
                </div>

                <div className="select-group-fillter" id="id-select">
                  <h4>Выберите дисциплину</h4>
                  <div className="online-zoom">
                    <div className="arrow-div-online-zoom">
                      <span>
                        <p>Английский язык</p>
                        <i class="bx bx-chevron-down"></i>
                      </span>
                    </div>
                  </div>
                </div>

                <div className="select-group-fillter" id="id-select">
                  <h4>Укажите вашу страну</h4>
                  <div className="online-zoom">
                    <div className="arrow-div-online-zoom">
                      <span>
                        <p>Узбекистан</p>
                        <i class="bx bx-chevron-down"></i>
                      </span>
                    </div>
                  </div>
                </div>

                <div className="select-group-fillter" id="id-select">
                  <h4>Укажите ваш регион</h4>
                  <div className="online-zoom">
                    <div className="arrow-div-online-zoom">
                      <span>
                        <p>Ташкентский регион</p>
                        <i class="bx bx-chevron-down"></i>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="select-group-fillter" id="id-select">
                  <h4>Пол преподавателя</h4>
                  <div className="online-zoom">
                    <div className="arrow-div-online-zoom">
                      <span>
                        <p>Женский</p>
                        <i class="bx bx-chevron-down"></i>
                      </span>
                    </div>
                  </div>
                </div>

                <div className="rating-saidbar">
                  <h3>Рейтинг</h3>
                  <div className="rating-range">
                    <input
                      type="range"
                      min={0}
                      max={2}
                      onChange={(i) => setRating1(i.target.value)}
                    />
                    <input
                      type="range"
                      min={2.5}
                      max={10}
                      onChange={(i) => setRating2(i.target.value)}
                    />
                  </div>
                  <div className="progres">
                    <div className="left-progres">{rating1}</div>
                    <div className="right-progres">{rating2}</div>
                  </div>
                </div>

                <div className="saidbar-bottom-search">
                  <button onClick={CloseFillter}>
                    Найти <i class="bx bx-search"></i>{" "}
                  </button>
                </div>
              </div>
              <div className="bottom-saidbar-location">
                <span>Искать по близости</span>
                <p>
                  <i class="bx bx-location-plus"></i> Перейти на поиск по карте
                </p>
              </div>
            </div>

            {/* main fillter all sections  */}
            <div className="main-fillter-all-sections">
              <div className="map">
                <img src="./images/map.png" alt="" />
              </div>

              <div className="search-in-fillter">
                <span></span>
                <input
                  type="text"
                  placeholder="Сортировка результатов поиска:"
                />
                <div className="fillter-in-size-and-rating">
                  <i
                    class="fa-solid fa-bars hamurger"
                    onClick={() => setSaidbarFillter((prev) => !prev)}
                  ></i>
                </div>
              </div>

              <div className="ittesxnology">
                <ItTexnology item={teachersList} />
              </div>

              <div className="pagination-buttons">
                <button>1</button>
                <button>2</button>
                <button>3</button> <span>...</span>
                <button>81</button>
              </div>
            </div>
          </div>

          <Students />
          <FooterSearch />
        </div>
      </div>
      <Footer />
    </>
  );
}
