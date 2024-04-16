import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../utils/axios";


export const getVacancies = createAsyncThunk(
    "vacancies/getVacancies",
    async (_, { rejectWithValue }) => {
        try {
            const res = await axios.get("/vacancies");
            console.log(res.data,123)
            if (res.status !== 200) {
                throw new Error("Server error !");
            }
            return res.data;
        } catch (err) {
            return rejectWithValue(err.message);
        }
    }
);
export const patchVacancies = createAsyncThunk(
    "vacancies/patchVacancies",
    async (item, { rejectWithValue }) => {
        try {
            const res = await axios.patch(`/vacancies/${item.id}`,item);
            console.log(123)
            if (res.status !== 200) {
                throw new Error("Server error !");
            }
            return res.data;
        } catch (err) {
            return rejectWithValue(err.message);
        }
    }
);
export const getOneVacancies = createAsyncThunk(
    "vacancies/getOneVacancies",
    async (id, { rejectWithValue }) => {
        try {
            const res = await axios.get(`/vacancies/${id}`);
            console.log(res.data,123)
            if (res.status !== 200) {
                throw new Error("Server error !");
            }
            return res.data;
        } catch (err) {
            return rejectWithValue(err.message);
        }
    }
);


const vacanciesSlice = createSlice({
    name: "vacancies",
    initialState: {
        data: [],
        status: "",
        oneV:{},
        error: "",
        dataLength: 0,
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(getVacancies.pending, (state, action) => {
                state.status = "loading";
                state.error = "";
            })
            .addCase(getVacancies.rejected, (state, action) => {
                state.status = "error";
                state.error = action.payload;
            })
            .addCase(getVacancies.fulfilled, (state, action) => {
                state.status = "resolve";
                state.error = "";
                state.data = action.payload;
                state.dataLength = action.payload.length;
            })
            .addCase(getOneVacancies.pending, (state, action) => {
                    state.status = "loading";
                    state.error = "";
                })
            .addCase(getOneVacancies.rejected, (state, action) => {
                state.status = "error";
                state.error = action.payload;
            })
            .addCase(getOneVacancies.fulfilled, (state, action) => {
                state.status = "resolve";
                state.error = "";
                state.oneV = action.payload;
                state.dataLength = action.payload.length;
            })
            .addCase(patchVacancies.pending, (state, action) => {
                    state.status = "loading";
                    state.error = "";
                })
            .addCase(patchVacancies.rejected, (state, action) => {
                state.status = "error";
                state.error = action.payload;
            })
            .addCase(patchVacancies.fulfilled, (state, action) => {
                state.status = "resolve";
                state.error = "";
                state.data = state.data.map(item => item.id == action.payload.id ? action.payload : item);
                state.dataLength = action.payload.length;
            });
    },
});

export default vacanciesSlice.reducer;
