import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getWorks} from "../../redux/works/works";
import { Link } from 'react-router-dom';
import Names from "../Names/Names";
import Level from "../Level/Level";
import University from "../University/University";
import {getUser} from "../../redux/auth/auth";
import Abstract from "../Abstract/Abstract";
import { v4 as uuidv4 } from 'uuid';


const NewCv = () => {
    const {data} = useSelector(store => store.works)
    const dispatch = useDispatch()
    const [idP,setIdPages] = useState(1)
    const [obj,setObj] = useState({
        id:uuidv4(),
        profession:"",
        name:"",
        lastName:"",
        surname:"",
        genre:"",
        tel:"",
        company:"",
        positions:"",
        positionsDesc:"",
        education:"",
        educationalInstitution:"",
        faculty:"",
        specialization:"",
        yearEnd:""

    })
    console.log(obj)
    useEffect(() => {
        dispatch(getWorks())
        dispatch(getUser())
        setIdPages(1)
    },[])
    return (
        <>
            {
                idP === 1 ? <section className={"cv"}>
                        <div className="container__small">
                            <div className="cv__shadow">
                                <h2 className={"cv__title"}>
                                    Кем вы хотите работать?
                                </h2>
                                <div className={'cv__prog'}>
                                    <div style={{background: "#ff4d3a"}}>

                                    </div>
                                    <div>

                                    </div>
                                    <div>

                                    </div>
                                    <div>

                                    </div>
                                    <div>

                                    </div>
                                </div>
                                <h3 className={"cv__prof"}>
                                    Профессия
                                </h3>
                                <input value={obj.profession} onChange={(e) => setObj({...obj,profession:e.target.value})} className={"cv__input"} type="text"/>
                                <div className="cv__row">
                                    {
                                        data.map(item => (
                                            <div key={item.id} onClick={() => setObj({...obj,profession:item.title})} className="cv__card">
                                                {item.title}
                                            </div>
                                        ))
                                    }
                                </div>
                                <div className={"cv__btns"}>

                                    <button onClick={() => {
                                        if(obj.profession.length){
                                            setIdPages(idP + 1)
                                        }
                                    }} className="cv__next">
                                            Сохранить и продолжить
                                   </button>


                                </div>

                            </div>
                        </div>
                    </section>
                    : idP === 2 ? <Names setObj={setObj} obj={obj} setIdPages={setIdPages} idP={idP}/>
                    : idP === 3 ? <Abstract setObj={setObj} obj={obj} setIdPages={setIdPages} idP={idP}/>
                    : idP === 4 ? <Level setObj={setObj} obj={obj} setIdPages={setIdPages} idP={idP}/>
                    : idP === 5 ?  <University setObj={setObj} obj={obj} setIdPages={setIdPages} idP={idP}/>
                    : <p>Страница не найдена</p>
            }
        </>
    );
};

export default NewCv;