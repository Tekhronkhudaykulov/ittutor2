import React from 'react'
import Footer from '../home/Footer'
import { Header } from '../Header/Header'
import { NavLink } from 'react-router-dom'


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
                                <li style={{ color: "#000" }} >
                                    Платные услуги
                                </li>
                            </NavLink>
                            <NavLink to='/transanksiya'>
                                <li>
                                    Транзакции
                                </li>
                            </NavLink>
                            <NavLink to='/MyOtzif'>
                                <li>
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
                        <div className="platniye-servises-main-container">
                            <div className="title-platiye-servises">
                                <h3>
                                    Платные услуги
                                </h3>
                            </div>
                            <div className="main-servises-cards">
                                <div className="servises-card">
                                    <div className="top-cards-servises">
                                        <h3>
                                            Текст услуги
                                        </h3>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt <br /> ut labore et dolore magna aliqua.
                                        </p>
                                        <button>Купить</button>
                                    </div>
                                </div>
                                <div className="servises-card">
                                    <div className="top-cards-servises">
                                        <h3>
                                            Текст услуги
                                        </h3>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt <br /> ut labore et dolore magna aliqua.
                                        </p>
                                        <button>Купить</button>
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

