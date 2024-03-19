 import React from 'react';

const Footer  = () => {
    return (
        <footer className={"footer"}>
            <div className="container">
                <div className="footer__row">
                    <div className="footer__left">
                        <h3 className="footer__title">
                            HeadHunter
                        </h3>
                        <ul className="footer__left-menu">
                            <li className="footer__item">
                                <a href="">
                                    Помощь
                                </a>
                            </li>
                            <li className="footer__item">
                                <a href="">
                                    Наши вакансии
                                </a>
                            </li>
                            <li className="footer__item">
                                <a href="">
                                    Реклама на сайте
                                </a>
                            </li>
                            <li className="footer__item">
                                <a href="">
                                    Требования к ПО
                                </a>
                            </li>
                            <li className="footer__item">
                                <a href="">
                                    Инвесторам
                                </a>
                            </li>
                            <li className="footer__item">
                                <a href="">
                                    Каталог компаний
                                </a>
                            </li>
                            <li className="footer__item">
                                <a href="">
                                    Работа по профессиям
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer__center">
                        <h3 className="footer__title">
                            Мобильное приложение
                        </h3>
                        <div className=" footer__qrs ">
                            <div className="footer__qr">
                                 <span className="footer__code">

                            </span>
                            </div>
                        </div>
                    </div>
                </div>
                    <div className="footer__right">

                    </div>

                <div className="footer__inputs">
                    <ul className="footer__left-menu">
                        <li className="footer__input">
                            <a href="">
                                Этика и комплаенс
                            </a>
                        </li>
                        <li className="footer__input">
                            <a href="">
                                Оказание услуг
                            </a>
                        </li>
                        <li className="footer__input">
                            <a href="">
                                Использование сайтов
                            </a>
                        </li>
                        <li className="footer__input">
                            <a href="">
                                Защита персональных данных
                            </a>
                        </li>
                        <li className="footer__input">
                            <a href="">
                                Пользовательское соглашение
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="footer__line">
                    <hr/>
                </div>
                <div className="footer_text">
                    <p className="footer__desc">© 2024 Группа компаний HeadHunter</p>
                    <p className="footer__desc">Switch to English
                        <span className={"footer__span"}>

                        </span>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;