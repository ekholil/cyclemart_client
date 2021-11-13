import { CContainer, CRow, CSpinner } from "@coreui/react";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Product from "./Product";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://calm-gorge-61039.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const slicedProducts = products.slice(0, 6);
  return (
    <div>
      <CContainer className="mt-4">
        <h2 className="text-success text-center mb-3">Featured Bikes</h2>
        {products.length === 0 ? (
          <div className="d-flex justify-content-center">
            <CSpinner />{" "}
          </div>
        ) : (
          <div>
            <CRow xs={{ cols: 1, gutter: 4 }} md={{ cols: 3 }}>
              {slicedProducts.map((product) => (
                <Product key={product._id} product={product} />
              ))}
            </CRow>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <NavLink
                className="text-white btn btn-success my-4"
                to="/explore"
              >
                Explore All Bicycles
              </NavLink>
            </div>
          </div>
        )}
      </CContainer>
    </div>
  );
};

export default Products;
