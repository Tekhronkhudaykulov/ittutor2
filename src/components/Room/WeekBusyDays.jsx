import React, { useContext } from 'react'
import { Context } from '../../Context/Context'

export default function WeekBusyDays() {

    const { dark, setDark } = useContext(Context)

    return (
        <div className='weekbusydays'>
            <div className="item-week-busy-days">
                <div className="title-week-busy-days">
                    <h3 style={{ color: dark !== true ? "#593E69" : "#F9F9F9" }}>
                        Шахматка занятости преподавателя
                    </h3>
                </div>


                <div className="week-table">
                    <div className="border-container-table">
                        <table class="demo" >
                            <thead>
                                <tr>
                                    <th></th>
                                    <th style={{ color: dark !== true ? "#593E69" : "#F9F9F9" }}> Понедельник</th>
                                    <th style={{ color: dark !== true ? "#593E69" : "#F9F9F9" }}>Вторник</th>
                                    <th style={{ color: dark !== true ? "#593E69" : "#F9F9F9" }}>Среда</th>
                                    <th style={{ color: dark !== true ? "#593E69" : "#F9F9F9" }}>Четверг</th>
                                    <th style={{ color: dark !== true ? "#593E69" : "#F9F9F9" }}>Пятница</th>
                                    <th style={{ color: dark !== true ? "#593E69" : "#F9F9F9" }}>Суббота</th>
                                    <th style={{ color: dark !== true ? "#593E69" : "#F9F9F9" }}>Воскресенье</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style={{ color: dark !== true ? "#593E69" : "#F9F9F9" }}>08:00-10:00</td>
                                    <td style={{ color: dark !== true ? "#593E69" : "#F9F9F9" }}>Занятие</td>
                                    <td style={{ color: dark !== true ? "#593E69" : "#F9F9F9" }}>&nbsp;</td>
                                    <td style={{ color: dark !== true ? "#593E69" : "#F9F9F9" }}>Занятие</td>
                                    <td style={{ color: dark !== true ? "#593E69" : "#F9F9F9" }}>&nbsp;</td>
                                    <td style={{ color: dark !== true ? "#593E69" : "#F9F9F9" }}>&nbsp;</td>
                                    <td style={{ color: dark !== true ? "#593E69" : "#F9F9F9" }}>&nbsp;</td>
                                    <td style={{ color: dark !== true ? "#593E69" : "#F9F9F9" }}>&nbsp;</td>
                                </tr>
                                <tr>
                                    <td style={{ color: dark !== true ? "#593E69" : "#F9F9F9" }}>10:00-12:00</td>
                                    <td style={{ color: dark !== true ? "#593E69" : "#F9F9F9" }}></td>
                                    <td style={{ color: dark !== true ? "#593E69" : "#F9F9F9" }}>Занятие</td>
                                    <td style={{ color: dark !== true ? "#593E69" : "#F9F9F9" }}>&nbsp;</td>
                                    <td style={{ color: dark !== true ? "#593E69" : "#F9F9F9" }}>Занятие</td>
                                    <td style={{ color: dark !== true ? "#593E69" : "#F9F9F9" }}>&nbsp;</td>
                                    <td style={{ color: dark !== true ? "#593E69" : "#F9F9F9" }}>&nbsp;</td>
                                    <td style={{ color: dark !== true ? "#593E69" : "#F9F9F9" }}>&nbsp;</td>
                                </tr>
                                <tr>
                                    <td style={{ color: dark !== true ? "#593E69" : "#F9F9F9" }}>12:00-14:00</td>
                                    <td style={{ color: dark !== true ? "#593E69" : "#F9F9F9" }}>Занятие</td>
                                    <td style={{ color: dark !== true ? "#593E69" : "#F9F9F9" }}>&nbsp;</td>
                                    <td style={{ color: dark !== true ? "#593E69" : "#F9F9F9" }}>&nbsp;</td>
                                    <td style={{ color: dark !== true ? "#593E69" : "#F9F9F9" }}>&nbsp;</td>
                                    <td style={{ color: dark !== true ? "#593E69" : "#F9F9F9" }}>Занятие</td>
                                    <td style={{ color: dark !== true ? "#593E69" : "#F9F9F9" }}>&nbsp;</td>
                                    <td style={{ color: dark !== true ? "#593E69" : "#F9F9F9" }}>&nbsp;</td>
                                </tr>
                                <tr>
                                    <td style={{ color: dark !== true ? "#593E69" : "#F9F9F9" }}>14:00-16:00</td>
                                    <td style={{ color: dark !== true ? "#593E69" : "#F9F9F9" }}>&nbsp;</td>
                                    <td style={{ color: dark !== true ? "#593E69" : "#F9F9F9" }} >&nbsp;</td>
                                    <td style={{ color: dark !== true ? "#593E69" : "#F9F9F9" }}>&nbsp;</td>
                                    <td style={{ color: dark !== true ? "#593E69" : "#F9F9F9" }}>&nbsp;</td>
                                    <td style={{ color: dark !== true ? "#593E69" : "#F9F9F9" }}>&nbsp;</td>
                                    <td style={{ color: dark !== true ? "#593E69" : "#F9F9F9" }}>&nbsp;</td>
                                    <td style={{ color: dark !== true ? "#593E69" : "#F9F9F9" }}>&nbsp;</td>
                                </tr>
                                <tr>
                                    <td style={{ color: dark !== true ? "#593E69" : "#F9F9F9" }}>16:00-18:00</td>
                                    <td style={{ color: dark !== true ? "#593E69" : "#F9F9F9" }}>Занятие</td>
                                    <td style={{ color: dark !== true ? "#593E69" : "#F9F9F9" }}>Занятие</td>
                                    <td style={{ color: dark !== true ? "#593E69" : "#F9F9F9" }}>&nbsp;</td>
                                    <td style={{ color: dark !== true ? "#593E69" : "#F9F9F9" }}>&nbsp;</td>
                                    <td style={{ color: dark !== true ? "#593E69" : "#F9F9F9" }}>&nbsp;</td>
                                    <td style={{ color: dark !== true ? "#593E69" : "#F9F9F9" }}>Занятие</td>
                                    <td style={{ color: dark !== true ? "#593E69" : "#F9F9F9" }}>&nbsp;</td>
                                </tr>
                                <tr>
                                    <td style={{ color: dark !== true ? "#593E69" : "#F9F9F9" }}> 18:00-20:00</td>
                                    <td style={{ color: dark !== true ? "#593E69" : "#F9F9F9" }}>&nbsp;</td>
                                    <td style={{ color: dark !== true ? "#593E69" : "#F9F9F9" }}>&nbsp;</td>
                                    <td style={{ color: dark !== true ? "#593E69" : "#F9F9F9" }}>&nbsp;</td>
                                    <td style={{ color: dark !== true ? "#593E69" : "#F9F9F9" }}>&nbsp;</td>
                                    <td style={{ color: dark !== true ? "#593E69" : "#F9F9F9" }}>&nbsp;</td>
                                    <td style={{ color: dark !== true ? "#593E69" : "#F9F9F9" }}>&nbsp;</td>
                                    <td style={{ color: dark !== true ? "#593E69" : "#F9F9F9" }}>&nbsp;</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
