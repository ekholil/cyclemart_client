import {
  CCol,
  CContainer,
  CNav,
  CNavItem,
  CNavLink,
  CRow,
  CTabContent,
  CTabPane,
} from "@coreui/react";
import React, { useState } from "react";
import useAuth from "../../../Hooks/useAuth";
import MakeAdmin from "./MakeAdmin";
import ManageOrder from "./ManageOrder";
import MyOrders from "./MyOrders";
import Review from "./Review";

const Dashboard = () => {
  const [activeKey, setActiveKey] = useState(1);
  const {logOut, admin} = useAuth()
 
  return (
    <>
      <CContainer style={{ margin: "100px 50px" }}>
          <h2>My Dashboard</h2>
        <CRow>
          <CCol md={2}>
            <CNav
              variant="pills"
              role="tablist"
              style={{ display: "flex", flexDirection: "column" }}
            >
              {
                !admin && <div>
                  <CNavItem>
                <CNavLink
                  href="javascript:void(0);"
                  active={activeKey === 1}
                  onClick={() => setActiveKey(1)}
                >
                  Pay
                </CNavLink>
              </CNavItem>
              <CNavItem>
                <CNavLink
                  href="javascript:void(0);"
                  active={activeKey === 2}
                  onClick={() => setActiveKey(2)}
                >
                  My Orders
                </CNavLink>
              </CNavItem>
              <CNavItem>
                <CNavLink
                  href="javascript:void(0);"
                  active={activeKey === 3}
                  onClick={() => setActiveKey(3)}
                >
                  Review
                </CNavLink>
              </CNavItem>
             
              <CNavItem>
                <CNavLink
                  href="javascript:void(0);"
                  active={activeKey === 4}
                  onClick={() => setActiveKey(4)}
                >
                  <span onClick={logOut}>Logout</span>
                </CNavLink>
              </CNavItem>

                </div>
              }
              {admin && 
              <div>
                <CNavItem>
                <CNavLink
                  href="javascript:void(0);"
                  active={activeKey === 5}
                  onClick={() => setActiveKey(5)}
                >
                  Make Admin
                </CNavLink>
              </CNavItem>
              <CNavItem>
                <CNavLink
                  href="javascript:void(0);"
                  active={activeKey === 6}
                  onClick={() => setActiveKey(6)}
                >
                  Manage Orders
                </CNavLink>
              </CNavItem>

              </div>
              
              }
            </CNav>
          </CCol>
          <CCol md={10}>
            <CTabContent>
              <CTabPane
                role="tabpanel"
                aria-labelledby="home-tab"
                visible={activeKey === 1}
              >
                Rayment System Coming Soon
              </CTabPane>
              <CTabPane
                role="tabpanel"
                aria-labelledby="profile-tab"
                visible={activeKey === 2}
              >
                <MyOrders />
              </CTabPane>
              <CTabPane
                role="tabpanel"
                aria-labelledby="contact-tab"
                visible={activeKey === 3}
              >
               <Review />
             
              </CTabPane>
              <CTabPane
                role="tabpanel"
                aria-labelledby="contact-tab"
                visible={activeKey === 5}
              >
               <MakeAdmin />
             
              </CTabPane>
              <CTabPane
                role="tabpanel"
                aria-labelledby="contact-tab"
                visible={activeKey === 6}
              >
               <ManageOrder />
             
              </CTabPane>
              
            </CTabContent>
          </CCol>
        </CRow>
      </CContainer>
    </>
  );
};

export default Dashboard;
