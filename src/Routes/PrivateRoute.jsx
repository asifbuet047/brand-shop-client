import React, { useContext } from 'react'
import { AuthenticationContext } from '../Contexts/AuthenticationContext'
import { Navigate, useLocation } from 'react-router-dom';
import { BeatLoader } from 'react-spinners';

function PrivateRoute({ children }) {
    const { user, userLoading } = useContext(AuthenticationContext);
    const currentRoute = useLocation();

    if (userLoading) {
        return <BeatLoader color='#36D7B7' margin={10} size={50}></BeatLoader>;
    }
    return <Navigate state={currentRoute.pathname} to='/signin'></Navigate>;

}

export default PrivateRoute