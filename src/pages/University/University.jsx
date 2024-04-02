import React from 'react';
import {useDispatch} from "react-redux";
import {postCv} from "../../redux/cv/cv";
import {useNavigate} from "react-router-dom";

const University = ({setIdPages,idP,setObj,obj}) => {
    const onChange = (e) => {
        setObj({...obj,[e.target.name]: e.target.value})
    }
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const postC = () => {
        if(obj.profession.length && obj.name.length && obj.lastName.length && obj.tel.length && obj.surname.length && obj.genre.length && obj.positions && obj.positionsDesc && obj.company && obj.education && obj.yearEnd && obj.specialization && obj.faculty){
            dispatch(postCv(obj)).then(() => navigate("/"))
        }
    }
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
                        <input  name={"education"} onChange={(e) => onChange(e)} className={"university__input"} placeholder={"Название учебного заведения"} type="text"/>
                        <h3 className="university__title">
                            Факультет
                        </h3>
                        <input  name={"faculty"} onChange={(e) => onChange(e)} className={"university__input"} type="text"/>
                        <h3 className="university__title">
                            Специализация
                        </h3>
                        <input  name={"specialization"} onChange={(e) => onChange(e)} className={"university__input"} type="text"/>
                        <h3 className="university__title">
                            Год окончания
                        </h3>
                        <div className="university__years">
                            <input  name={"yearEnd"} onChange={(e) => onChange(e)} className={"university__year"} type="number"/>
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
                            <button onClick={postC} className="cv__next">
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