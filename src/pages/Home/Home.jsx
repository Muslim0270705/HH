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
            <section className="main">
                <div className="container">
                    <div className="main__row">
                        {
                            vacancies.map((item) => (
                                <div className="main__card">
                                    <p className="main__title">
                                        {item.title}
                                    </p>
                                    <p className="main__price">
                                        {
                                            item.money.ask > 0 && item.money.desc > item.money.ask ?
                                                `от $${item.money.ask} до $${item.money.desc}` : item.money.ask === 0 && item.money.desc === 0 ? "Без оплаты" : `до $${item.money.desc}`
                                        }
                                    </p>
                                    <p className="main__exp">
                                        <IoBagRemoveOutline/>
                                        {
                                            item.experience.ask > 0 && item.experience.desc > item.experience.ask ?
                                           `опыт работы: ${item.experience.ask}–${item.experience.desc} года` : item.experience.ask === 0 && item.experience.desc === 0 ? "Без опыта" : `Опыт более ${item.experience.desc} лет`
                                        }
                                    </p>
                                    {
                                        item.work ? <p className="main__home">
                                            Можно из дома
                                        </p> : ""
                                    }
                                    <button className="main__btn">
                                        Откликнуться
                                    </button>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
    );
};

export default Home;