import { CButton, CCol, CContainer, CForm, CFormInput, CFormLabel, CRow } from '@coreui/react';
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import registerimg from './register.jpg'
const Register = () => {
    const [loginData, setLoginData] = useState({})
    const {registerUser, user} = useAuth()
    const history = useHistory()
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
        registerUser(loginData?.email, loginData?.password, loginData.name, history)
        console.log(user)
      }
    return (
        <CContainer style={{marginTop: '80px'}}>
            <CRow>
                <CCol md={6}>
                <img className="img-fluid" src={registerimg} alt="" />
                
                </CCol>
                <CCol md={6}>
                   <h1> Please Register</h1>
                   <CForm onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <CFormLabel htmlFor="exampleInputEmail1">Name</CFormLabel>
                        <CFormInput style={{width:'100%'}} onBlur={handleInput} name="name" type="text" required/>
                    
                    </div>
                    <div className="mb-3">
                        <CFormLabel htmlFor="exampleInputEmail1">Email address</CFormLabel>
                        <CFormInput style={{width:'100%'}} onBlur={handleInput} type="email" name="email" aria-describedby="emailHelp" required/>
                    
                    </div>
                    <div className="mb-3">
                        <CFormLabel htmlFor="exampleInputPassword1">Password</CFormLabel>
                        <CFormInput style={{width:'100%'}} onBlur={handleInput} type="password" name="password" required/>
                    </div>
                    
                    <CButton type="submit" color="success" className='text-white'>
                        Submit
                    </CButton>
                    </CForm>
                    <Link className="my-3 text-decoration-none d-block" to="/login">Already have an account? Login here!</Link>
                </CCol>
            </CRow>
        </CContainer>
    );
};

export default Register;