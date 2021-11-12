import { CCard, CCardBody, CCardImage, CCardText, CCardTitle, CCol } from '@coreui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({product}) => {
    const {_id, name, imgurl, desc, price} = product
    return (
        <div>
            <CCol xs>
                <CCard>
                <CCardImage orientation="top" src={imgurl} />
                <CCardBody>
                    <CCardTitle>{name}</CCardTitle>
                    <CCardText>
                    {desc}
                    </CCardText>
                    <h3>{price}</h3>
                    <Link to={`/buynow/${_id}`} className="btn btn-success">Buy now</Link>
                </CCardBody>
              
                </CCard>
            </CCol>
        </div>
    );
};

export default Product;