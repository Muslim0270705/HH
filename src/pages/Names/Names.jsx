import React from 'react';

const Names = ({setIdPages,idP,setObj,obj}) => {
    const onChange = (e) => {
        setObj({...obj,[e.target.name]: e.target.value})
    }
    return (
        <section className="cv">
            <div className="container__small">
                <div className="cv__shadow">
                    <p className="names__title">Резюме «Аналитик»</p>
                    <div className={'cv__prog'}>
                        <div style={{background: "#ff4d3a"}}>

                        </div>
                        <div style={{background: "#ff4d3a"}}>

                        </div>
                        <div>

                        </div>
                        <div>

                        </div>
                        <div>

                        </div>
                    </div>
                    <div className="names__name">
                        <h3 className="names__name-text">Фамилия</h3>
                        <input name={"lastName"} onChange={(e) => onChange(e)}  className="names__name-first" type={"text"}></input>
                        <h3 className="names__name-text">Имя</h3>
                        <input name={"name"} value={obj.name}  className="names__name-last" type="text"/>
                        <h3 className="names__name-text">Отчество</h3>
                        <input name={"surname"} onChange={(e) => onChange(e)}  className="names__name-surname" type="text"/>
                    </div>
                    <h3 className="names__name-text">Пол</h3>
                    <div className="names__btn">
                        <button name={"genre"} value={"man"} onClick={(e) => onChange(e)}  className="names__btn-man">Мужской</button>
                        <button name={"genre"} value={"woman"} onClick={(e) => onChange(e)}  className="names__btn-wooman">Женский</button>
                    </div>
                    <div className="names__number">
                        <h3 className="names__name-text">Ваш номер</h3>
                        <input name={"tel"} onChange={(e) => onChange(e)} className="names__number-input" type="number"/>
                    </div>
                    <div className={"cv__btns"}>
                        <button onClick={() => setIdPages(idP - 1)} className="cv__prev">
                            Назад
                        </button>
                        <button onClick={() => {
                            if(obj.profession.length && obj.name.length && obj.lastName.length && obj.tel.length && obj.surname.length && obj.genre.length){
                                setIdPages(idP + 1)
                            }
                        }} className="cv__next">
                            Сохранить и продолжить
                        </button>


                    </div>
                </div>
            </div>
        </section>
    );
};

export default Names;