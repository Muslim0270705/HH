import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../utils/axios";


export const getMyCv = createAsyncThunk(
    "myCv/getMyCv",
    async (_, { rejectWithValue }) => {
        try {
            const myName = JSON.parse(localStorage.getItem("user")).user.name
            const res = await axios(`/cv?name=${myName}`);
            if (res.status !== 200) {
                throw new Error("Server error !");
            }
            return res.data;
        } catch (err) {
            return rejectWithValue(err.message);
        }
    }
);
export const updateMyCv = createAsyncThunk(
    "myCv/updateMyCv",
    async (item, { rejectWithValue }) => {
        try {
            const res = await axios.patch(`/cv/${item.id}`,item);
            if (res.status !== 200) {
                throw new Error("Server error !");
            }
            return res.data;
        } catch (err) {
            return rejectWithValue(err.message);
        }
    }
);
export const getOneMyCv = createAsyncThunk(
    "myCv/getOneMyCv",
    async (id, { rejectWithValue }) => {
        try {
            const res = await axios(`/cv/${id}`);
            if (res.status !== 200) {
                throw new Error("Server error !");
            }
            return res.data;
        } catch (err) {
            return rejectWithValue(err.message);
        }
    }
);


const myCvSlice = createSlice({
    name: "myCv",
    initialState: {
        data: [],
        cv:[],
        oneCv:{},
        list:[],
        status: "",
        error: "",
        dataLength: 0,
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(getMyCv.pending, (state, action) => {
                state.status = "loading";
                state.error = "";
            })
            .addCase(getMyCv.rejected, (state, action) => {
                state.status = "error";
                state.error = action.payload;
            })
            .addCase(getMyCv.fulfilled, (state, action) => {
                state.status = "resolve";
                state.error = "";
                state.data = action.payload;
                state.cv = action.payload;
                state.dataLength = action.payload.length;
            })
            .addCase(updateMyCv.pending, (state, action) => {
                state.status = "loading";
                state.error = "";
            })
            .addCase(updateMyCv.rejected, (state, action) => {
                state.status = "error";
                state.error = action.payload;
            })
            .addCase(updateMyCv.fulfilled, (state, action) => {
                state.status = "resolve";
                state.error = "";
                state.data = state.data.map(item => item.id === action.payload.id ? action.payload : item);
                state.cv = state.cv.map(item => item.id === action.payload.id ? action.payload : item);
                state.dataLength = action.payload.length;
            })
            .addCase(getOneMyCv.pending, (state, action) => {
                state.status = "loading";
                state.error = "";
            })
            .addCase(getOneMyCv.rejected, (state, action) => {
                state.status = "error";
                state.error = action.payload;
            })
            .addCase(getOneMyCv.fulfilled, (state, action) => {
                state.status = "resolve";
                state.error = "";
                state.oneCv = action.payload;
                state.dataLength = action.payload.length;
            });
    },
});

export default myCvSlice.reducer;
