import { CContainer, CRow } from '@coreui/react';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Product from './Product';

const Products = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])
    return (
        <div>
            <CContainer>
            <CRow xs={{ cols: 1, gutter: 4 }} md={{ cols: 3 }}>
                {
                    products.map(product => <Product key={product._id} product={product} />)
                }
                
            </CRow>
            <NavLink className="btn btn-success my-4" to="/explore">Explore All Bicycles</NavLink>
            </CContainer>
        </div>
    );
};

export default Products;