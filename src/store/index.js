// src/app/store.js
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slice/authSlice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
    },
});

// // src/components/Dashboard.jsx
// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { logout } from '../features/auth/authSlice';

// const Dashboard = () => {
//   const { user } = useSelector((state) => state.auth);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     dispatch(logout());
//     navigate('/login');
//   };

//   return (
//     <div className="p-4">
//       <h1 className="text-2xl font-bold mb-4">Welcome to Dashboard</h1>
//       {user && <p>Hello, {user.name}</p>}
//       <button
//         onClick={handleLogout}
//         className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4"
//       >
//         Logout
//       </button>
//     </div>
//   );
// };

// export default Dashboard;
