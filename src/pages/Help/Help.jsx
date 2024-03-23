import React from 'react';

const Help = () => {
    return (
        <div className={"help"}>
            <div className="container">
                <h2 className="help__title">
                    Пишите нам!
                </h2>
                <p className="help__text">
                    Если вы хотите подсказать нам, как улучшить наш сайт, высказать ваши замечания или задать вопрос службе  <br/> поддержки, пожалуйста, выберите подходящую тему и категорию вашего вопроса из предложенных вариантов:
                </p>
                <p className="help__desc">
                    Кому вы адресуете свое сообщение
                </p>
                <div className="help__inputs">
                        <label className={"help__label"} htmlFor="">
                            <input className={"help__input"} type="radio" id="cat-codding" name={"category"}/>
                            Техническая поддержка
                        </label>
                    <label className={"help__label"} htmlFor="">
                        <input className={"help__input"} type="radio" name={"category"}/>
                        Отдел маркетинга и рекламы
                    </label>
                    <label className={"help__label"} htmlFor="">
                        <input className={"help__input"} type="radio" name={"category"}/>
                        Отдел маркетинга и рекламы
                    </label>
                    <label className={"help__label"} htmlFor="">
                        <input className={"help__input"} type="radio" name={"category"}/>
                        Отдел маркетинга и рекламы
                    </label>
                    <label className={"help__label"} htmlFor="">
                        <input className={"help__input"} type="radio" name={"category"}/>
                        Отдел маркетинга и рекламы
                    </label>
                </div>
                <div className="help__info">
                    <p className="help__desc">
                        Тема
                    </p>
                    <label htmlFor="">
                        <input className={"help__information"} type="text"/>
                    </label>
                    <p className="help__desc">
                        Содержание
                    </p>
                    <label htmlFor="">
                        <textarea className={"help__content"} name="" id="" cols="77" rows="13"></textarea>
                    </label>
                    <p className="help__desc">
                        Имя
                    </p>
                    <label htmlFor="">
                        <input className={"help__information"} type="text"/>
                    </label>
                    <p className="help__desc">
                        Эл. почта
                    </p>
                    <label htmlFor="">
                        <input className={"help__information"} type="email"/>
                    </label>
                </div>
                <button className="help__btn">
                    Отправить
                </button>
            </div>
        </div>
    );
};

export default Help;