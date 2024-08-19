// import React from "react";
// import { useSelector } from "react-redux";
// import { Navigate, useLocation } from "react-router-dom";

// const PrivateRoute = ({ element: Component, ...rest }) => {
//     const token = sessionStorage.getItem("token");
//     const location = useLocation();

//     return token ? (
//         <Component {...rest} />
//     ) : (
//         <Navigate to="/login" state={{ from: location }} replace />
//     );
// };

// export default PrivateRoute;
// src/routes/PrivateRoute.js// src/routes/PrivateRoute.jsx
import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ element: Component, ...rest }) => {
    const { token } = useSelector((state) => state.auth);
    const location = useLocation();

    // Fallback to sessionStorage if token is not found in Redux state
    const storedToken = sessionStorage.getItem("token");

    return token || storedToken ? (
        <Element {...rest} />
    ) : (
        <Navigate to="/login" state={{ from: location }} replace />
    );
};

export default PrivateRoute;
