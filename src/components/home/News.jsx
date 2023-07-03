import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../../Context/Context";
import NewsImgONe1 from "../newsimages/new (1).png";
import NewsImgONe2 from "../newsimages/new (2).png";
import NewsImgONe3 from "../newsimages/new (3).png";
import { useDispatch, useSelector } from "react-redux";
import { baseUrl } from "../../helpers/request";

export default function News() {
  const navigate = useNavigate();
  const ClickMainNews = () => {
    navigate("/NewsMain");
  };
  const { dark, setDark } = useContext(Context);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch.newsSlice.getNewsListLoad();
  }, []);

  const { newsList } = useSelector((state) => state.newsSlice);

  return (
    <div className="news">
      <div className="item-news">
        <div className="news-title">
          <div className="left-title ">
            <h3 style={{ color: dark !== true ? "#593E69" : "#F9F9F9" }}>
              Новости сервиса
            </h3>
            <span>
              Будьте в курсе самых последних новостей <br /> нашего сервиса!
            </span>
          </div>
          <div className="right-title">
            <span onClick={ClickMainNews}>Читать все новости</span>
          </div>
        </div>

        {/* cards  */}
        <div className="news-cards">
          {newsList.map((item, key) => (
            <div key={key} className="news-card">
              <div className="top-news-card">
                <img src={`${baseUrl}/${item.photo}`} alt="al" />
              </div>
              <div className="news-card-desc">
                <div className="news-card-title">
                  <h3>{item.title}</h3>
                  <span>{item.content_mini}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
