import { CSpinner, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from '@coreui/react';
import React, { useEffect, useState } from 'react';
import swal from "sweetalert";
import useAuth from '../../../Hooks/useAuth';


const ManageProducts = () => {
    const [products, setProducts] = useState([])
    const {user} = useAuth()
    useEffect(() => {
        fetch(`http://localhost:5000/products`)
        .then(res => res.json())
        .then(data => {
            setProducts(data)
            console.log(data)
        })
    }, [])
    
    const handleDelete = id => {
        swal({
            title: "Are you sure?",
            text: "Your order will be cancelled",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
                fetch(`http://localhost:5000/products/${id}`, {
                    method: 'DELETE', 
                    headers: {'content-type' : 'application/json'}
                })
                .then(res => res.json())
                .then(data => {
                    if(data.acknowledged){
                        const remaining = products.filter(item => item._id !== id)
                        setProducts(remaining)
                        swal("Product is deleted", {
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
            products.length === 0? <CSpinner /> : <div style={{overflowX: 'auto'}}>
            <CTable hover style={{verticalAlign:'middle', width: '100%'}}>
                <CTableHead>
                    <CTableRow>
                    <CTableHeaderCell scope="col">#</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Product Id</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Name</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Product Price</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Action</CTableHeaderCell>
                    </CTableRow>
                </CTableHead>
                <CTableBody>
                    {
                        products.map((item, index) => {
                           return <CTableRow >
                        <CTableHeaderCell scope="row">{index + 1}</CTableHeaderCell>
                        <CTableDataCell>{item._id}</CTableDataCell>
                        <CTableDataCell>{item.name}</CTableDataCell>
                        <CTableDataCell>{item.price}</CTableDataCell>
                       
                        <CTableDataCell>
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

export default ManageProducts;