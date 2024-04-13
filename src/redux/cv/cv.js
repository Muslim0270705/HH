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
export const getCv = createAsyncThunk(
    "cv/getCv",
    async (obj, { rejectWithValue }) => {
        try {
            const res = await axios("/cv");
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
                state.data = [...state.data,action.payload];
                state.dataLength = action.payload.length;
            })
            .addCase(getCv.pending, (state, action) => {
                    state.status = "loading";
                    state.error = "";
                })
            .addCase(getCv.rejected, (state, action) => {
                state.status = "error";
                state.error = action.payload;
            })
            .addCase(getCv.fulfilled, (state, action) => {
                state.status = "resolve";
                state.error = "";
                state.data = action.payload;
                state.dataLength = action.payload.length;
            });
    },
});

export default cvSlice.reducer;
