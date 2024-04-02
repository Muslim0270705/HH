import React from 'react';

const University = ({setIdPages,idP}) => {
    return (
        <div className={"university"}>
            <div className="container__small">
                <div className="university__shadow">
                    <div className="university__row">
                        <div className={'cv__prog'}>
                            <div style={{background: "#ff4d3a"}}>

                            </div>
                            <div style={{background: "#ff4d3a"}}>

                            </div>
                            <div style={{background: "#ff4d3a"}}>

                            </div>
                            <div style={{background: "#ff4d3a"}}>

                            </div>
                            <div style={{background: "#ff4d3a"}}>

                            </div>
                        </div>
                        <h2 className="university__title">
                            Название учебного заведения
                        </h2>
                        <input className={"university__input"} placeholder={"Название учебного заведения"} type="text"/>
                        <h3 className="university__title">
                            Факультет
                        </h3>
                        <input className={"university__input"} type="text"/>
                        <h3 className="university__title">
                            Специализация
                        </h3>
                        <input className={"university__input"} type="text"/>
                        <h3 className="university__title">
                            Год окончания
                        </h3>
                        <div className="university__years">
                            <input className={"university__year"} type="number"/>
                            <p className="university__subtitle">
                                Если ещё учитесь, укажите год <br/> предполагаемого окончания
                            </p>
                        </div>
                        <button className="university__btn">
                            Добавить еще учебное заведение
                        </button>
                        <div className={"cv__btns"}>
                            <button onClick={() => setIdPages(idP - 1)} className="cv__prev">
                                Назад
                            </button>
                            <button className="cv__next">
                                Создать
                            </button>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default University;