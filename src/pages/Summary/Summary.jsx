import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getMyCv, updateMyCv} from "../../redux/myCv/myCv";

const Summary = () => {
    const {data} = useSelector(store => store.myCv)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getMyCv())
    },[])
    return (
        <div className={"summary"}>
            <div className="container">
                <div className="summary__nav">
                    <h3 className="summary__title">
                        Мои резюме
                    </h3>
                    <button className="summary__btn">
                        Создать резюме
                    </button>
                </div>
               <div className="summary__row">
                   <div className="summary__square">

                   </div>
                   <p className="summary__text">
                       Рассматриваю предложения
                   </p>
                       <a href="">
                           Изменить
                       </a>
               </div>
                <div className="summary__card-1">
                        <div className="summary__circle">
                            0/10
                        </div>
                    <div className="summary__info">
                        <h3 className="summary__subtitle">
                            Откликнитесь ещё 10 раз
                        </h3>
                        <p className="summary__texts">
                            По статистике для одного приглашения требуется около <br/> десяти откликов
                        </p>
                        <a href="#">
                            Подходящие для отклика вакансии
                        </a>
                    </div>

                </div>
                <div className="summary__cards">
                    {
                        data.map(item => (
                            <div className="summary__card" onClick={() => dispatch(updateMyCv({...item,views:item.views + 1}))}>
                                <a className={"summary__titles"} href="#">
                                    {item.profession}
                                </a>
                                <p className="summary__data">
                                    Обновлено 23 марта 2024 в 19:13
                                </p>
                                <p className="summary__desc">
                                    Статистика за неделю
                                </p>
                                <div className="summary__statistics">
                                    <p className="summary__statistic"><span>3</span> показа</p>
                                    <div className="summary__vl"></div>
                                    <p className="summary__statistic"><span>{item.views}</span> просмотра</p>
                                    <div className="summary__vl"></div>
                                    <p className="summary__statistic"><span>0</span> приглашений</p>
                                </div>
                                <div className="summary__btns">
                                    <button className="summary__click">
                                        Поднять в поиске
                                    </button>
                                    <button className="summary__vacancies">
                                        234 вакансий
                                    </button>
                                </div>
                                <div className="summary__settings">
                                    <a href=""> Поднять в поиске</a>
                                    <a href=""> Изменить видимость</a>
                                    <a href=""> Редактировать</a>
                                    <a href=""> Дублировать</a>
                                </div>
                            </div>
                        ))
                    }
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
        </div>

    );
};

export default Summary;