import React from 'react'
import {
    MdOutlineArrowBackIosNew,
    MdOutlineArrowForwardIos,
} from "react-icons/md";

export default function Carousel() {
    return (
        <div className="carousel">
            <button className="arrow1">
                <MdOutlineArrowBackIosNew />
            </button>
            <div className="card-carousel">
                <img src='./images/room/roomava.png' alt="" />
                <div className="desc-carousel">
                    <h4>
                        Ройтман Рафаэль
                    </h4>
                    <span>
                        Преподаватель по UI UX
                    </span>
                </div>
            </div>
            <div className="card-carousel">
                <img src='./images/room/roomava.png' alt="" />
                <div className="desc-carousel">
                    <h4>
                        Ройтман Рафаэль
                    </h4>
                    <span>
                        Преподаватель по UI UX
                    </span>
                </div>
            </div>
            <div className="card-carousel">
                <img src='./images/room/roomava.png' alt="" />
                <div className="desc-carousel">
                    <h4>
                        Ройтман Рафаэль
                    </h4>
                    <span>
                        Преподаватель по UI UX
                    </span>
                </div>
            </div>
            <div className="card-carousel">
                <img src='./images/room/roomava.png' alt="" />
                <div className="desc-carousel">
                    <h4>
                        Ройтман Рафаэль
                    </h4>
                    <span>
                        Преподаватель по UI UX
                    </span>
                </div>
            </div>
            <div className="card-carousel">
                <img src='./images/room/roomava.png' alt="" />
                <div className="desc-carousel">
                    <h4>
                        Ройтман Рафаэль
                    </h4>
                    <span>
                        Преподаватель по UI UX
                    </span>
                </div>
            </div>
            <button className="arrow2">
                <MdOutlineArrowForwardIos />
            </button>
        </div>
    )
}
