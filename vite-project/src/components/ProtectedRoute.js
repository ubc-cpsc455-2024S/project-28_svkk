import React from 'react';
import { Navigate } from 'react-router-dom';
import jwtDecode from 'jwt-decode';

// eslint-disable-next-line react/prop-types
const ProtectedRoute = ({ children, isAuthenticated }) => {
    const token = localStorage.getItem('jwtToken');

    if (!token) {
        return <Navigate to="/login" replace />;
    }

    try {
        const decoded = jwtDecode(token);
        const currentTime = Date.now() / 1000;

        if (decoded.exp < currentTime) {
            localStorage.removeItem('jwtToken');
            return <Navigate to="/login" replace />;
        }
    } catch (error) {
        console.error('Failed to decode JWT:', error);
        return <Navigate to="/login" replace />;
    }

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    return children;
};

export default ProtectedRoute;
