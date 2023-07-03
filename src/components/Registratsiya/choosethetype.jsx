import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
// import { useContext } from 'react'

export default function Passwordrecovery() {



    const navogate = useNavigate()
    const handleLogin = () => {
        navogate('/Permission')
    }

    return (
        <div className='registratsiya'>
            <div className="item-registratsiya">
                <div className="top-registratsiya">
                    <NavLink to='/Permission'>
                        <span>
                            <i class="fa-sharp fa-solid fa-arrow-left-long"></i>  Вернуться обратно
                        </span>
                    </NavLink>
                </div>
                <div className="register-inputs">


                    <div className="passwordrecovery " id='chose-type' >
                        <div className="top-recovery">
                            <p>
                                Восстановление пароля
                            </p>
                        </div>
                        <NavLink className="navlink" to='/RegisterUchb'>
                            <section>
                                <img src="./images/Register/center.png" alt="" /> <p>Учебный центр</p>
                            </section>
                        </NavLink>

                        <NavLink to="/RegisterTeach" className="navlink" >
                            <section>
                                <img src="./images/Register/stuent.png" alt="" /> <p> Репетитор</p>
                            </section>
                        </NavLink>
                        <NavLink to='/RegisterStud' className='navlink'>
                            <section >
                                <img src="./images/Register/student2.png" alt="" /> <p> Ученик</p>
                            </section>
                        </NavLink>
                        <p className='haveaccaunt' onClick={handleLogin}>
                            У вас уже есть аккаунт?
                        </p>
                    </div>


                    <div className="bottom-man-emotion">
                        <div className="man">
                            <div className="massage-man">
                                <span>
                                    Просто выберет кем вы являетесь
                                </span>
                            </div>
                            <img src="./images/register/yoga.png" alt="" />
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}
