import { CSpinner } from '@coreui/react';
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

const AdminRoute = ({ children, ...rest }) => {
    const {user, admin,  isLoading} = useAuth()
    if(isLoading){return <CSpinner />}
    return (
        <Route
      {...rest}
      render={({ location }) =>
        user.email && admin ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location }
            }}
          />
        )
      }
    />
    );
};

export default AdminRoute;