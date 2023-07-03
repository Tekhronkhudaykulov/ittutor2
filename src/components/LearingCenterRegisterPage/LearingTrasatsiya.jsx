import React from 'react'
import Footer from '../home/Footer'
import { Header } from '../Header/Header'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'

export default function Profil() {
    const [isModal, setIsModal] = useState(false)





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
                                <li style={{ color: "#000" }}>
                                    Транзакции
                                </li>
                            </NavLink>
                            <NavLink to='/LearingOtviz'>
                                <li>
                                    Мои отзывы
                                </li>
                            </NavLink>
                            <NavLink to='/LearingEdit'>
                                <li>
                                    Выход
                                </li>
                            </NavLink>
                        </ul>
                    </div>

                    <div className="main-profil">
                        <div className="transaksiya-main">
                            <div className="title-transaksiya">
                                <h3>
                                    Транзакции
                                </h3>
                            </div>

                            <div className="transactions-main-container">
                                <div className="left-transaksiya">
                                    <span>
                                        ID
                                    </span>
                                    <span>
                                        Услуга
                                    </span>
                                </div>
                                <div className="right-transaksiya">
                                    <span>
                                        Дата
                                    </span>
                                    <span>
                                        Статус
                                    </span>
                                </div>
                            </div>
                            <div className="transactions-main-container" id='bgcnone'>
                                <div className="left-transaksiya">
                                    <span>
                                        123
                                    </span>
                                    <span>
                                        Текст услуги
                                    </span>
                                </div>
                                <div className="right-transaksiya">
                                    <span>
                                        20.11.2022
                                    </span>
                                    <span>
                                        Оплачено
                                    </span>
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

