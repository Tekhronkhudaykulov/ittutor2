import React from 'react'
import Footer from '../home/Footer'
import { Header } from '../Header/Header'
import { NavLink } from 'react-router-dom'

import { DataComment } from '../Comment/DataComment'

export default function Profil() {






    return (

        <>
            <Header />
            <div className='profil'>
                <div className="item-profil">
                    <div className="saidbar-profil">
                        <ul>
                            <NavLink to='/Edit' >
                                <li >
                                    Личные данные
                                </li>
                            </NavLink>

                            <NavLink to='/Chat' >
                                <li>
                                    Мои чаты
                                </li>
                            </NavLink>
                            <NavLink to='/Balanc'>
                                <li>
                                    Баланс
                                </li>
                            </NavLink>
                            <NavLink to='/PlatnieServises' >
                                <li>
                                    Платные услуги
                                </li>
                            </NavLink>
                            <NavLink to='/transanksiya'>
                                <li>
                                    Транзакции
                                </li>
                            </NavLink>
                            <NavLink to='/MyOtzif'>
                                <li style={{ color: "#000" }}>
                                    Мои отзывы
                                </li>
                            </NavLink>
                            <NavLink to='/Pictures'>
                                <li>
                                    Избранные
                                </li>
                            </NavLink>
                            <NavLink to='/MainProfil'>
                                <li>
                                    Выход
                                </li>
                            </NavLink>
                        </ul>
                    </div>
                    <div className="main-profil">

                        <div className="myotzif-main">
                            <div className="title-otzif">
                                <h3>
                                    Мои отзывы
                                </h3>
                            </div>
                            <div className="otzif-cards">

                                <div className="otzif-card"  >
                                    <div className="top-otzif">
                                        <p>
                                            <span>Кому:</span>
                                            <h3>Рафаэль Ройтман</h3>
                                        </p>
                                        <img src="./images/a1.png" alt="" />
                                    </div>
                                    <div className="middle-otzif">
                                        <span>
                                            Текст тестового отзыва, предлагаю на главную страницу рендомно выводить только отзывы с оценкой от 4.5 и выше…
                                        </span>
                                    </div>
                                    <div className="bottom-otzif">
                                        <div className="rating-otzif">
                                            <span>
                                                Оценка:
                                            </span>
                                            <span>
                                                <i class='bx bxs-star star' ></i> 4.5
                                            </span>
                                        </div>
                                        <div className="trash-and-edit">
                                            <i class='bx bx-trash' ></i>
                                            <i class='bx bx-pencil' ></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="otzif-card"  >
                                    <div className="top-otzif">
                                        <p>
                                            <span>Кому:</span>
                                            <h3>Рафаэль Ройтман</h3>
                                        </p>
                                        <img src="./images/a1.png" alt="" />
                                    </div>
                                    <div className="middle-otzif">
                                        <span>
                                            Текст тестового отзыва, предлагаю на главную страницу рендомно выводить только отзывы с оценкой от 4.5 и выше…
                                        </span>
                                    </div>
                                    <div className="bottom-otzif">
                                        <div className="rating-otzif">
                                            <span>
                                                Оценка:
                                            </span>
                                            <span>
                                                <i class='bx bxs-star star' ></i> 4.5
                                            </span>
                                        </div>
                                        <div className="trash-and-edit">
                                            <i class='bx bx-trash' ></i>
                                            <i class='bx bx-pencil' ></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="otzif-card"  >
                                    <div className="top-otzif">
                                        <p>
                                            <span>Кому:</span>
                                            <h3>Рафаэль Ройтман</h3>
                                        </p>
                                        <img src="./images/a1.png" alt="" />
                                    </div>
                                    <div className="middle-otzif">
                                        <span>
                                            Текст тестового отзыва, предлагаю на главную страницу рендомно выводить только отзывы с оценкой от 4.5 и выше…
                                        </span>
                                    </div>
                                    <div className="bottom-otzif">
                                        <div className="rating-otzif">
                                            <span>
                                                Оценка:
                                            </span>
                                            <span>
                                                <i class='bx bxs-star star' ></i> 4.5
                                            </span>
                                        </div>
                                        <div className="trash-and-edit">
                                            <i class='bx bx-trash' ></i>
                                            <i class='bx bx-pencil' ></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="otzif-card"  >
                                    <div className="top-otzif">
                                        <p>
                                            <span>Кому:</span>
                                            <h3>Рафаэль Ройтман</h3>
                                        </p>
                                        <img src="./images/a1.png" alt="" />
                                    </div>
                                    <div className="middle-otzif">
                                        <span>
                                            Текст тестового отзыва, предлагаю на главную страницу рендомно выводить только отзывы с оценкой от 4.5 и выше…
                                        </span>
                                    </div>
                                    <div className="bottom-otzif">
                                        <div className="rating-otzif">
                                            <span>
                                                Оценка:
                                            </span>
                                            <span>
                                                <i class='bx bxs-star star' ></i> 4.5
                                            </span>
                                        </div>
                                        <div className="trash-and-edit">
                                            <i class='bx bx-trash' ></i>
                                            <i class='bx bx-pencil' ></i>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>


                    </div>
                </div>
            </div>
            <Footer />

        </>
    )
}

