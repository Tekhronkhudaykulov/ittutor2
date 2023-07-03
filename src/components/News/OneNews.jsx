import React, { useEffect } from "react";
import { Header } from "../Header/Header";
import Footer from "../home/Footer";
import FooterSearch from "../home/FooterSearch";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export default function OneNews() {
  const dispatch = useDispatch();

  const { id } = useParams();

  useEffect(() => {
    dispatch.newsSlice.getDetailNews(id);
  }, []);

  const { newsById } = useSelector((state) => state.newsSlice);

  return (
    <>
      <Header />
      <div className="onenews">
        <div className="item-onenews">
          <div className="title-news-main">
            <h3>Новости</h3>
          </div>

          <div className="main-onenews">
            <div className="top-onenews-img">
              <img src="./images/newsimages/new (2).png" alt="" />
            </div>
            <div className="date">
              <div className="left-title-one-news">
                <h3>Изучайте японский язык из вашего дома</h3>
              </div>
              <div className="right-title-one-news">
                <div className="data-news bgc">
                  <i class="bx bx-calendar"></i> <span>18.12.2022</span>
                </div>
              </div>
            </div>
            <div className="bottom-onenews-desc">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>
      </div>
      <FooterSearch />
      <Footer />
    </>
  );
}
