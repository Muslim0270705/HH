import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getCv} from "../../redux/cv/cv";
import {updateMyCv} from "../../redux/myCv/myCv";

const AdminPanel = () => {
    const {data} = useSelector(store => store.cv)
    const dispatch = useDispatch()
    const [active,setActive] = useState("")
    const [valueCompany,setValueCompany] = useState('')
    useEffect(() => {
        dispatch(getCv())
    },[])
    return (
        <section className={"admin"}>
            <div className="container">
                <div className="admin__row">
                    {
                        data.map(item => (
                            <div className={"admin__card"}>
                                <h2>{item.name}</h2>
                                <div>
                                    {
                                        active === item.id ? <div>
                                            <input type="text" onChange={(e) => setValueCompany(e.target.value)}/>
                                            <button onClick={() => {
                                                if(valueCompany.length) {
                                                    dispatch(updateMyCv({...item, company: valueCompany}))
                                                    setActive("")
                                                    setTimeout(() => {
                                                        dispatch(getCv())
                                                    },1000)

                                                }
                                            }}>
                                                edit
                                            </button>
                                        </div> : <p>
                                        {item.company}
                                        </p>
                                    }
                                    <br/>
                                    <button className="admin__edit" onClick={() => setActive(item.id)}>
                                        изменить
                                    </button>
                                </div>
                                <hr/>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default AdminPanel;