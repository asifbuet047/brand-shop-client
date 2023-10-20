import React, { useContext } from 'react'

function PrivateRoute({ children }) {
    const { user, userLoading } = useContext(AuthenticationContext);

    return (
        <div>

        </div>
    )
}

export default PrivateRoute