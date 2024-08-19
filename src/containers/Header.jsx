import { AnimatePresence, motion } from "framer-motion";
import { Mail, Minimize2, Settings, User } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { logout } from "../store/slice/authSlice";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const handleLogout = () => {
        dispatch(logout()); // Clear Redux state
        sessionStorage.removeItem("token"); // Remove token from sessionStorage
        navigate("/login"); // Redirect to login page
    };

    return (
        <div className="fixed top-0 left-[300px] w-[calc(100%-300px)] z-50 bg-blue-500/50 border-l-2 h-24 shadow-md">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-24">
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Link
                            to="/"
                            className="text-3xl font-bold underline text-black"
                        >
                            Dashboard
                        </Link>
                    </motion.div>
                    <div className="flex items-center space-x-4 relative">
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="text-black cursor-pointer"
                            onClick={toggleSidebar}
                        >
                            <Mail size={24} />
                        </motion.div>
                        <div className="relative">
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 0.5 }}
                                onClick={toggleMenu}
                                className="cursor-pointer"
                            >
                                <img
                                    src="https://avatar.iran.liara.run/public/boy"
                                    alt="User Avatar"
                                    className="w-10 h-10 rounded-full border-2 border-black"
                                />
                            </motion.div>

                            {/* Dropdown Menu */}
                            <AnimatePresence>
                                {isMenuOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute right-0 mt-2 w-48 bg-white shadow-lg z-50"
                                    >
                                        <Link
                                            to="/profile"
                                            className="flex gap-3 px-4 py-2 text-gray-800 hover:bg-gray-100"
                                        >
                                            <User className="w-6 h-6" />
                                            <span>Profile</span>
                                        </Link>
                                        <Link
                                            to="/settings"
                                            className="flex gap-3 px-4 py-2 text-gray-800 hover:bg-gray-100"
                                        >
                                            <Settings className="w-6 h-6" />
                                            <span>Settings</span>
                                        </Link>
                                        <button
                                            type="button"
                                            onClick={handleLogout}
                                            className="flex w-full gap-3 px-4 py-2 text-gray-800 hover:bg-gray-100"
                                        >
                                            <Minimize2 className="w-6 h-6" />
                                            <span>LogOut</span>
                                        </button>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>

            {/* Sidebar Menu */}
            <AnimatePresence>
                {isSidebarOpen && (
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: 300 }}
                        exit={{ width: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed top-0 right-0 h-screen  bg-white shadow-lg z-[400]  p-4"
                    >
                        <div className="flex justify-between items-center border-b pb-4 mb-4">
                            <h3 className="text-lg font-semibold">
                                Compose Email
                            </h3>
                            <button
                                onClick={toggleSidebar}
                                className="text-gray-600"
                            >
                                <Minimize2 size={24} />
                            </button>
                        </div>
                        <form className="flex flex-col space-y-4">
                            <div>
                                <label className="block text-gray-700">
                                    To:
                                </label>
                                <input
                                    type="email"
                                    className="w-full p-2 border rounded"
                                    placeholder="Recipient email"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700">
                                    Subject:
                                </label>
                                <input
                                    type="text"
                                    className="w-full p-2 border rounded"
                                    placeholder="Email subject"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700">
                                    Message:
                                </label>
                                <textarea
                                    className="w-full p-2 border rounded"
                                    rows="5"
                                    placeholder="Write your message..."
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
                            >
                                Send
                            </button>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Header;
