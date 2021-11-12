import { CButton } from '@coreui/react';
import React from 'react';
import useAuth from '../../../Hooks/useAuth';

const Logout = () => {
    const {logOut} = useAuth()
    return (
        <div>
          <h2>  Do you want to log out? </h2>
            <CButton onClick={logOut} className="btn btn-warning">Log out</CButton>
        </div>
    );
};

export default Logout;