import React from 'react';
import {Link} from "react-router-dom";

const Abstract = () => {
    return (
        <section className={"abstract"}>
            <div className="container">
                <p className="abstract__title">
                    В какой компании вы работали?
                </p>
                <input placeholder={"Название компание"} type="text" className="abstract__input"/>

                <p className="abstract__title">
                    На какой должности?
                </p>
                <input type="text" className="abstract__input"/>

                <p className="abstract__title">
                    Расскажите о ваших обязанностях и достижениях
                </p>
                <textarea placeholder={"Например, изучали и анализировали информацию, технические данные, показатели и результаты работы, обобщали и систематизировали их"} className="abstract__textarea" />

                <button className="abstract__btn-add">
                    Добавить ещё опыт работы
                </button>
                <div className="abstract__line">

                </div>

                <div className="abstract__btns">
                    <button className="abstract__btn-callback">
                        Назад
                    </button>
                    <div className="abstract__hz">
                        <button className="abstract__btn-experience">
                            Нет опыта работы
                        </button>
                        <Link to={"/abstract"}>
                            <button className="abstract__btn-сontinue">
                                Сохранить и продолжить
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Abstract;