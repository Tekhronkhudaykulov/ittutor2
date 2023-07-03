import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Context } from '../../../Context/Context'



import TopPole from '../homeimages/beliuvit.png'
import YellovPole from '../homeimages/yellov.png'

export default function OurServises() {




    const navigate = useNavigate()
    const handleRegister = () => {
        navigate('/Passwordrecovery')
    }
    const { dark, setDark } = useContext(Context)

    return (
        <>
            <div className='OurServises'>
                <div className="our-container">

                    <div className="ourservises-title">
                        <h3 style={{ color: dark !== true ? "#593E69" : "#F9F9F9" }}>
                            Почему обучаться на<br /> нашем сервисе удобнее?
                        </h3>
                        <span>
                            Вы можете прокачать свои навыки онлайн, <br /> или найти преподавателя с выездом к вам домой!
                        </span>
                    </div>


                    <div className="ourservises-main">

                        <div className="simple-search">
                            <div className="title-search">
                                <h3>
                                    Простой поиск
                                </h3>
                                <span className="search-subtitle">
                                    <p>  Удобная система навигации и поиска <br />ы нужного учителя или учебного центра</p>
                                </span>
                            </div>
                            <img src={TopPole} className='beliuvit' alt="" />
                            <div className="yellov-pole">
                                <img src={YellovPole} alt="" />
                                <i class='bx bx-search'></i>
                            </div>
                        </div>


                        <div className="simple-search">
                            <div className="title-search">
                                <h3>
                                    Простой поиск
                                </h3>
                                <span className="search-subtitle">
                                    <p>  Удобная система навигации и поиска <br />ы нужного учителя или учебного центра</p>
                                </span>
                            </div>
                            <img src={TopPole} className='beliuvit' alt="" />
                            <div className="yellov-pole">
                                <img src={YellovPole} alt="" />
                                <i class='bx bx-search'></i>
                            </div>
                        </div>

                        <div className="simple-search">
                            <div className="title-search">
                                <h3>
                                    Простой поиск
                                </h3>
                                <span className="search-subtitle">
                                    <p>  Удобная система навигации и поиска <br />ы нужного учителя или учебного центра</p>
                                </span>
                            </div>
                            <img src={TopPole} className='beliuvit' alt="" />
                            <div className="yellov-pole">
                                <img src={YellovPole} alt="" />
                                <i class='bx bx-search'></i>
                            </div>
                        </div>
                    </div>


                    <div className="bottom-button-ourservises">
                        <button style={{ color: dark !== true ? "#593E69" : "#F9F9F9" }} onClick={handleRegister} >
                            Зарегистрироваться
                        </button>
                    </div>

                </div>
            </div>
        </>
    )
}
