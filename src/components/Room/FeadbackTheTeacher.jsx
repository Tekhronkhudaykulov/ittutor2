import React, { useState } from "react";
import { useDispatch } from "react-redux";

export default function FeadbackTheTeacher({ user_id }) {
  const dispatch = useDispatch();

  const [review, setReview] = useState("");

  return (
    <div className="feacdbackteacher">
      <div className="item-feadback">
        <div className="title-feadback">
          <h3>Отзывы о преподавателе</h3>
        </div>
        <div className="middle-feadback">
          {/* <img src="./images/room/feadback.png" alt="" /> */}
          <textarea
            name=""
            id=""
            onChange={(e) => setReview(e.target.value)}
            cols="30"
            rows="10"
            style={{
              width: "100%",
              border: "none",
              outline: "none",
            }}
          ></textarea>
        </div>
        <div className="bottom-button-feadback">
          <button
            onClick={() =>
              dispatch.reviewsSlice.postNewReviews({
                user_id,
                review,
                rating: 5,
              })
            }
          >
            Оставить отзыв
          </button>
        </div>
      </div>
    </div>
  );
}
