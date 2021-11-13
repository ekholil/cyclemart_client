import { CButton, CCol, CContainer, CRow } from '@coreui/react';
import React from 'react';
import {
  Switch,
  Route,
  Link,
  useRouteMatch,
  NavLink
} from "react-router-dom";
import useAuth from '../../../Hooks/useAuth';
import AdminRoute from '../../../PrivateRoute/AdminRoute';
import AddProduct from './AddProduct';
import Logout from './Logout';
import MakeAdmin from './MakeAdmin';
import ManageOrder from './ManageOrder';
import ManageProducts from './ManageProducts';
import MyOrders from './MyOrders';
import Pay from './Pay';
import Review from './Review'
const Dashboard = () => {
  let { path, url } = useRouteMatch();
  const {admin} = useAuth()
  return (
    <div>
      <CContainer style={{marginTop:'80px'}}>
        <CRow className="my-4">
          <CCol md={2}>
          {
            !admin && 
          <div style={{display:'flex', flexDirection: 'column', textAlign: 'left'}}>
          <NavLink className="mb-2" activeStyle={{backgroundColor:'green'}} to={`${url}/myorder`} ><CButton>My Orders</CButton></NavLink> 
          <NavLink className="mb-2" activeStyle={{backgroundColor:'green'}} to={`${url}/review`}><CButton>Review</CButton></NavLink>
          <NavLink className="mb-2" activeStyle={{backgroundColor:'green'}} to={`${url}/pay`}><CButton>Pay</CButton></NavLink>
          <NavLink className="mb-2" activeStyle={{backgroundColor:'green'}} to={`${url}/logout`}><CButton>LogOut</CButton></NavLink>
          </div>
          }
          {
            admin && <div style={{display:'flex', flexDirection: 'column', textAlign: 'left'}}>
          <Link className="mb-2" activeStyle={{backgroundColor:'green'}} to={`${url}/manageorder`}><CButton>Manage Orders</CButton></Link>
          <Link className="mb-2" activeStyle={{backgroundColor:'green'}} to={`${url}/manageproduct`}><CButton>Manage Products</CButton></Link>
          <Link className="mb-2" activeStyle={{backgroundColor:'green'}} to={`${url}/addproduct`}><CButton>Add Product</CButton></Link>
          <Link className="mb-2" activeStyle={{backgroundColor:'green'}} to={`${url}/makeadmin`}><CButton>Make Admin</CButton></Link>
            </div>
          }
          </CCol>
          <CCol md={10}>
            <Switch>
              <Route exact path={`${path}/myorder`}>
                <MyOrders />
              </Route>
              <Route path={`${path}/review`}>
                <Review />
              </Route>
              <Route path={`${path}/pay`}>
                <Pay />
              </Route>
              <Route path={`${path}/logout`}>
                <Logout />
              </Route>
              <AdminRoute exact path={`${path}/manageorder`}>
                <ManageOrder />
              </AdminRoute>
              <AdminRoute path={`${path}/manageproduct`}>
                <ManageProducts />
              </AdminRoute>
              <AdminRoute path={`${path}/addproduct`}>
                <AddProduct />
              </AdminRoute>
              <AdminRoute path={`${path}/makeadmin`}>
                <MakeAdmin />
              </AdminRoute>
            </Switch>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

export default Dashboard;