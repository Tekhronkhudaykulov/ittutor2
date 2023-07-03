import React, { useContext } from 'react'
import { Context } from '../../Context/Context'

export default function FooterSearch() {

    const { dark, setDark } = useContext(Context)

    return (
        <div className='footersearch'>
            <div className="item-footersearch">
                <div className="title-footersearch">
                    <h3 style={{ color: dark !== true ? "#593E69" : "#F9F9F9" }}>
                        Подпишитесь на нашу новостную рассылку!
                    </h3>
                    <span>
                        Подпишитесь и вы будете в курсе все наших акций, скидок, появление <br /> Новых предметов, дисциплин и учебных центров.
                    </span>
                </div>
                <div className="footersearch-input">
                    <div className="inp-and-icone">
                        <input type="text" placeholder='Введите ваш действующий Email' /> <i class='bx bx-search'></i>
                    </div>
                </div>
            </div>
        </div>
    )
}
