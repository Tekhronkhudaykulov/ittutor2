import React from 'react'
import Footer from '../home/Footer'
import { Header } from '../Header/Header'
import { NavLink } from 'react-router-dom'

import SystemUzCard from "../../../src/Images/system-uz-card.svg";
import SystemHumo from "../../../src/Images/system-humo.svg";
import SystemVisa from "../../../src/Images/system-visa.svg";

export default function Profil() {



    return (

        <>
            <Header />
            <div className='profil'>
                <div className="item-profil">
                    <div className="saidbar-profil ">
                        <ul>
                            <NavLink to='/MainCenter' >
                                <li  >
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
                                <li style={{ color: "#000" }} >
                                    Баланс
                                </li>
                            </NavLink>
                            <NavLink to='/LearingPlatnie' >
                                <li>
                                    Платные услуги
                                </li>
                            </NavLink>
                            <NavLink to='/LearingTransaksiya'>
                                <li>
                                    Транзакции
                                </li>
                            </NavLink>
                            <NavLink to='/LearingOtviz'>
                                <li>
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
                        <div className="balance-container-main">
                            <div className="top-balance">
                                <h3>
                                    Баланс
                                </h3>
                                <p>
                                    На счету: 30.000 сум
                                </p>
                            </div>


                            <div className="middle-balance">
                                <div className="title-middle-balance">
                                    <h3>
                                        Способы пополнения:
                                    </h3>
                                </div>
                                <div className="card-busness">
                                    <img src={SystemUzCard} alt="" />
                                    <img src={SystemHumo} alt="" />
                                    <img src={SystemVisa} alt="" />
                                </div>
                            </div>


                            <div className="bottom-balance">
                                <div className="title-bottom-balance">
                                    <h3>
                                        Данные:
                                    </h3>
                                </div>
                                <div className="information-buisness-card">
                                    <div className="left-numbercard">
                                        <label htmlFor="cardnumber">Номер карты</label>
                                        <input type="text" id='cardnumber' />
                                    </div>
                                    <div className="right-numbercard">
                                        <label htmlFor="cardnumber">Номер карты</label>
                                        <input type="text" id='cardnumber' />
                                    </div>
                                </div>
                            </div>
                            <div className="bottom-button-balance">
                                <button>Пополнить</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <Footer />


        </>
    )
}

