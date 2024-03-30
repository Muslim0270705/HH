import React, {useEffect, useState} from 'react';
import { IoBagRemoveOutline } from "react-icons/io5";
import axios from "axios";


const Home = () => {
    const [vacancies,setVacancies] = useState([])
    const getVacancies = () => {
        axios("http://localhost:4444/vacancies")
            .then(({data}) => setVacancies(data))
            .catch((err) => console.log(err))
    }
    useEffect(() => {
        getVacancies()
    },[])
    return (
            <section className="home">
                <div className="container">
                    <div className="home__row">
                        {
                            vacancies.map((item) => (
                                <div className="home__card">
                                    <p className="home__title">
                                        {item.title}
                                    </p>
                                    <p className="home__price">
                                        {
                                            item.money.ask > 0 && item.money.desc > item.money.ask ?
                                                `от $${item.money.ask} до $${item.money.desc}` : item.money.ask === 0 && item.money.desc === 0 ? "Без оплаты" : `до $${item.money.desc}`
                                        }
                                    </p>
                                    <div className="home__group">
                                        <p className="home__company">
                                            {item.company}
                                        </p>

                                        <p className="home__city">
                                            {item.location}
                                        </p>
                                    </div>

                                    <p className="home__exp">
                                        <IoBagRemoveOutline/>
                                        {
                                            item.experience.ask > 0 && item.experience.desc > item.experience.ask ?
                                           `опыт работы: ${item.experience.ask}–${item.experience.desc} года` : item.experience.ask === 0 && item.experience.desc === 0 ? "Без опыта" : `Опыт более ${item.experience.desc} лет`
                                        }
                                    </p>
                                    {
                                        item.work ? <p className="home__house">
                                            Можно из дома
                                        </p> : ""
                                    }
                                    <div className="home__btns">
                                        <button className="home__btn">
                                            Откликнуться
                                        </button>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
    );
};

export default Home;