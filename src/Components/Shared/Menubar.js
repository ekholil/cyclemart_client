import {  CCollapse, CContainer, CNavbar, CNavbarBrand, CNavbarNav, CNavbarToggler, CNavItem, CNavLink } from '@coreui/react';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';


const Menubar = () => {
    
        const [visible, setVisible] = useState(false)
        const {user, logOut} = useAuth()
return (
  <>
    <CNavbar expand="lg" colorScheme="light" className="bg-light fixed-top">
      <CContainer>
        <CNavbarBrand href="#" style={{fontSize: '1.5rem', fontWeight: 'bolder'}}>CycleMart</CNavbarBrand>
        <CNavbarToggler
          aria-label="Toggle navigation"
          aria-expanded={visible}
          onClick={() => setVisible(!visible)}
        />
        <CCollapse className="navbar-collapse" visible={visible}>
          <CNavbarNav className="ms-auto">
            <CNavItem>
              <CNavLink active>
                <NavLink to="/home">
                  Home
                </NavLink>
              </CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink>
                <NavLink to="/explore">
                  Explore Bicycles
                </NavLink>
              </CNavLink>
            </CNavItem>
            {
              user.email && <CNavItem>
              <CNavLink>
                <NavLink to="/dashboard">
                  Dashboard
                </NavLink>
              </CNavLink>
            </CNavItem>
            }
            {user.email &&
              <CNavItem>
              <CNavLink>
               {user.displayName}
              </CNavLink>
            </CNavItem>
            }
            {
              user.email? <CNavItem>
              <CNavLink onClick={logOut} className="btn btn-danger">
                Log out
              </CNavLink>
            </CNavItem> : <CNavItem>
              <CNavLink>
                <NavLink to="/login">Login</NavLink>
              </CNavLink>
            </CNavItem>
            }
          </CNavbarNav>
        </CCollapse>
      </CContainer>
    </CNavbar>
  </>
)
    
};

export default Menubar;