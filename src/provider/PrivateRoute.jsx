import React, { useContext } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate, useLocation } from 'react-router';
import Loading from '../pages/Loading';

const PrivateRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext)
    
    const location = useLocation();

    if(loading){
        return <Loading></Loading>
    }

    if(user && user?.email){
        return children;
    }
    return <Navigate state={location.pathname} to="/auth/login"></Navigate>;
    // (
    //     <div>
    //         <h2>This is form private route</h2>
    //         {children}
    //     </div>
    // );
};

export default PrivateRoute;