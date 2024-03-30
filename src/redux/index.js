import {configureStore} from "@reduxjs/toolkit";
import vacancies from "./vacancies/vacancies"
import reviews from "./help/reviews"
import auth from "./auth/auth"
export const store = configureStore({
    reducer:{
        vacancies,
        reviews,
        auth
    }
})