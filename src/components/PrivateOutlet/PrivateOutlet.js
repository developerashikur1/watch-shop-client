import React from 'react';
import useAuth from '../contexts/useAuth';
import { Outlet, Navigate, useLocation } from 'react-router-dom'
import { LinearProgress } from '@mui/material';

const PrivateOutlet = () => {
    const location = useLocation();
    const {user, loading} = useAuth();
    if(loading){
        return <LinearProgress color="secondary" />
    }
    else{
        return user?.email ? <Outlet/> : <Navigate to='/login' state={{from: location}}/>;
    }
};

export default PrivateOutlet;