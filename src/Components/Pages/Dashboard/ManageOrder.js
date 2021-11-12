import { CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from '@coreui/react';
import React, { useEffect, useState } from 'react';
import swal from "sweetalert";
import useAuth from '../../../Hooks/useAuth';


const ManageOrder = () => {
    const [orders, setOrders] = useState([])
    const [shipped, setShipped] = useState(false)
    const {user} = useAuth()
    useEffect(() => {
        fetch(`http://localhost:5000/orders`)
        .then(res => res.json())
        .then(data => {
            setOrders(data)
            console.log(data)
        })
    }, [shipped])
    const updateStatus = (id, index )=> {
        const updatedItem = orders[index]
        updatedItem.status = 'Shipped';
        fetch(`http://localhost:5000/updatestatus/${id}`, {
            method: 'PUT', 
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(updatedItem)
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                setShipped(!shipped)
                swal('Success', 'This booking is now Approved', 'success')
            }
        })
    }
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
                fetch(`http://localhost:5000/cancelorder/${id}`, {
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
            <div style={{overflowX: 'auto'}}>
            <CTable hover style={{verticalAlign:'middle', width: '100%'}}>
                <CTableHead>
                    <CTableRow>
                    <CTableHeaderCell scope="col">#</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Name</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Email</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Product Name</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Price</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Status</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Action</CTableHeaderCell>
                    </CTableRow>
                </CTableHead>
                <CTableBody>
                    {
                        orders.map((item, index) => {
                           return <CTableRow >
                        <CTableHeaderCell scope="row">{index + 1}</CTableHeaderCell>
                        <CTableDataCell>{item.name}</CTableDataCell>
                        <CTableDataCell>{item.email}</CTableDataCell>
                        <CTableDataCell>{item.productName}</CTableDataCell>
                        <CTableDataCell>{item.totalPrice}</CTableDataCell>
                        <CTableDataCell>{item.status}</CTableDataCell>
                        <CTableDataCell>
                          
                            <button onClick={() => updateStatus(item._id, index)} className="btn btn-success text-white me-3">Shipped</button>
                            <button className="btn btn-danger text-white">Delete</button>
                           
                        </CTableDataCell>
                    </CTableRow>
                        })
                    }
                </CTableBody>
            </CTable>
            </div>
        </div>
    );
};

export default ManageOrder;