import React, { useContext } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate } from 'react-router';
import Loading from '../pages/Loading';

const PrivateRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext)
    console.log(user)

    if(loading){
        return <Loading></Loading>
    }

    if(user && user?.email){
        return children;
    }
    return <Navigate to="/auth/login"></Navigate>;
    // (
    //     <div>
    //         <h2>This is form private route</h2>
    //         {children}
    //     </div>
    // );
};

export default PrivateRoute;