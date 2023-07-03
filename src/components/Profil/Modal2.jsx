import React, { useState } from 'react'
export default function Modals({ isModal, setIsModal }) {

    const [time, setTime] = useState(50)

    setInterval(() => {
        setTime(time - 1)
    }, 1500);



    const RemovaModal = () => {
        setIsModal(false)
    }

    return (
        <div className="modal" style={{ display: isModal ? "flex" : "none" }}>
            <div className="modal-card">
                <i onClick={RemovaModal} class='bx bx-x' ></i>
                <div className="top-modal">
                    <h3>
                        Введите код
                    </h3>
                    <p>
                        Введите код отправленный на номер<br /> <span>+998 99 999 99 99</span>
                    </p>
                </div>
                <div className="input-modal">
                    <label htmlFor="modal">Код</label>
                    <input type="text" id='modal' />
                </div>
                <div className="bottom-modal">
                    <button>Подтвердить</button>
                    <div className="timer">
                        <span>Запросить еще раз (0:{time}) </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
