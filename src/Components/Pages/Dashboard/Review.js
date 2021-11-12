import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import swal from 'sweetalert';
import useAuth from '../../../Hooks/useAuth';

const Review = () => {
    const {user} = useAuth()
    const { register, reset,  handleSubmit,  formState: { errors } } = useForm();
    const onSubmit = data => {
       fetch('http://localhost:5000/review', {
           method: 'POST', 
           headers: {'content-type': 'application/json'},
           body: JSON.stringify(data)
       })
       .then(res => res.json())
       .then(data => {
           if(data.acknowledged){
               swal("Thank You", "Your Review Has been saved", "success")
               reset()
           }
       })
       console.log(data)    
        reset()
    };
    return (
        <div>
            <h2 className="text-success text-center">Write A Review</h2>
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
                type="email"
                placeholder="Your Email"
                className="form-control mt-2"
                {...register("email", { required: true })}
              />
              {errors.name && (
                <span className="text-danger">This field is required</span>
              )}
              <textarea
                placeholder="Write Your Review Here"
                className="form-control my-2"
                {...register("review", { required: true })}
              />
              {errors.email && (
                <span className="text-danger">This field is required</span>
              )}
              <select
                placeholder="Rating"
                className="form-control mb-2"
                {...register("rating", { required: true })}
              > 
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              </select>
                     
           
              

              <input
                className="form-control mb-5  bg-primary text-white"
                type="submit"
              />
            </form>
        </div>
    );
};

export default Review;