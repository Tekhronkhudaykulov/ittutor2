

import React, { useContext } from 'react'
import Footer from '../home/Footer'
import { Header } from '../Header/Header'
import { NavLink } from 'react-router-dom'
import TeacherList from './TeacherList'
import { Context } from '../../Context/Context'

export default function LearingTeacher() {

    const { dark, setDark } = useContext(Context)

    return (
        <>
            <Header />
            <div className='profil'>
                <div className="item-profil">
                    <div className="saidbar-profil" >
                        <ul>
                            <NavLink to='/MainCenter' >
                                <li >
                                    Личные данные
                                </li>
                            </NavLink>

                            <NavLink to='/LearingCenterChat' >
                                <li  >
                                    Мои чаты
                                </li>
                            </NavLink>
                            <NavLink to='/LearingTeacher'>
                                <li style={{ color: "#000" }}>
                                    Преподаватели
                                </li>
                            </NavLink>
                            <NavLink to='/LearingBlance'>
                                <li>
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
                            <NavLink to='/LearingEdit'>
                                <li>
                                    Выход
                                </li>
                            </NavLink>
                        </ul>
                    </div>


                    <div className="main-profil">

                        <div className="item-learing-teacher">
                            <div className="teacher-list">
                                <TeacherList />
                                <TeacherList />
                                <TeacherList />
                            </div>

                            <div className="zayafka">
                                <div className="title-zayafka">
                                    <h3 style={{ color: dark !== true ? "#593E69" : "#F9F9F9" }}>
                                        Заявки на вступление
                                    </h3>
                                </div>
                                <div className="zayafka-cards">
                                    <div className="left-card-zayafka">
                                        <section className="left-card-zayafka-left">
                                            <img src="./images/room/roomava.png" alt="" />
                                        </section>
                                        <section className="left-card-zayafka-rigth">
                                            <span>
                                                <h4>
                                                    Ройтман Рафаэль
                                                </h4>
                                                <p>
                                                    Преподаватель по UI UX
                                                </p>
                                            </span>
                                            <span className='zayafka-button'>
                                                <button>Подробнее</button>
                                            </span>
                                        </section>
                                    </div>
                                    <div className="left-card-zayafka">
                                        <section className="left-card-zayafka-left">
                                            <img src="./images/room/roomava.png" alt="" />
                                        </section>
                                        <section className="left-card-zayafka-rigth">
                                            <span>
                                                <h4>
                                                    Ройтман Рафаэль
                                                </h4>
                                                <p>
                                                    Преподаватель по UI UX
                                                </p>
                                            </span>
                                            <span className='zayafka-button'>
                                                <button>Подробнее</button>
                                            </span>
                                        </section>
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
