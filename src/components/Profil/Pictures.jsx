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
                                <li>
                                    Мои отзывы
                                </li>
                            </NavLink>
                            <NavLink to='/Pictures' >
                                <li style={{ color: "#000" }}>
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

                        <div className="pictures">
                            <div className="title-pictures">
                                <h3>
                                    Избранные
                                </h3>
                            </div>
                            <div className="cards-pictures">
                                <div className="card-pictures">
                                    <i class='bx bx-x' ></i>
                                    <img src="./images/roomava.png" alt="" />
                                    <span>Рафаэль Ройтман</span>
                                </div>
                                <div className="card-pictures">
                                    <i class='bx bx-x' ></i>
                                    <img src="./images/roomava.png" alt="" />
                                    <span>Рафаэль Ройтман</span>
                                </div>
                                <div className="card-pictures">
                                    <i class='bx bx-x' ></i>
                                    <img src="./images/roomava.png" alt="" />
                                    <span>Рафаэль Ройтман</span>
                                </div>
                                <div className="card-pictures">
                                    <i class='bx bx-x' ></i>
                                    <img src="./images/roomava.png" alt="" />
                                    <span>Рафаэль Ройтман</span>
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

