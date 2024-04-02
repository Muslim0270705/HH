import React from 'react';
import {Link} from "react-router-dom";

const Abstract = ({setIdPages,idP,setObj,obj}) => {
    const onChange = (e) => {
        setObj({...obj,[e.target.name]: e.target.value})
    }
    return (
        <section className={"abstract"}>

            <div className="container__small">
                <div className={'cv__prog'}>
                    <div style={{background: "#ff4d3a"}}>

                    </div>
                    <div style={{background: "#ff4d3a"}}>

                    </div>
                    <div style={{background: "#ff4d3a"}}>

                    </div>
                    <div>

                    </div>
                    <div>

                    </div>
                </div>
                <p className="abstract__title">
                    В какой компании вы работали?
                </p>
                <input name={"company"} onChange={(e) => onChange(e)} placeholder={"Название компание"} type="text" className="abstract__input"/>

                <p className="abstract__title">
                    На какой должности?
                </p>
                <input name={"positions"} onChange={(e) => onChange(e)} type="text" className="abstract__input"/>

                <p className="abstract__title">
                    Расскажите о ваших обязанностях и достижениях
                </p>
                <textarea name={"positionsDesc"} onChange={(e) => onChange(e)}
                    placeholder={"Например, изучали и анализировали информацию, технические данные, показатели и результаты работы, обобщали и систематизировали их"}
                    className="abstract__textarea"/>
                <div className="abstract__line">

                </div>
                <div className={"cv__btns"}>
                    <button onClick={() => setIdPages(idP - 1)} className="cv__prev">
                        Назад
                    </button>
                    <button onClick={() => {
                        if(obj.profession.length && obj.name.length && obj.lastName.length && obj.tel.length && obj.surname.length && obj.genre.length && obj.positions && obj.positionsDesc && obj.company){
                            setIdPages(idP + 1)
                        }
                    }} className="cv__next">
                        Сохранить и продолжить
                    </button>


                </div>

            </div>
        </section>
    );
};

export default Abstract;