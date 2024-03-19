import React from 'react';
import { IoBagRemoveOutline } from "react-icons/io5";


const Home = () => {
    return (
        <main>
            <section className="main">
                <div className="container">
                    <p className="main__desc">
                        Senior Frontend Developer (Vue.Js)
                    </p>
                    <p className="main__price">
                        4 000 $
                    </p>
                    <p className="main__exp">
                        <IoBagRemoveOutline />
                        Опыт более 6 лет
                    </p>
                    <button className="main__home">
                        Можно из дома
                    </button>
                    <button className="main__btn">
                        Откликнуться
                    </button>
                </div>
            </section>
        </main>
    );
};

export default Home;