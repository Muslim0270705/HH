import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getWorks} from "../../redux/works/works";

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
                        <button className="cv__next">
                            Сохранить и продолжить
                        </button>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default NewCv;