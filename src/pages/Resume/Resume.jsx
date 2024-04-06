import React from 'react';
import { LuArrowDownToLine } from "react-icons/lu";
import { IoPrintOutline } from "react-icons/io5";
import { RiDeleteBinLine } from "react-icons/ri";

const Resume = () => {
    return (
        <div className={"resume"}>
            <div className="container">
                <div className="resume__naw">
                    <div className="resume__info">
                        <li className={"resume__email"}>
                            <a  href="#">К списку резюме</a>
                        </li>
                        <p className="resume__desc">
                            Сейчас на сайте
                        </p>
                        <h2 className="resume__title">
                            Токтогулова Чинара
                        </h2>
                        <p className="resume__subtitle">
                            Женщина
                        </p>
                        <li className={"resume__redux"}>
                            <a  href="#">Редактировать</a>
                        </li>
                        <p className="resume__subtitles">
                           Рассматриваю предложения
                        </p>
                        <p className="resume__descs">
                            Контакты
                        </p>
                        <p className="resume__subtitle">
                            +996 (552) 44-11-57 — предпочитаемый способ связи
                        </p>
                        <li className={"resume__email"}>
                            <a  href="#">toktogulovacinara8@gmail.com</a>
                        </li>
                        <li className={"resume__redux"}>
                            <a  href="#">Редактировать</a>
                        </li>
                        <p className="resume__text">
                            Бишкек, не готова к переезду, не готова к командировкам
                        </p>
                        <li className={"resume__reduxs"}>
                            <a  href="#">Редактировать</a>
                        </li>
                        <div className="resume__vl">

                        </div>
                    </div>
                    <div className="resume__lines">
                        <div className="resume__line">

                        </div>
                    </div>
                    <div className="resume__actions">
                        <div className="resume__action">
                            <div className="resume__selects">
                                <form action="" className="resume__form">
                                    <select name="" id="" className="resume__select">
                                        <option value=""> In english</option>
                                        <option value="">  По русски</option>
                                    </select>
                                </form>
                            </div>
                            <div className="resume__buttons">
                                <button className="resume__button">
                                    <span><LuArrowDownToLine size={"14"} /></span>
                                </button>
                                <button className="resume__button">
                                    <span><IoPrintOutline size={"14"}/></span>
                                </button>
                                <button className="resume__button">
                                    <span><RiDeleteBinLine size={"14"}/></span>
                                </button>
                            </div>
                        </div>
                        <p className="resume__data">
                            Резюме обновлено 04.04.2024 23:31
                        </p>
                    </div>
                </div>
                <div className="resume__row">
                    <div className="resume__web">
                        <h3 className="resume__titles">Web-программист</h3>
                        <li className={"resume__redux"}>
                            <a  href="#">Редактировать</a>
                        </li>
                    </div>
                    <span className="resume__web-texts">
                        Специализации: <br/>
                    </span>
                    <ul>
                        <li className="resume__li">
                            Программист, разработчик
                        </li>
                    </ul>
                    <p className={"resume__graph"}>
                        Занятость: полная занятость
                    </p>
                    <p className={"resume__graphs"}>
                        График работы: полный день
                    </p>
                    <div className="resume__skill">
                        <div className="resume__skills">
                            <h2 className="resume__web-subtitle">
                                Ключевые навыки
                            </h2>
                            <li className={"resume__reduxs"}>
                                <a  href="#">Редактировать</a>
                            </li>
                        </div>
                        <div className="resume__click">
                            <p className="resume__web-btn">
                                HTML
                            </p>
                            <p className="resume__web-btn">
                                CSS3
                            </p>
                        </div>
                        <div className="summary__card-3">
                            <h3 className="subtitles">
                                Навыки, которые можно подтвердить
                            </h3>
                            <p className="summary__test">
                                Проходите тесты и получайте подтверждённые уровни владения навыками в резюме — это выделит вас
                                среди других кандидатов
                            </p>
                            <p className="summary__skill">
                                Ключевые навыки
                            </p>
                            <button className="summary__skills">
                                HTML
                            </button>
                            <br/>
                            <button className="summary__clicks">
                                Перейти к тестам
                            </button>
                        </div>
                    </div>
                    <div className="resume__education">
                        <h2 className="resume__web-subtitle">
                            Образование
                        </h2>
                        <li className={"resume__reduxs"}>
                            <a  href="#">Редактировать</a>
                        </li>
                    </div>
                    <p className={"resume__graphh"}>
                        Среднее образование
                    </p>
                    <div className="resume__education">
                    <h2 className="resume__web-subtitle">
                        Знание языков
                    </h2>
                    <li className={"resume__reduxs"}>
                        <a  href="#">Редактировать</a>
                    </li>
                    </div>
                    <p className="resume__lang">
                        Кыргызский — Родной
                    </p>
                    <p className="resume__langs">
                        Русский — C1 — Продвинутый
                    </p>
                    <div className="resume__education">
                        <h2 className="resume__web-subtitle">
                            Гражданство, время в пути до работы
                        </h2>
                        <li className={"resume__reduxs"}>
                            <a  href="#">Редактировать</a>
                        </li>
                    </div>
                    <p className={"resume__graph"}>
                        Гражданство: Кыргызстан
                    </p>
                    <p className={"resume__graph"}>
                        Разрешение на работу: Кыргызстан
                    </p>
                    <p className={"resume__graph"}>
                        Желательное время в пути до работы: не имеет значения
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Resume;