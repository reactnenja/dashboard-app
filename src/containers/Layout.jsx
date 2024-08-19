import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout = () => {
    return (
        <>
            <Header />
            <main className="width-[100% - 300px] fixed top-24 left-[300px] h-auto p-4">
                <Outlet />
            </main>
            <Sidebar />
        </>
    );
};

export default Layout;
