import { CSpinner, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from '@coreui/react';
import React, { useEffect, useState } from 'react';
import swal from "sweetalert";
import useAuth from '../../../Hooks/useAuth';


const ManageOrder = () => {
    const [orders, setOrders] = useState([])
    const [shipped, setShipped] = useState(false)
    const {user} = useAuth()
    useEffect(() => {
        fetch(`https://calm-gorge-61039.herokuapp.com/orders`)
        .then(res => res.json())
        .then(data => {
            setOrders(data)
            console.log(data)
        })
    }, [shipped])
    const updateStatus = (id, index )=> {
        const updatedItem = orders[index]
        updatedItem.status = 'Shipped';
        fetch(`https://calm-gorge-61039.herokuapp.com/updatestatus/${id}`, {
            method: 'PUT', 
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(updatedItem)
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                setShipped(!shipped)
                swal('Success', 'This order is now shipped', 'success')
            }
        })
    }
    const handleDelete = id => {
        swal({
            title: "Are you sure?",
            text: "This order will be deleted",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
                fetch(`https://calm-gorge-61039.herokuapp.com/deleteorder/${id}`, {
                    method: 'DELETE', 
                    headers: {'content-type' : 'application/json'}
                })
                .then(res => res.json())
                .then(data => {
                    if(data.acknowledged){
                        const remaining = orders.filter(item => item._id !== id)
                        setOrders(remaining)
                        swal("This order is deleted", {
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
            <h2 className="text-success text-center">List of all Order</h2>
            {
            orders.length === 0? <CSpinner /> : <div style={{overflowX: 'auto'}}>
            <CTable hover style={{verticalAlign:'middle', width: '100%'}}>
                <CTableHead>
                    <CTableRow>
                    <CTableHeaderCell scope="col">#</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Name</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Email</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Product Name</CTableHeaderCell>
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
                        <CTableDataCell>{item.status}</CTableDataCell>
                        <CTableDataCell>
                          
                            <button onClick={() => updateStatus(item._id, index)} className="btn btn-success text-white me-3">Update Status</button>
                            <button onClick={() => handleDelete(item._id)} className="btn btn-danger text-white">Delete</button>
                           
                        </CTableDataCell>
                    </CTableRow>
                        })
                    }
                </CTableBody>
            </CTable>
            </div>
            }
            
        </div>
    );
};

export default ManageOrder;