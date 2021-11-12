import { CContainer, CRow } from '@coreui/react';
import React, { useEffect, useState } from 'react';
import Product from '../Home/Product';


const Explore = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://calm-gorge-61039.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])
    return (
        <div style={{margin: '80px 0'}}>
            <CContainer>
                <h2 className="text-center text-success">Explore Our Amazing Bicycles</h2>
            <CRow xs={{ cols: 1, gutter: 4 }} md={{ cols: 3 }}>
                {
                    products.map(product => <Product key={product._id} product={product} />)
                }
            </CRow>
            </CContainer>
        </div>
    );
};

export default Explore;