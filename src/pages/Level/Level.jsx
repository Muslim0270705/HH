import React from 'react';
import {Link} from "react-router-dom";

const Level = ({setIdPages,idP}) => {
    return (
        <section className={"cv"}>
            <div className="container__small">
                <div className="cv__shadow">
                    <div className={'cv__prog'}>
                        <div style={{background: "#ff4d3a"}}>

                        </div>
                        <div style={{background: "#ff4d3a"}}>

                        </div>
                        <div style={{background: "#ff4d3a"}}>

                        </div>
                        <div style={{background: "#ff4d3a"}}>

                        </div>
                        <div>

                        </div>
                    </div>
                    <div className="level__row">
                        <h2 className="level__title">
                            Уровень образования
                        </h2>
                        <div className="level__inputs">
                            <label className={"level__label"} htmlFor="">

                                    <input style={{cursor: "pointer"}} className={"level__input"} value={" Среднее"}
                                           type="radio"/>
                                Среднее
                            </label>
                            <label className={"level__label"} htmlFor="">
                                    <input style={{cursor: "pointer"}} className={"level__input"}
                                           value={"Среднее специальное"} type="radio"/>
                                Среднее специальное
                            </label>
                            <label className={"level__label"} htmlFor="">
                                    <input style={{cursor: "pointer"}} className={"level__input"}
                                           value={"Неоконченное высшее"} type="radio"/>
                                Неоконченное высшее
                            </label>
                            <label className={"level__label"} htmlFor="">
                                    <input style={{cursor: "pointer"}} className={"level__input"} value={"Высшее"}
                                           type="radio"/>
                                Высшее
                            </label>
                            <label className={"level__label"} htmlFor="">
                                    <input style={{cursor: "pointer"}} className={"level__input"} value={"Бакалавр"}
                                           type="radio"/>
                                Бакалавр
                            </label>
                            <label className={"level__label"} htmlFor="">
                                    <input style={{cursor: "pointer"}} className={"level__input"} value={"Магистр"}
                                           type="radio"/>
                                Магистр
                            </label>
                            <label className={"level__label"} htmlFor="">
                                    <input style={{cursor: "pointer"}} className={"level__input"}
                                           value={"Кандидат наук"}
                                           type="radio"/>
                                Кандидат наук
                            </label>
                            <label className={"level__label"} htmlFor="">
                                    <input style={{cursor: "pointer"}} className={"level__input"} value={"Доктор наук"}
                                           type="radio"/>
                                Доктор наук
                            </label>
                        </div>
                    </div>
                    <div className={"cv__btns"}>
                        <button onClick={() => setIdPages(idP - 1)} className="cv__prev">
                            Назад
                        </button>
                        <button onClick={() => setIdPages(idP + 1)} className="cv__next">
                            Сохранить и продолжить
                        </button>


                    </div>
                </div>

            </div>
        </section>
    );
};

export default Level;