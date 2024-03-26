import React from 'react';

const Response = () => {
    return (
        <section className={"response"}>
            <div className="container">
                <h2 className="response__title">Отклики и приглашения</h2>
                <div className="response__links">
                    <a className="response__links-link" href="">Активные</a>
                    <a className="response__links-link" href="">Все отклики</a>
                </div>
                <p className="response__desc">У вас нет активных откликов.</p>
                <p className="response__wacansies">Вам подойдут эти вакансии</p>
                <div className="response__wacans">
                    <a className="response__wacans-name" href="">Вечерняя подработка (курьер на 1-3 часа ) — товары для дома, аптека, малогабаритные
                    </a>
                    <p className="response__wacans-price">42 800 - 52 800</p>
                    <p className="response__wacans-company">Курьерская служба Смарт</p>
                    <p className="response__wacans-location">Бишкек</p>
                    <p className="response__wacans-experience">Требуемый опыт работы: не требуется</p>
                    <a className="response__wacans-respond" href="">Отклик без резюме</a>
                    <a className="response__wacans-responds" href="">Откликнитесь среди первых</a>
                    <p className="response__wacans-decs">Оперативная доставка товаров для дома, аптек, мелких посылок и ультима-заказов.
                        Поддержание высокого уровня сервиса и дружелюбное общение с клиентами. <br/> Наличие смартфона с доступом в интернет.
                        Позитивный настрой и желание работать.
                    </p>
                    <div className="response__btns">
                        <button className="response__btns-btn"> Откликнуться</button>
                        <button className="response__btns-btm">Показать контакты</button>
                    </div>
                </div>
                <br/>
                <div className="response__wacans">
                    <a className="response__wacans-name" href="">Вечерняя подработка (курьер на 1-3 часа ) — товары для дома, аптека, малогабаритные
                    </a>
                    <p className="response__wacans-price">42 800 - 52 800</p>
                    <p className="response__wacans-company">Курьерская служба Смарт</p>
                    <p className="response__wacans-location">Бишкек</p>
                    <p className="response__wacans-experience">Требуемый опыт работы: не требуется</p>
                    <a className="response__wacans-respond" href="">Отклик без резюме</a>
                    <a className="response__wacans-responds" href="">Откликнитесь среди первых</a>
                    <p className="response__wacans-decs">Оперативная доставка товаров для дома, аптек, мелких посылок и ультима-заказов.
                        Поддержание высокого уровня сервиса и дружелюбное общение с клиентами. <br/> Наличие смартфона с доступом в интернет.
                        Позитивный настрой и желание работать.
                    </p>
                    <div className="response__btns">
                        <button className="response__btns-btn"> Откликнуться</button>
                        <button className="response__btns-btm">Показать контакты</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Response;