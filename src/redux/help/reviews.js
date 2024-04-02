import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../utils/axios";


export const postReviews = createAsyncThunk(
    "reviews/postReviews",
    async (review, { rejectWithValue }) => {
        try {
            const res = await axios.post("/reviews",review);
            if (res.status !== 200) {
                throw new Error("Server error !");
            }
            return res.data;
        } catch (err) {
            return rejectWithValue(err.message);
        }
    }
);


const reviewsSlice = createSlice({
    name: "reviews",
    initialState: {
        data: [],
        status: "",
        error: "",
        dataLength: 0,
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(postReviews.pending, (state, action) => {
                state.status = "loading";
                state.error = "";
            })
            .addCase(postReviews.rejected, (state, action) => {
                state.status = "error";
                state.error = action.payload;
            })
            .addCase(postReviews.fulfilled, (state, action) => {
                state.status = "resolve";
                state.error = "";
                state.data = action.payload;
                state.dataLength = action.payload.length;
            });
    },
});

export default reviewsSlice.reducer;
