import React from "react";
import { useForm } from "react-hook-form";
import swal from 'sweetalert';
const AddProduct = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
      fetch('https://calm-gorge-61039.herokuapp.com/addproduct', {
          method: 'POST', 
          headers: {'content-type' : 'application/json'},
          body : JSON.stringify(data)
      })
      .then(res => res.json())
      .then(data => {
          if(data.acknowledged){
              swal("Well Done", "You have Sucessfully added a new Product", "success")
              reset()
          }
      })
  };


  //console.log(watch("name"));

  return (
    <div>
      <h1 className="text-center text-success" style={{marginTop:'70px'}}>Add a new Product</h1>
      <div className="mt-5">
        <form
          className="d-flex flex-column  mx-auto"
          style={{ maxWidth: "400px" }}
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            placeholder="Product Name"
            className="form-control mb-3"
            {...register("name", { required: true })}
          />
          {errors.name && (
            <span className="text-danger">This field is required</span>
          )}
          <input
            placeholder="img URL"
            className="form-control mb-3"
            {...register("imgurl", { required: true })}
          />
          {errors.imgurl && (
            <span className="text-danger">This field is required</span>
          )}
          <input
            placeholder="price"
            className="form-control mb-3"
            {...register("price", { required: true })}
          />
          {errors.price && (
            <span className="text-danger">This field is required</span>
          )}
          <textarea
            placeholder="Description"
            className="form-control mb-3"
            {...register("desc", { required: true })}
          />
          {errors.desc && (
            <span className="text-danger">This field is required</span>
          )}

          <input
            className="form-control mb-5  bg-success text-white"
            type="submit"
          />
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
