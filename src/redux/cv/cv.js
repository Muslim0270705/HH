import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../utils/axios";


export const postCv = createAsyncThunk(
    "cv/postCv",
    async (obj, { rejectWithValue }) => {
        try {
            const res = await axios.post("/cv",obj);
            if (res.status !== 200) {
                throw new Error("Server error !");
            }
            return res.data;
        } catch (err) {
            return rejectWithValue(err.message);
        }
    }
);


const cvSlice = createSlice({
    name: "cv",
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
            .addCase(postCv.pending, (state, action) => {
                state.status = "loading";
                state.error = "";
            })
            .addCase(postCv.rejected, (state, action) => {
                state.status = "error";
                state.error = action.payload;
            })
            .addCase(postCv.fulfilled, (state, action) => {
                state.status = "resolve";
                state.error = "";
                state.data = action.payload;
                state.dataLength = action.payload.length;
            });
    },
});

export default cvSlice.reducer;
