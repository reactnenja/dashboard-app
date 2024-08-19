import React from "react";
import {
    Navigate,
    Route,
    BrowserRouter as Router,
    Routes,
} from "react-router-dom";
import Layout from "./containers/Layout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import {
    Analysis,
    Brands,
    Cars,
    Cites,
    Home,
    Locations,
    Models,
    Notice,
    Settings,
} from "./pages/protected";
import PrivateRoute from "./routes/PrivateRoute";

const App = () => {
    return (
        <Router>
            <Routes>
                {/* Public Routes */}
                <Route path="/" element={<Login />} />
                <Route path="/register" element={<Register />} />

                {/* Protected Routes */}
                <Route element={<PrivateRoute element={Layout} />}>
                    <Route
                        path="/dashboard"
                        element={<PrivateRoute element={Home} />}
                    />
                    <Route
                        path="/dashboard/analysis"
                        element={<PrivateRoute element={Analysis} />}
                    />
                    <Route
                        path="/dashboard/cites"
                        element={<PrivateRoute element={Cites} />}
                    />
                    <Route
                        path="/dashboard/models"
                        element={<PrivateRoute element={Models} />}
                    />
                    <Route
                        path="/dashboard/locations"
                        element={<PrivateRoute element={Locations} />}
                    />
                    <Route
                        path="/dashboard/settings"
                        element={<PrivateRoute element={Settings} />}
                    />
                    <Route
                        path="/dashboard/cars"
                        element={<PrivateRoute element={Cars} />}
                    />
                    <Route
                        path="/dashboard/notice"
                        element={<PrivateRoute element={Notice} />}
                    />
                    <Route
                        path="/dashboard/brands"
                        element={<PrivateRoute element={Brands} />}
                    />
                </Route>

                {/* Redirect to Login if no route matches */}
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </Router>
    );
};

export default App;
