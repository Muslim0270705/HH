import React from 'react';

const Names = () => {
    return (
        <section className="names">
            <div className="container__small">
                <p className="names__title">Резюме «Аналитик»</p>
                <div className="names__name">
                    <h3 className="names__name-text">Фамилия</h3>
                    <input className="names__name-first"type={"text"}></input>
                    <h3 className="names__name-text">Имя</h3>
                    <input className="names__name-last" type="text"/>
                    <h3 className="names__name-text">Отчество</h3>
                    <input className="names__name-surname" type="text"/>
                </div>
                <h3 className="names__name-text">Пол</h3>
                <div className="names__btn">
                    <button className="names__btn-man">Мужской</button>
                    <button className="names__btn-wooman">Женский</button>
                </div>
                <div className="names__number">
                    <h3 className="names__name-text">Ваш номер</h3>
                    <input className="names__number-input" type="number"/>
                </div>
            </div>
        </section>
    );
};

export default Names;