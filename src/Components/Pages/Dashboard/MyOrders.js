import { CButton, CCol, CRow } from '@coreui/react';
import React, { useEffect, useState } from 'react';
import swal from "sweetalert";
import useAuth from '../../../Hooks/useAuth';


const MyOrders = () => {
    const [orders, setOrders] = useState([])
    const {user} = useAuth()
    useEffect(() => {
        fetch(`https://calm-gorge-61039.herokuapp.com/myorders/${user.email}`)
        .then(res => res.json())
        .then(data => {
            setOrders(data)
            console.log(data)
        })
    }, [user.email])
    const handleCancel = id => {
        swal({
            title: "Are you sure?",
            text: "Your order will be cancelled",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
                fetch(`https://calm-gorge-61039.herokuapp.com/cancelorder/${id}`, {
                    method: 'DELETE', 
                    headers: {'content-type' : 'application/json'}
                })
                .then(res => res.json())
                .then(data => {
                    if(data.acknowledged){
                        const remaining = orders.filter(item => item._id !== id)
                        setOrders(remaining)
                        swal("Your order is cancelled", {
                            icon: "success",
                          });
                    }
                    console.log(data)
                })
              
            } 
          });      
    }
    return (
        <div>
            <h2 className="text-success text-center">List of my Order</h2>
            {
            orders.length === 0? <h4 className="text-center">You have not ordered yet</h4> : ''
            }
            <div className="container mb-5">
                
            <CRow xs={{ cols: 1, gutter: 4 }} md={{ cols: 2 }}>
                {
                    orders.map(item => <div>

                <CCol style={{display:'flex', backgroundColor: 'rgba(0,0,0,0.1)', padding: '10px', borderRadius: '5px'}}>
                    <img height="120" src={item?.productImg} alt="" />
                    <div className="ms-1">
                        <h3>{item?.productName}</h3>
                        <p>{item?.orderDate}</p>
                        <div style={{display:'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                            <h4>${item.totalPrice}</h4>
                            <CButton onClick={() => handleCancel(item._id)} className="btn btn-warning ms-3">Cancel Order</CButton>
                        </div>
                        {console.log(item)}
                    </div>
                </CCol>

                    </div>)
                }
            </CRow>
            </div>
        </div>
    );
};

export default MyOrders;