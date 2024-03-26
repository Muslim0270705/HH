import React, {useState} from 'react';
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';
import {useNavigate} from "react-router-dom";
const Help = () => {
    const [review,setReview] = useState({
        id:uuidv4(),
        title:"",
        desc:"",
        name:"",
        email:'',
        category: {
            id: 1,
            name: ""
        }
    })
    const navigate = useNavigate()
    const postReview = (e) => {
        e.preventDefault()
        if(review.title && review.desc && review.name && review.email && review.category.name){
            axios.post("http://localhost:4444/reviews",review)
                .then((res) => {
                    console.log(res)
                    navigate("/")
                })
                .catch((err) => console.log(err))
        }
        else{
            alert("Заполните все поля")
        }
    }
    const onChange = (e) => {
        setReview({...review,[e.target.name]:e.target.value})
    }
    const onChangeC = (e) => {
        setReview({...review,category:{
                id:e.target.id,
                name:e.target.value
            }})
    }
    return (
        <div className={"help"}>
            <div className="container">
                <h2 className="help__title">
                    Пишите нам!
                </h2>
                <p className="help__text">
                    Если вы хотите подсказать нам, как улучшить наш сайт, высказать ваши замечания или задать вопрос службе  <br/> поддержки, пожалуйста, выберите подходящую тему и категорию вашего вопроса из предложенных вариантов:
                </p>
                <p className="help__desc">
                    Кому вы адресуете свое сообщение
                </p>
                <div className="help__inputs">
                        <label className={"help__label"} htmlFor="">
                            <input onChange={(e) => onChangeC(e)}  className={"help__input"} value={"Техническая поддержка"}  type="radio" id="1" name={"category}"}/>
                            Техническая поддержка
                        </label>
                    <label className={"help__label"} htmlFor="">
                        <input onChange={(e) => onChangeC(e)} value={"Отдел маркетинга и рекламы"} className={"help__input"} type="radio" id="2"   name={"category"}/>
                        Отдел маркетинга и рекламы
                    </label>
                    <label className={"help__label"} htmlFor="">
                        <input onChange={(e) => onChangeC(e)} value={"Отдел маркетинга и рекламы"} className={"help__input"} type="radio" id="3"  name={"category"}/>
                        Отдел маркетинга и рекламы
                    </label>
                    <label className={"help__label"} htmlFor="">
                        <input onChange={(e) => onChangeC(e)} value={"Отдел маркетинга и рекламы"} className={"help__input"} type="radio" id="4"  name={"category"}/>
                        Отдел маркетинга и рекламы
                    </label>
                    <label className={"help__label"} htmlFor="">
                        <input onChange={(e) => onChangeC(e)} value={"Отдел маркетинга и рекламы"} className={"help__input"} type="radio" id="5"  name={"category"}/>
                        Отдел маркетинга и рекламы
                    </label>
                </div>
                <form onSubmit={(e) => postReview(e)} className="help__info">
                    <p className="help__desc">
                        Тема
                    </p>
                    <label htmlFor="">
                        <input onChange={(e) => onChange(e)} name={"title"} className={"help__information"}
                               type="text"/>
                    </label>
                    <p className="help__desc">
                        Содержание
                    </p>
                    <label htmlFor="">
                        <textarea onChange={(e) => onChange(e)} name={"desc"} className={"help__content"} id=""
                                  cols="77" rows="13"></textarea>
                    </label>
                    <p className="help__desc">
                        Имя
                    </p>
                    <label htmlFor="">
                        <input onChange={(e) => onChange(e)} name={"name"} className={"help__information"} type="text"/>
                    </label>
                    <p className="help__desc">
                        Эл. почта
                    </p>
                    <label htmlFor="">
                        <input onChange={(e) => onChange(e)} name={"email"} className={"help__information"}
                               type="email"/>
                    </label>
                    <br/>
                    <button className="help__btn">
                        Отправить
                    </button>
                </form>

            </div>
        </div>
    );
};

export default Help;