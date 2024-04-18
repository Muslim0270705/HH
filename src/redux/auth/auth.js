import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const register = createAsyncThunk(
    "auth/register",
    async (userL, { rejectWithValue }) => {
        try {
            const res = await axios.post("https://storedb.onrender.com/register",userL);
            return res.data;
        } catch (err) {
            return rejectWithValue(err.message);
        }
    }
);
export const getUser = createAsyncThunk(
    "auth/getUser",
    async (userL, { rejectWithValue }) => {
        try {
            const res = await axios("https://storedb.onrender.com/users");
            return res.data;
        } catch (err) {
            return rejectWithValue(err.message);
        }
    }
);
export const login = createAsyncThunk(
    "auth/login",
    async (userL, { rejectWithValue }) => {
        try {
            const res = await axios.post("https://storedb.onrender.com/login",userL);
            return res.data;
        } catch (err) {
            return rejectWithValue(err.message);
        }
    }
);


const authSlice = createSlice({
    name: "auth",
    initialState: {
        data: JSON.parse(localStorage.getItem("user")),
        user:JSON.parse(localStorage.getItem("user")),
        status: "",
        error: "",
        users:"",
        dataLength: 0,
    },
    reducers: {
        logout: (state,{payload}) => {
            state.data = null
            localStorage.removeItem("user")
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(register.pending, (state, action) => {
                state.status = "loading";
                state.error = "";
            })
            .addCase(register.rejected, (state, action) => {
                state.status = "error";
                state.error = action.payload;
            })
            .addCase(register.fulfilled, (state, action) => {
                state.status = "resolve";
                state.error = "";
                state.data = action.payload;
                state.user = action.payload;
                state.dataLength = action.payload.length;
                localStorage.setItem("user",JSON.stringify(action.payload))
            })
            .addCase(login.pending, (state, action) => {
                state.status = "loading";
                state.error = "";
            })
            .addCase(login.rejected, (state, action) => {
                state.status = "error";
                state.error = action.payload;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.status = "resolve";
                state.error = "";
                state.data = action.payload;
                state.user = action.payload;
                state.dataLength = action.payload.length;
                localStorage.setItem("user",JSON.stringify(action.payload))
            })
            .addCase(getUser.pending, (state, action) => {
                state.status = "loading";
                state.error = "";
            })
            .addCase(getUser.rejected, (state, action) => {
                state.status = "error";
                state.error = action.payload;
            })
            .addCase(getUser.fulfilled, (state, action) => {
                state.status = "resolve";
                state.error = "";
                state.user = action.payload;
            });
    },
});
export const {logout} = authSlice.actions
export default authSlice.reducer;
