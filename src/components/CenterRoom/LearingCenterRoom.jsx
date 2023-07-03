import React, { useContext } from 'react'
import { Context } from '../../Context/Context'
import { Header } from '../Header/Header'
import Footer from '../home/Footer'
import FooterSearch from '../home/FooterSearch'
import FeadbackTheTeacher from '../Room/FeadbackTheTeacher'
import OurServisesDesc from '../Room/OurServisesDesc'
import SubjectsAndTuitionFees from '../Room/SubjectsAndTuitionFees'
import Carousel from './Carousel'



export default function LearingCenterRoom() {

    const { dark, setDark } = useContext(Context)

    return (
        <>
            <Header />
            <div className='proviteroom'>
                <div className="item-room">
                    <div className="room-saidbar">
                        <div className="saidbar-list">
                            <ul>
                                <li>
                                    О центре
                                </li>
                                <li>
                                    Дисциплины и цены
                                </li>
                                <li>
                                    Документы
                                </li>
                                <li>
                                    Фотогалерея
                                </li>
                                <li>
                                    Видеобзор
                                </li>
                                <li>
                                    Отзывы
                                </li>
                            </ul>
                        </div>
                    </div>


                    <div className="main-room-information">

                        {/* top room  */}
                        <div className="top-room-information">
                            <div className="roomava">
                                <img className='roomavaimg' src="./images/room/uchblogo.png" alt="" />
                            </div>

                            <div className="desc-information-room">
                                <div className="name-and-rating-room">
                                    <h3 style={{ color: dark !== true ? "#593E69" : "#F9F9F9" }}>
                                        Учебный центр
                                    </h3>
                                    <div className="rating-room">
                                        <span style={{ color: dark !== true ? "#593E69" : "#F9F9F9" }}> <i class='bx bxs-star star' ></i> 5.0 </span>
                                        <span style={{ color: dark !== true ? "#593E69" : "#F9F9F9" }}><i class='bx bx-user'></i>178 оценок</span>
                                        <span style={{ color: dark !== true ? "#593E69" : "#F9F9F9" }} className='pur'> <i class='bx bx-purchase-tag-alt purchase_rotate_room'></i> от <o>15 $</o> </span>
                                    </div>
                                </div>
                                <div className="buttons-room">
                                    <button>Написать учебному центру</button>
                                </div>
                            </div>
                            <img className='getstudy' src="./images/room/getstudy.png" alt="" />
                        </div>


                        <OurServisesDesc />
                        <SubjectsAndTuitionFees />




                        <Carousel />

                        {/* education and experience */}
                        <div className="education-and-experience">

                            {/* education */}

                            {/* experience */}
                            <div className="experience">
                                <div className="item-experience">
                                    <div className="title-experience">
                                        <h3 style={{ color: dark !== true ? "#593E69" : "#F9F9F9" }}>
                                            Документы
                                        </h3>
                                    </div>
                                    <div className="sertificats sertificats2" >
                                        <img src="./images/room/sertifikat (2).png" alt="" />
                                        <img src="./images/room/sertifikat (1).png" alt="" />
                                        <img src="./images/room/sertifikat (3).png" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>




                        <div className="photo-galery">
                            <div className="item-galery">
                                <div className="title-galery">
                                    <h3 style={{ color: dark !== true ? "#593E69" : "#F9F9F9" }}>
                                        Фотогалерея
                                    </h3>
                                </div>
                                <div className="galery">
                                    <img src="./images/room/photo.png" alt="" />
                                    <img src="./images/room/photo.png" alt="" />
                                    <img src="./images/room/photo.png" alt="" />
                                    <img src="./images/room/photo.png" alt="" />
                                    <img src="./images/room/photo.png" alt="" />
                                    <img src="./images/room/photo.png" alt="" />
                                    <img src="./images/room/photo.png" alt="" />
                                    <img src="./images/room/photo.png" alt="" />
                                    <img src="./images/room/photo.png" alt="" />
                                </div>
                            </div>
                        </div>



                        <div className="video">
                            <div className="item-video">
                                <div className="title-video">
                                    <h3 style={{ color: dark !== true ? "#593E69" : "#F9F9F9" }}>
                                        Видеобзор
                                    </h3>
                                </div>
                                <div className="video-cards">
                                    <img src="./images/room/vd.jpg" alt="" />
                                </div>
                            </div>
                        </div>

                        <FeadbackTheTeacher />

                    </div>
                </div>
            </div>
            <FooterSearch />
            <Footer />
        </>
    )
}


