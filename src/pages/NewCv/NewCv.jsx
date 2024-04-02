import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getWorks} from "../../redux/works/works";
<<<<<<< HEAD
import { Link } from 'react-router-dom';
=======
import {Link} from "react-router-dom";
>>>>>>> 16ed821eae67ee9f33fdb6d5fe8ce5c07613ba09

const NewCv = () => {
    const [value,setValue] = useState("")
    const {data} = useSelector(store => store.works)
    const dispatch = useDispatch()
    const [idP,setIdPages] = useState(1)
    useEffect(() => {
        dispatch(getWorks())
    },[])

    return (
        <section className={"cv"}>
            <div className="container__small">
                <div className="cv__shadow">
                    <h2 className={"cv__title"}>
                        Кем вы хотите работать?
                    </h2>
                    <div className={'cv__prog'}>
                        <div>

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
                    <input value={value} onChange={(e) => setValue(e.target.value)} className={"cv__input"} type="text"/>
                    <div className="cv__row">
                        {
                            data.map(item => (
                                <div key={item.id} onClick={() => setValue(item.title)} className="cv__card">
                                    {item.title}
                                </div>
                            ))
                        }

                    </div>
                    <div className={"cv__btns"}>
                        <button className="cv__prev">
                            Назад
                        </button>
<<<<<<< HEAD
                        <Link to={"/abstract"}>
=======
                        <Link to={"/names"}>
>>>>>>> 16ed821eae67ee9f33fdb6d5fe8ce5c07613ba09
                            <button className="cv__next">
                                Сохранить и продолжить
                            </button>
                        </Link>
<<<<<<< HEAD
=======

>>>>>>> 16ed821eae67ee9f33fdb6d5fe8ce5c07613ba09
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NewCv;