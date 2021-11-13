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
        <div className="container" style={{marginTop: '80px'}}>
            <div className="row">
                <div className="col-md-6">
                    <h1> Please login</h1>
                    <CForm onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <CFormLabel htmlFor="exampleInputEmail1">Email address</CFormLabel>
                            <CFormInput style={{width:'100%'}} name="email" onBlur={handleInput} type="email" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        
                        </div>
                        <div className="mb-3">
                            <CFormLabel htmlFor="exampleInputPassword1">Email Password</CFormLabel>
                            <CFormInput style={{width:'100%'}} name="password" onBlur={handleInput} type="password" id="exampleInputPassword1" />
                        </div>
                        
                        <CButton type="submit" color="success" className="text-white">
                            Submit
                        </CButton>
                        </CForm>
                        <Link className="my-3 text-decoration-none d-block" to="/register">Don't have an account? Register Now!</Link>
                </div>
                <div className="col-md-6">
                     <img className="img-fluid" src={loginimg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Login;
<CContainer >
            <CRow>
                <CCol md={6}>
                
                  
                </CCol>
                <CCol md={6}>
                   
                </CCol>
            </CRow>
        </CContainer>