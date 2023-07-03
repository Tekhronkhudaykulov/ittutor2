import React, { useContext, useEffect } from "react";
import { Context } from "../../Context/Context";
import { Header } from "../Header/Header";
import Footer from "../home/Footer";
import FooterSearch from "../home/FooterSearch";
import CommentPost from "./CommentPost";
import { DataComment } from "./DataComment";
import Qsh from "../teacherimages/qw.png";
import Qsh2 from "../teacherimages/qw1.png";
import { useDispatch, useSelector } from "react-redux";
import { baseUrl } from "../../helpers/request";

export default function Comments() {
  const { dark, setDark } = useContext(Context);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch.reviewsSlice.getReviewSlice();
  }, []);

  const { reviewsList } = useSelector((state) => state.reviewsSlice);
  return (
    <>
      <Header />
      <div className="comment">
        <div className="item-comment">
          <div className="title-comment title">
            <h3 style={{ color: dark !== true ? "#593E69" : "#F9F9F9" }}>
              Отзывы
            </h3>
          </div>
          <div className="main-comment">
            {reviewsList.map((item, index) => {
              return (
                <>
                  <div className="comment-card" key={index}>
                    <div className="top-qw">
                      <img src={Qsh} alt="" />
                    </div>
                    <div className="middle-comment">
                      <p>{item.review}</p>
                    </div>
                    <div className="bottom-comment">
                      <div className="left-comment">
                        <img src={`${baseUrl}/${item.tutor?.photo}`} alt="" />
                      </div>
                      <div className="right-comment">
                        <div className="desc-comment">
                          <h3>{item.tutor?.name}</h3>
                          <p>{item.tutor?.discipline?.category?.name}</p>
                        </div>
                        <span>
                          <i class="bx bxs-star"></i> <p> {item.rating} </p>
                        </span>
                      </div>
                    </div>
                    <img className="qwcom" src={Qsh2} alt="" />
                  </div>
                </>
              );
            })}
          </div>
          <div className="pagination-buttons" id="pagenation">
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <span>...</span>
            <button>83</button>
          </div>
          <CommentPost />
        </div>
      </div>
      <FooterSearch />
      <Footer />
    </>
  );
}
