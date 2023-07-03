import React, { useContext } from 'react'
import { Context } from '../../Context/Context'

export default function Footer() {

    const { dark, setDark } = useContext(Context)

    return (
        <>

            {/* footer-main */}
            <div className="footer-main">
                <footer>

                    {/* brand-footer  */}
                    <div className="brand-footer">
                        <img src="./images/white.png" alt="" style={{ display: dark !== true ? "block" : "none" }} />
                        <img src="./images/logo.png" alt="" style={{ display: dark !== true ? "none" : "block" }} />
                        <p style={{ color: dark !== true ? "#593E69" : "#F9F9F9" }}>
                            Образовательный портал для Вас и ваших друзей!
                        </p>
                        <div className="footer-social-media">
                            <i class='bx bxl-facebook' ></i>
                            <i class='bx bxl-instagram' ></i>
                            <i class='bx bxl-twitter' ></i>
                        </div>
                    </div>

                    {/* project-footer  */}
                    <div className="project-footer">
                        <h3 style={{ color: dark !== true ? "#593E69" : "#F9F9F9" }}>О проекте</h3>
                        <ol >
                            <li style={{ color: dark !== true ? "#593E69" : "#F9F9F9" }} >
                                Наша команда
                            </li>

                            <li style={{ color: dark !== true ? "#593E69" : "#F9F9F9" }}>
                                Сотрудничество
                            </li>

                            <li style={{ color: dark !== true ? "#593E69" : "#F9F9F9" }}>
                                Связь с админами
                            </li>

                            <li style={{ color: dark !== true ? "#593E69" : "#F9F9F9" }}>
                                Вопрос-ответ
                            </li>
                        </ol>
                    </div>

                    {/* footer-kurs */}
                    <div className="footer-kurs">
                        <h3 style={{ color: dark !== true ? "#593E69" : "#F9F9F9" }}>Курсы</h3>
                        <ol>
                            <li style={{ color: dark !== true ? "#593E69" : "#F9F9F9" }}>
                                Расширенный поиск
                            </li>
                            <li style={{ color: dark !== true ? "#593E69" : "#F9F9F9" }}>
                                Все преподаватели
                            </li>
                            <li style={{ color: dark !== true ? "#593E69" : "#F9F9F9" }}>
                                Рейтинг и отзывы
                            </li>
                        </ol>
                    </div>

                    {/* provite-room */}
                    <div className="footer-provite-room">
                        <h3 style={{ color: dark !== true ? "#593E69" : "#F9F9F9" }}>Личный кабинет</h3>
                        <ol>
                            <li style={{ color: dark !== true ? "#593E69" : "#F9F9F9" }}>
                                Мой профиль
                            </li>
                            <li style={{ color: dark !== true ? "#593E69" : "#F9F9F9" }}>
                                Мои чаты
                            </li>
                            <li style={{ color: dark !== true ? "#593E69" : "#F9F9F9" }}>
                                Избранное
                            </li>
                            <li style={{ color: dark !== true ? "#593E69" : "#F9F9F9" }}>
                                Мои отзывы
                            </li>
                        </ol>
                    </div>

                    {/* footer-img  */}
                    <div className="footer-img">
                        <img src="./images/homeimages/footer.png" alt="" />
                    </div>
                </footer>
            </div>



            <div className="footer-main-res">
                <footer>

                    {/* brand-footer  */}
                    <div className="brand-footer">
                        <img src="./images/white.png" alt="" style={{ display: dark !== true ? "block" : "none" }} />
                        <img src="./images/logo.png" alt="" style={{ display: dark !== true ? "none" : "block" }} />
                        <p style={{ color: dark !== true ? "#593E69" : "#F9F9F9" }}>
                            Образовательный портал для Вас и ваших друзей!
                        </p>
                        <div className="footer-social-media">
                            <i class='bx bxl-facebook' ></i>
                            <i class='bx bxl-instagram' ></i>
                            <i class='bx bxl-twitter' ></i>
                        </div>
                    </div>

                    {/* project-footer  */}
                    <div className="project-footer">
                        <h3 style={{ color: dark !== true ? "#593E69" : "#F9F9F9" }}>О проекте</h3>
                        <ol >
                            <li style={{ color: dark !== true ? "#593E69" : "#F9F9F9" }} >
                                Наша команда
                            </li>

                            <li style={{ color: dark !== true ? "#593E69" : "#F9F9F9" }}>
                                Сотрудничество
                            </li>

                            <li style={{ color: dark !== true ? "#593E69" : "#F9F9F9" }}>
                                Связь с админами
                            </li>

                            <li style={{ color: dark !== true ? "#593E69" : "#F9F9F9" }}>
                                Вопрос-ответ
                            </li>
                        </ol>
                    </div>

                    {/* footer-kurs */}
                    <div className="footer-kurs">
                        <h3 style={{ color: dark !== true ? "#593E69" : "#F9F9F9" }}>Курсы</h3>
                        <ol>
                            <li style={{ color: dark !== true ? "#593E69" : "#F9F9F9" }}>
                                Расширенный поиск
                            </li>
                            <li style={{ color: dark !== true ? "#593E69" : "#F9F9F9" }}>
                                Все преподаватели
                            </li>
                            <li style={{ color: dark !== true ? "#593E69" : "#F9F9F9" }}>
                                Рейтинг и отзывы
                            </li>
                        </ol>
                    </div>

                    {/* provite-room */}
                    <div className="footer-provite-room">
                        <h3 style={{ color: dark !== true ? "#593E69" : "#F9F9F9" }} >Личный кабинет</h3>
                        <ol>
                            <li style={{ color: dark !== true ? "#593E69" : "#F9F9F9" }}>
                                Мой профиль
                            </li>
                            <li style={{ color: dark !== true ? "#593E69" : "#F9F9F9" }}>
                                Мои чаты
                            </li>
                            <li style={{ color: dark !== true ? "#593E69" : "#F9F9F9" }}>
                                Избранное
                            </li>
                            <li style={{ color: dark !== true ? "#593E69" : "#F9F9F9" }}>
                                Мои отзывы
                            </li>
                        </ol>
                    </div>

                    {/* footer-img  */}
                    <div className="footer-img">
                        <img src="./images/homeimages/footer.png" alt="" />
                    </div>
                </footer>
            </div>
        </>




    )
}
