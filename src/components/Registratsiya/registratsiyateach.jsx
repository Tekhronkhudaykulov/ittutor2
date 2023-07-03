import React from 'react'
import { NavLink } from 'react-router-dom'
// import { useContext } from 'react'

export default function passwordrecovery() {

    return (
        <div className='registratsiya'>
            <div className="item-registratsiya">
                <div className="top-registratsiya">
                    <NavLink to='/ChoseType'>
                        <span>
                            <i class="fa-sharp fa-solid fa-arrow-left-long"></i>  Вернуться обратно
                        </span>
                    </NavLink>
                </div>
                <div className="register-inputs">


                    <div className="passwordrecovery register-uchb">
                        <div className="top-recovery">
                            <p>
                                Регистрация
                            </p>
                        </div>
                        <span>
                            <label htmlFor="email-recovery">Имя</label>
                            <input type="text" name="" id="email-recovery" />
                        </span>
                        <span>
                            <label htmlFor="parol">Фамилия</label>
                            <input type="password" id='parol' />
                        </span>
                        <span>
                            <label htmlFor="email-recovery">Номер телефона</label>
                            <input type="text" name="" id="email-recovery" />
                        </span>
                        <span>
                            <label htmlFor="parol">Пароль</label>
                            <input type="password" id='parol' />
                        </span>

                        <NavLink to='/ConfrimCode' className='navlink'>
                            <button>
                                Зарегестрироваться
                            </button>
                        </NavLink>

                    </div>


                    <div className="bottom-man-emotion">
                        <div className="man">
                            <div className="massage-man">
                                <span>
                                    Наберем обороты!
                                </span>
                            </div>
                            <img src="./images/register/superman.png" alt="" />
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}
