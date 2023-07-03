import React, { useContext, useEffect } from "react";
import { Header } from "../Header/Header";
import Footer from "../home/Footer";
import FooterSearch from "../home/FooterSearch";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../../Context/Context";
import { useDispatch, useSelector } from "react-redux";
import { baseUrl } from "../../helpers/request";

export default function MainNews() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch.newsSlice.getNewsListLoad();
  }, []);

  const navigate = useNavigate();

  const { newsList } = useSelector((state) => state.newsSlice);

  const { dark, setDark } = useContext(Context);

  return (
    <>
      <Header />
      <div className="main-news">
        <div className="item-news-main">
          <div className="title-news-main title">
            <h3 style={{ color: dark !== true ? "#593E69" : "#F9F9F9" }}>
              Новости
            </h3>
          </div>

          <div className="all-news-main">
            {newsList.map((item, index) => {
              return (
                <>
                  <div className="news-card-main" key={index}>
                    <div className="top-news-img-and-data">
                      <img src={`${baseUrl}/${item.photo}`} alt="" />
                      <div className="data-news">
                        <i class="bx bx-calendar"></i> <span>{item.date}</span>
                      </div>
                    </div>
                    <div className="middle-news-main">
                      <p>{item.title}</p>
                      <span>{item.content_mini}</span>
                    </div>
                    <div className="bottom-news-main">
                      <Link to={"/OneNews/" + item.id}>
                        <span>Подробнее</span>
                      </Link>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
          <div className="pagination-buttons" id="pagenation">
            <button>1</button> <button>2</button> <button>3</button>{" "}
            <span>...</span>
            <button>81</button>
          </div>
        </div>
      </div>

      <FooterSearch />
      <Footer />
    </>
  );
}
