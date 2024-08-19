import {
    BadgeInfo,
    Bell,
    Blocks,
    Building2,
    CarTaxiFront,
    ChartNoAxesCombined,
    House,
    MapPin,
    MoonStar,
    Settings,
    Sun,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
    // Dark mode holatini saqlash uchun useState
    const [isDarkMode, setIsDarkMode] = useState(false);

    // LocalStorage'dan tanlangan rejimni olish
    useEffect(() => {
        const savedMode = localStorage.getItem("darkMode") === "true";
        setIsDarkMode(savedMode);
        if (savedMode) {
            document.body.classList.add("dark");
        } else {
            document.body.classList.remove("dark");
        }
    }, []);

    // Rejimni o‘zgartirish funksiyasi
    const toggleDarkMode = () => {
        setIsDarkMode((prevMode) => {
            const newMode = !prevMode;
            localStorage.setItem("darkMode", newMode);
            if (newMode) {
                document.body.classList.add("dark");
            } else {
                document.body.classList.remove("dark");
            }
            return newMode;
        });
    };

    return (
        <div
            className={`fixed top-0 left-0 w-[300px] h-screen transition-all ${
                isDarkMode ? "bg-gray-800" : "bg-blue-500/50"
            }`}
        >
            <div className="p-2">
                <div
                    className={`p-4 rounded-md ${
                        isDarkMode
                            ? "bg-gray-900 text-white"
                            : "bg-black text-white"
                    }`}
                >
                    <h3 className="font-bold text-2xl">AvtoZoom - Admin</h3>
                </div>
                <div className="p-2 w-full mt-[20px] flex flex-col justify-center gap-40 items-start">
                    <ul className="flex flex-col w-full gap-4">
                        <li
                            className={`hover:bg-black hover:text-white duration-300 scale-105 inline-block transition-all p-3 rounded-md ${
                                isDarkMode ? "hover:bg-gray-700" : ""
                            }`}
                        >
                            <Link
                                to="/dashboard"
                                className="text-xl flex gap-3 items-center"
                            >
                                <House className="w-6 h-6" />
                                <span>Home</span>
                            </Link>
                        </li>
                        <li
                            className={`hover:bg-black hover:text-white duration-300 scale-105 inline-block transition-all p-3 rounded-md ${
                                isDarkMode ? "hover:bg-gray-700" : ""
                            }`}
                        >
                            <Link
                                to="/dashboard/cites"
                                className="text-xl flex gap-3 items-center"
                            >
                                <Building2 className="h-6 w-6" />
                                <span>Cites</span>
                            </Link>
                        </li>
                        {/* Boshqa ro‘yxat elementlari */}
                        <li
                            className={`hover:bg-black hover:text-white duration-300 scale-105 inline-block transition-all p-3 rounded-md ${
                                isDarkMode ? "hover:bg-gray-700" : ""
                            }`}
                        >
                            <Link
                                to="/dashboard/brands"
                                className="text-xl flex gap-3 items-center"
                            >
                                <BadgeInfo className="h-6 w-6" />
                                <span>Brands</span>
                            </Link>
                        </li>
                        <li
                            className={`hover:bg-black hover:text-white duration-300 scale-105 inline-block transition-all p-3 rounded-md ${
                                isDarkMode ? "hover:bg-gray-700" : ""
                            }`}
                        >
                            <Link
                                to="/dashboard/models"
                                className="text-xl flex gap-3 items-center"
                            >
                                <Blocks className="h-6 w-6" />
                                <span>Models</span>
                            </Link>
                        </li>
                        <li
                            className={`hover:bg-black hover:text-white duration-300 scale-105 inline-block transition-all p-3 rounded-md ${
                                isDarkMode ? "hover:bg-gray-700" : ""
                            }`}
                        >
                            <Link
                                to="/dashboard/cars"
                                className="text-xl flex gap-3 items-center"
                            >
                                <CarTaxiFront className="h-6 w-6" />
                                <span>Cars</span>
                            </Link>
                        </li>
                        <li
                            className={`hover:bg-black hover:text-white duration-300 scale-105 inline-block transition-all p-3 rounded-md ${
                                isDarkMode ? "hover:bg-gray-700" : ""
                            }`}
                        >
                            <Link
                                to="/dashboard/locations"
                                className="text-xl flex gap-3 items-center"
                            >
                                <MapPin className="h-6 w-6" />
                                <span>Locations</span>
                            </Link>
                        </li>
                        <li
                            className={`hover:bg-black hover:text-white duration-300 scale-105 inline-block transition-all p-3 rounded-md ${
                                isDarkMode ? "hover:bg-gray-700" : ""
                            }`}
                        >
                            <Link
                                to="/dashboard/notice"
                                className="text-xl flex gap-3 items-center"
                            >
                                <Bell className="h-6 w-6" />
                                <span>Notice</span>
                            </Link>
                        </li>
                        <li
                            className={`hover:bg-black hover:text-white duration-300 scale-105 inline-block transition-all p-3 rounded-md ${
                                isDarkMode ? "hover:bg-gray-700" : ""
                            }`}
                        >
                            <Link
                                to="/dashboard/analysis"
                                className="text-xl flex gap-3 items-center"
                            >
                                <ChartNoAxesCombined className="h-6 w-6" />
                                <span>Analysis</span>
                            </Link>
                        </li>
                        <li
                            className={`hover:bg-black hover:text-white duration-300 scale-105 inline-block transition-all p-3 rounded-md ${
                                isDarkMode ? "hover:bg-gray-700" : ""
                            }`}
                        >
                            <Link
                                to="/dashboard/settings"
                                className="text-xl flex gap-3 items-center"
                            >
                                <Settings className="h-6 w-6" />
                                <span>Settings</span>
                            </Link>
                        </li>
                    </ul>
                    <div className="flex p-3 w-full">
                        <button
                            onClick={toggleDarkMode}
                            className={`rounded-l-full items-center w-1/2 flex gap-1 p-4 ${
                                isDarkMode
                                    ? "bg-gray-600 text-white"
                                    : "bg-black text-white"
                            }`}
                        >
                            <MoonStar className="w-6 h-6" />
                        </button>
                        <button
                            onClick={toggleDarkMode}
                            className={`bg-transparent border-2 w-1/2 rounded-r-full flex justify-end gap-1 p-4 ${
                                isDarkMode
                                    ? "border-gray-600 text-gray-300"
                                    : "border-black text-black"
                            }`}
                        >
                            <Sun className="w-6 h-6" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
