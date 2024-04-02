import React from 'react';
import {Link} from "react-router-dom";

const Level = () => {
    return (
        <div className={"level"}>
            <div className="container">
                <div className="level__row">
                    <h2 className="level__title">
                        Уровень образования
                    </h2>
                    <div className="level__inputs">
                        <label className={"level__label"} htmlFor="">
                            <Link to={"/"} >
                                <input style={{cursor:"pointer"}} className={"level__input"}  value={" Среднее"}  type="radio"/>
                            </Link>
                            Среднее
                        </label>
                        <label className={"level__label"} htmlFor="">
                            <Link to={"/"}>
                                <input style={{cursor:"pointer"}} className={"level__input"} value={"Среднее специальное"} type="radio"/>
                            </Link>
                            Среднее специальное
                        </label>
                        <label className={"level__label"} htmlFor="">
                            <Link to={"/"}>
                                <input style={{cursor:"pointer"}} className={"level__input"} value={"Неоконченное высшее"} type="radio"/>
                            </Link>
                            Неоконченное высшее
                        </label>
                        <label className={"level__label"} htmlFor="">
                            <Link to={"/"}>
                                <input style={{cursor:"pointer"}} className={"level__input"} value={"Высшее"} type="radio"/>
                            </Link>
                            Высшее
                        </label>
                        <label className={"level__label"} htmlFor="">
                            <Link to={"/"}>
                                <input style={{cursor:"pointer"}} className={"level__input"} value={"Бакалавр"} type="radio"/>
                            </Link>
                            Бакалавр
                        </label>
                        <label className={"level__label"} htmlFor="">
                            <Link to={"/"}>
                                <input style={{cursor:"pointer"}} className={"level__input"} value={"Магистр"} type="radio"/>
                            </Link>
                            Магистр
                        </label>
                        <label className={"level__label"} htmlFor="">
                            <Link to={"/"}>
                                <input style={{cursor:"pointer"}} className={"level__input"} value={"Кандидат наук"} type="radio"/>
                            </Link>
                            Кандидат наук
                        </label>
                        <label className={"level__label"} htmlFor="">
                            <Link to={"/"}>
                                <input style={{cursor:"pointer"}} className={"level__input"} value={"Доктор наук"} type="radio"/>
                            </Link>
                            Доктор наук
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Level;