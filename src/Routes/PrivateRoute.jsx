import React, { useContext } from 'react'
import { AuthenticationContext } from '../Contexts/AuthenticationContext'
import { Navigate, useLocation } from 'react-router-dom';
import { BeatLoader } from 'react-spinners';

function PrivateRoute({ children }) {
    const { user, userLoading } = useContext(AuthenticationContext);
    const currentRoute = useLocation();
    console.log(currentRoute);
    console.log(user, userLoading);

    if (userLoading) {
        return (<div className='flex flex-row justify-center pt-10 pb-10 items-center'>
            <BeatLoader color='#36D7B7' margin={10} size={50}></BeatLoader>
        </div>);


    }
    if (user) {
        return children;
    }
    return <Navigate state={currentRoute.pathname} to='/signin'></Navigate>;
}

export default PrivateRoute