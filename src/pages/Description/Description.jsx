import React from 'react';
import { CiHeart } from "react-icons/ci";
import { FaRegEyeSlash } from "react-icons/fa";
import { MdOutlineTaskAlt } from "react-icons/md";



const Description = () => {
    return (
        <section className={"description"}>
            <div className="container">
                <div className="description__card">
                    <p className="description__title">
                        Программист
                    </p>
                    <div className="description__info">
                        <p className="description__experience">
                            Требуемый опыт работы: 1–3 года
                        </p>
                        <p className="description__graph">
                            Полная занятость, полный день
                        </p>
                    </div>
                    <p className="description__watch">
                        Сейчас эту вакансию смотрят
                    </p>
                    <div className="description__btns">
                        <button className="description__btns-respond">
                            Откликнуться
                        </button>
                        <button className="description__btns-heart">
                            <CiHeart />
                        </button>
                        <button className="description__btns-eye">
                            <FaRegEyeSlash />
                        </button>
                    </div>
                </div>
                <div className="description__extra">
                    <div className="description__charge">
                        <p className="description__charge-title">
                            Обязанности:
                        </p>
                        <p className="description__charge-info">
                            <MdOutlineTaskAlt /> Участие в анализе и разработке проектов компании
                        </p>
                        <p className="description__charge-info">
                           <MdOutlineTaskAlt />  Разработка и сопровождение сервисов и бизнес процессов компании
                        </p>
                        <p className="description__charge-info">
                            <MdOutlineTaskAlt /> Выполнение задач по автоматизации бизнес процессов
                        </p>
                    </div>
                    <div className="description__demand">
                        <p className="description__charge-title">
                            Требования:
                        </p>
                        <p className="description__charge-info">
                            <MdOutlineTaskAlt /> Образование среднее техническое/ высшее техническое
                        </p>
                        <p className="description__charge-info">
                           <MdOutlineTaskAlt />  Знание языков программирования: Python, C#
                        </p>
                        <p className="description__charge-info">
                           <MdOutlineTaskAlt />  HTML, JavaScript, CSS, JQuery, Knockout JS, Bootstrap
                        </p>
                        <p className="description__charge-info">
                           <MdOutlineTaskAlt />  Т-SQL, MS SQL Server, Entity Framework, LINQ
                        </p>
                        <p className="description__charge-info">
                            <MdOutlineTaskAlt /> Понимание принципов ООП, паттернов проектирования
                        </p>
                        <p className="description__charge-info">
                           <MdOutlineTaskAlt />  Опыт работы с системами управления задачами и проектами
                        </p>
                        <p className="description__charge-info">
                            <MdOutlineTaskAlt /> Навыки общения и работы в команде
                        </p>
                        <p className="description__charge-info">
                            <MdOutlineTaskAlt /> Навыки составление технической документации
                        </p>
                        <p className="description__charge-info">
                            <MdOutlineTaskAlt /> Знание английского языка на уровне чтения технической документации и написания комментариев к коду                        </p>
                    </div>
                    <div className="description__conditions">
                        <p className="description__charge-title">
                            Условия:
                        </p>
                        <p className="description__charge-info">
                            <MdOutlineTaskAlt /> Трудоустройство согласно Трудовому кодексу КР
                        </p>
                        <p className="description__charge-info">
                           <MdOutlineTaskAlt />  Стабильную заработную плату
                        </p>
                        <p className="description__charge-info">
                            <MdOutlineTaskAlt /> 5 дневная рабочая неделя
                        </p>
                        <p className="description__charge-info">
                            <MdOutlineTaskAlt /> График работы с 8:30 до 17:30
                        </p>
                    </div>
                </div>
                <div className="description__end">
                    <p className="description__end-title">
                        Ключевые навыки
                    </p>
                    <div className="description__row">
                        <p className="description__row-skills">
                            JavaScript
                        </p>
                        <p className="description__row-skills">
                            Python
                        </p>
                        <p className="description__row-skills">
                            С#
                        </p>
                        <p className="description__row-skills">
                            HTML
                        </p>
                        <p className="description__row-skills">
                            Английский язык
                        </p>
                        <p className="description__row-skills">
                            Bootstrap
                        </p>
                        <p className="description__row-skills">
                            ASP.NET
                        </p>
                    </div>
                    <div className="description__question">
                        <p className="description__end-title">
                            Задайте вопрос работодателю
                        </p>
                        <p className="description__question-info">
                            Он получит его с откликом на вакансию
                        </p>
                        <div className="description__question-btn">
                            <button className="description__question-text">
                                Где располагается место работы?
                            </button>
                            <button className="description__question-text">
                                Какой график работы?
                            </button>
                            <button className="description__question-text">
                                Вакансия открыта?
                            </button>
                            <button className="description__question-text">
                                Какая оплата труда?
                            </button>
                            <button className="description__question-text">
                                Как с вами связаться?
                            </button>
                            <button className="description__question-text">
                                Другой вопрос
                            </button>
                        </div>
                    </div>
                    <button className="description__btns-respond">
                        Откликнуться
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Description;