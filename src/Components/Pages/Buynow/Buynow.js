import { CCol, CContainer, CRow } from '@coreui/react';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import useAuth from '../../../Hooks/useAuth';
import swal from 'sweetalert';
import axios from 'axios';

const Buynow = () => {
    const [product, setProduct] = useState()
    const {id }= useParams()
    const {user} = useAuth()
    const date = new Date().toLocaleString()
    
    const { register, reset,  handleSubmit,  formState: { errors } } = useForm();
    const onSubmit = data => {
        data.status = 'pending'
        data.orderDate = date;
        data.productName = product?.name;
        data.productImg = product?.imgurl;
        data.totalPrice = product?.price
        fetch('https://calm-gorge-61039.herokuapp.com/orders', {
          method: 'POST',
          headers: {'content-type': 'application/json'},
          body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then((data) => {
          if(data.acknowledged) {
            swal("Well Done", "Your order is recorded", "success");
            reset();
            console.log(data)
          }
        });
        reset()
    };

    useEffect(() => {
        fetch(`https://calm-gorge-61039.herokuapp.com/products/${id}`)
        .then(res => res.json())
        .then(data => setProduct(data))
    }, [id])
    
    return (
        
            <CContainer style={{margin: '80px 0'}}>
                <CRow>
                    <CCol className="my-5">
                        <h2>{product?.name}</h2>
                        <img src={product?.imgurl} alt="" />
                        <h4>Price : ${product?.price}</h4>
                        <p>{product?.desc}</p>

                    </CCol>
                    <CCol>
                    <form
              className="d-flex flex-column mx-auto mt-4"
              style={{ maxWidth: "400px" }}
              onSubmit={handleSubmit(onSubmit)}
            >
              <input
                value={user.displayName}
                placeholder="Your Name"
                className="form-control mt-2"
                {...register("name", { required: true })}
              />
              {errors.name && (
                <span className="text-danger">This field is required</span>
              )}
              <input
                value={user.email}
                placeholder="Your Email"
                className="form-control mt-2"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-danger">This field is required</span>
              )}
              <input
                type="number"
                placeholder="Phone Number"
                className="form-control mt-2"
                {...register("number", { required: true })}
              />
              {errors.number && (
                <span className="text-danger">This field is required</span>
              )}
              <input
                placeholder="Street Address"
                className="form-control mt-2"
                {...register("address", { required: true })}
              />
              {errors.address && (
                <span className="text-danger">This field is required</span>
              )}
              <input
                placeholder="City"
                className="form-control mt-2"
                {...register("city", { required: true })}
              />
              {errors.city && (
                <span className="text-danger">This field is required</span>
              )}
              <input
                placeholder="Postal Code"
                className="form-control mt-2"
                {...register("postcode", { required: true })}
              />
              {errors.postcode && (
                <span className="text-danger">This field is required</span>
              )}
              <input
                type="number"
                defaultValue="1"
                placeholder="Quntity"
                className="form-control mt-2 mb-3"
                {...register("quantity", { required: true })}
              />
              {errors.quantity && (
                <span className="text-danger">This field is required</span>
              )}
              

              <input
                className="form-control mb-5  bg-primary text-white"
                type="submit"
              />
            </form>
                    </CCol>
                </CRow>
            </CContainer>

        
    );
};

export default Buynow;