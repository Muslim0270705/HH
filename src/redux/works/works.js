import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../utils/axios";


export const getWorks = createAsyncThunk(
    "works/getWorks",
    async (_, { rejectWithValue }) => {
        try {
            const res = await axios.get("/works");
            if (res.status !== 200) {
                throw new Error("Server error !");
            }
            return res.data;
        } catch (err) {
            return rejectWithValue(err.message);
        }
    }
);


const worksSlice = createSlice({
    name: "works",
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
            .addCase(getWorks.pending, (state, action) => {
                state.status = "loading";
                state.error = "";
            })
            .addCase(getWorks.rejected, (state, action) => {
                state.status = "error";
                state.error = action.payload;
            })
            .addCase(getWorks.fulfilled, (state, action) => {
                state.status = "resolve";
                state.error = "";
                state.data = action.payload;
                state.dataLength = action.payload.length;
            });
    },
});

export default worksSlice.reducer;
