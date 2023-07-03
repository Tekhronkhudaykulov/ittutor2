import React from 'react'
import { NavLink } from 'react-router-dom'
import { Header } from '../Header/Header'
import Footer from '../home/Footer'
import { MdOutlineStar } from "react-icons/md";


export default function LearingOtviz() {
    return (
        <>
            <Header />
            <div className='profil'>
                <div className="item-profil">
                    <div className="saidbar-profil">
                        <ul>
                            <NavLink to='/MainCenter' >
                                <li >
                                    Личные данные
                                </li>
                            </NavLink>

                            <NavLink to='/LearingCenterChat' >
                                <li>
                                    Мои чаты
                                </li>
                            </NavLink>
                            <NavLink to='/LearingTeacher'>
                                <li>
                                    Преподаватели
                                </li>
                            </NavLink>
                            <NavLink to='/LearingBlance'>
                                <li>
                                    Баланс
                                </li>
                            </NavLink>
                            <NavLink to='/LearingPlatnie' >
                                <li >
                                    Платные услуги
                                </li>
                            </NavLink>
                            <NavLink to='/LearingTransaksiya'>
                                <li>
                                    Транзакции
                                </li>
                            </NavLink>
                            <NavLink to='/LearingOtviz'>
                                <li style={{ color: "#000" }}>
                                    Мои отзывы
                                </li>
                            </NavLink>
                            <NavLink to='/LearingOtviz'>
                                <li>
                                    Выход
                                </li>
                            </NavLink>
                        </ul>
                    </div>
                    <div className="main-profil">


                        <section className="reviews-section">
                            <h1>Отзывы</h1>
                            <div className="reviews-card-box">
                                <div className="reviews-card-divs">
                                    <p className="reviews-card-title">
                                        От: <span>Рафаэль Ройтман</span>
                                    </p>
                                    <p className="reviews-card-text">
                                        Текст тестового отзыва, предлагаю на главную страницу рендомно
                                        выводить только отзывы с оценкой от 4.5 и выше…
                                    </p>
                                    <div>
                                        <p>Оценка:</p>
                                        <MdOutlineStar className="reviews-card-star-icon" />
                                        <span>4.5</span>
                                        <img src="./images/flag.png" alt="flag" />
                                    </div>
                                </div>
                                <div className="reviews-card-divs">
                                    <p className="reviews-card-title">
                                        От: <span>Рафаэль Ройтман</span>
                                    </p>
                                    <p className="reviews-card-text">
                                        Текст тестового отзыва, предлагаю на главную страницу рендомно
                                        выводить только отзывы с оценкой от 4.5 и выше…
                                    </p>
                                    <div>
                                        <p>Оценка:</p>
                                        <MdOutlineStar className="reviews-card-star-icon" />
                                        <span>4.5</span>
                                        <img src="./images/flag.png" alt="flag" />
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
            <Footer />


        </>
    )
}
