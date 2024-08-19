// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from "axios";

// // Async thunk for handling login
// export const login = createAsyncThunk(
//     "auth/login",
//     async (credentials, { rejectWithValue }) => {
//         try {
//             const response = await axios.post(
//                 "https://autoapi.dezinfeksiyatashkent.uz/api/auth/signin",
//                 credentials
//             );
//             return response.data;
//         } catch (error) {
//             return rejectWithValue(
//                 error.response?.data?.message ||
//                     "Something went wrong, please try again."
//             );
//         }
//     }
// );

// // Slice for managing authentication state
// const authSlice = createSlice({
//     name: "auth",
//     initialState: {
//         user: {
//             phone_number: null,
//             password: null,
//         },
//         token: null,
//         status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
//         error: null,
//     },
//     reducers: {
//         // Reducer for logging out
//         logout: () => {
//             logout: (state) => {
//                 state.user = null;
//                 state.token = null;
//                 state.status = "idle";
//                 state.error = null;
//                 sessionStorage.removeItem("token"); // Clear the token from session storage
//             };
//         },
//     },
//     extraReducers: (builder) => {
//         builder
//             .addCase(login.pending, (state) => {
//                 state.status = "loading";
//                 state.error = null;
//             })
//             .addCase(login.fulfilled, (state, action) => {
//                 state.status = "succeeded";
//                 state.user = action.payload.user;
//                 state.token = action.payload.token;
//                 state.error = null;
//                 sessionStorage.setItem(
//                     "token",
//                     action.payload.data.tokens.accessToken.token
//                 ); // Store token in session storage
//             })
//             .addCase(login.rejected, (state, action) => {
//                 state.status = "failed";
//                 state.error = action.payload;
//             });
//     },
// });

// // Export the logout action for use in components
// export const { logout } = authSlice.actions;

// // Export the auth reducer for use in the store
// export default authSlice.reducer;
// src/routes/PrivateRoute.jsx
// src/features/auth/authSlice.jsx

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Define the login async thunk
export const login = createAsyncThunk(
    "auth/login",
    async (credentials, { rejectWithValue }) => {
        try {
            // Correct API endpoint
            const response = await axios.post(
                "https://autoapi.dezinfeksiyatashkent.uz/api/auth/signin", // Fixed endpoint
                credentials
            );

            // Extract token from response
            const { token } = sessionStorage.setItem(
                "token",
                response.data?.token
            ); // Adjust based on actual response structure
            console.log(token);

            // Save token to sessionStorage
            sessionStorage.setItem("token", token);

            return response.data; // Return the data for further processing
        } catch (error) {
            return rejectWithValue(
                error.response?.data?.message || "Login failed"
            );
        }
    }
);

const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: null,
        token: sessionStorage.getItem("token") || null, // Initialize with token from sessionStorage
        status: "idle",
        error: null,
    },
    reducers: {
        logout: (state) => {
            state.user = null;
            state.token = null;
            state.status = "idle";
            state.error = null;
            sessionStorage.removeItem("token"); // Remove token from sessionStorage
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state) => {
                state.status = "loading";
                state.error = null;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.error = null;
            })
            .addCase(login.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload ? action.payload : "Login failed";
            });
    },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
