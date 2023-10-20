import React, { useContext } from 'react'
import { AuthenticationContext } from '../Contexts/AuthenticationContext'
import { Navigate, useLocation } from 'react-router-dom';

function PrivateRoute({ children }) {
    const { user, userLoading } = useContext(AuthenticationContext);
    const currentRoute = useLocation();
    console.log(currentRoute);

    if (user) {
        return children;
    } else {
        return <Navigate state={currentRoute.pathname} to={'/signin'}></Navigate>;
    }
}

export default PrivateRoute