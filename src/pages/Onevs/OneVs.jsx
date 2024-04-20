import React, {useEffect} from 'react';
import {Link, useParams} from "react-router-dom";
import {IoBagRemoveOutline} from "react-icons/io5";
import {useDispatch, useSelector} from "react-redux";
import {getOneVacancies, getVacancies, patchVacancies} from "../../redux/vacancies/vacancies";
import {getMyCv} from "../../redux/myCv/myCv";

const OneVs = () => {
    const {oneV} = useSelector(store => store.vacancies)
    const dispatch = useDispatch()
    const {id} = useParams()
    useEffect(() => {
        dispatch(getOneVacancies(id))
    },[])
    return (
        <section className={"onecv"}>
            <div className="container">
                <div className="home__row">
                    {
                        oneV?.users?.map(item => (
<<<<<<< HEAD
                            <Link to={`/resume/${item.id}`} className="home__card">
                                <p className="home__title">
                                    {item.name}
                                </p>
                                <p>
                                    {item.profession}
=======
                            <Link to={`/description/${item.id}`} className="home__card">
                                <p className="home__profession">
                                    {item.profession}
                                </p>
                                <p className="home__title">
                                    {item.name}
                                </p>
                                <p className="home__lastName">
                                    {item.lastName}
                                </p>
                                <p className="home__surName">
                                    {item.surname}
                                </p>
                                <p className="home__genre">
                                    {item.genre}
>>>>>>> 9a14cef3b35f7b747ceaa6bc5859e27f7ef75850
                                </p>
                                <div className="home__group">
                                    <p className="home__company">
                                        {item.company}
                                    </p>
                                </div>

                                <p className="home__exp">
                                    <IoBagRemoveOutline/>
                                    {item.yearEnd}
                                </p>

                                <div className="home__btns">
                                    <button className="home__btn">
                                        Откликнуться
                                    </button>
                                </div>
                            </Link>
                        ))
                    }

                </div>
            </div>
        </section>
    );
};

export default OneVs;