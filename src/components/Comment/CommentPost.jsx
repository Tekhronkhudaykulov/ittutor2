import React, { useContext, useState } from "react";
import { Context } from "../../Context/Context";
import ReactStars from "react-rating-stars-component";
import { useDispatch } from "react-redux";

export default function CommentPost() {
  const [rating, setRating] = useState(0);

  const { dark, setDark } = useContext(Context);

  const ratingChanged = (newRating) => {
    setRating(newRating);
  };

  const [review, setReview] = useState("");

  const dispatch = useDispatch();
  return (
    <>
      <div className="commentpost">
        <div className="title-post title">
          <h3 style={{ color: dark !== true ? "#593E69" : "#F9F9F9" }}>
            Оставить отзыв
          </h3>
        </div>
        <div className="main-post">
          <textarea
            onChange={(e) => setReview(e.target.value)}
            placeholder="Оставить комментарий"
          ></textarea>
          <div className="bottom-post">
            <div
              className="stars title"
              style={{
                display: "flex",
                flexDirection: "column",
                marginTop: "20px",
              }}
            >
              <ReactStars
                count={5}
                onChange={ratingChanged}
                size={25}
                activeColor="yellow"
                classNames="stars"
              />
              <span
                style={{
                  color: dark !== true ? "#593E69" : "#F9F9F9",
                  marginTop: "15px",
                }}
              >
                Поставить оценку
              </span>
              <i></i>
            </div>
            <div className="post-button">
              <button
                onClick={() =>
                  dispatch.reviewsSlice.postNewReviews({
                    user_id: 18,
                    rating,
                    review,
                  })
                }
              >
                Оставить
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
