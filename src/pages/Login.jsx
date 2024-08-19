import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { login } from "../store/slice/authSlice";

const Login = () => {
    const [phoneNumber, setPhoneNumber] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch(); // Dispatch kerak
    const navigate = useNavigate();
    const { status, error } = useSelector((state) => state.auth);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!phoneNumber || !password) {
            toast.error("Please fill in all fields");
            return;
        }

        try {
            const resultAction = await dispatch(
                login({ phone_number: phoneNumber, password: password })
            );

            if (login.fulfilled.match(resultAction)) {
                toast.success("Login successful!");
                navigate("/dashboard");
            } else if (login.rejected.match(resultAction)) {
                toast.error(resultAction.payload?.message || "Login failed");
            }
        } catch (err) {
            toast.error("An error occurred");
        }
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <ToastContainer />
            <form
                onSubmit={handleSubmit}
                className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
            >
                <div className="mb-4">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="phoneNumber"
                    >
                        Phone Number
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="phoneNumber"
                        type="tel"
                        placeholder="Phone Number"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                </div>
                <div className="mb-6">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="password"
                    >
                        Password
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        id="password"
                        type="password"
                        placeholder="******************"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="flex items-center justify-between">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                        disabled={status === "loading"}
                    >
                        {status === "loading" ? "Loading..." : "Sign In"}
                    </button>
                </div>
                {error && (
                    <p className="text-red-500 text-xs italic mt-4">{error}</p>
                )}
            </form>
        </div>
    );
};

export default Login;
