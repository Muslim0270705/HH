import React from 'react';
const Header = () => {
    return (
            <header className="header">
                <div className="container">
                    <div className="header__nav">
                        <div className="header__right">
                            <img src="https://incrussia.ru/wp-content/uploads/2022/07/photo_2022-07-18_11-47-45.jpg"
                                 alt=""
                                 className="header__img"/>
                            <p className="header__info">Работодателям</p>
                            <p className="header__info">Помощь</p>
                        </div>
                        <div className="header__left">
                            <a className="header__info">
                                Поиск
                            </a>
                            <button className="header__btn">
                                Создать резюме
                            </button>
                            <p className="header__login">
                                Войти
                            </p>
                        </div>
                    </div>
                </div>
            </header>
    );
};

export default Header;