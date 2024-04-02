import {configureStore} from "@reduxjs/toolkit";
import vacancies from "./vacancies/vacancies"
import reviews from "./help/reviews"
import auth from "./auth/auth"
import works from "./works/works"
import cv from "./cv/cv"
export const store = configureStore({
    reducer:{
        vacancies,
        reviews,
        auth,
        works,
        cv
    }
})