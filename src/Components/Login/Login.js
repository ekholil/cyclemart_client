import { CButton, CCol, CContainer, CForm, CFormInput, CFormLabel, CRow } from '@coreui/react';
import React, { useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import loginimg from './login.jpg'
const Login = () => {
    const [loginData, setLoginData] = useState({})
    const {logIn, user} = useAuth()
    const history = useHistory()
    const location = useLocation()
    const handleInput = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        const newData = { ...loginData };
        newData[name] = value;
        setLoginData(newData);
        console.log(loginData)
      };
      const handleSubmit = e => {
          e.preventDefault()
        logIn(loginData?.email, loginData?.password, location, history)
        console.log(user)
      }
    return (
        <CContainer style={{margin: '80px'}}>
            <CRow>
                <CCol>
                <h1> Please login</h1>
                <CForm onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <CFormLabel htmlFor="exampleInputEmail1">Email address</CFormLabel>
                        <CFormInput style={{width:'80%'}} name="email" onBlur={handleInput} type="email" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    
                    </div>
                    <div className="mb-3">
                        <CFormLabel htmlFor="exampleInputPassword1">Email Password</CFormLabel>
                        <CFormInput style={{width:'80%'}} name="password" onBlur={handleInput} type="password" id="exampleInputPassword1" />
                    </div>
                    
                    <CButton type="submit" color="success" className="text-white">
                        Submit
                    </CButton>
                    </CForm>
                    <Link className="my-3 text-decoration-none d-block" to="/register">Don't have an account? Register Now!</Link>
                </CCol>
                <CCol>
                   <img className="img-fluid" src={loginimg} alt="" />
                </CCol>
            </CRow>
        </CContainer>
    );
};

export default Login;