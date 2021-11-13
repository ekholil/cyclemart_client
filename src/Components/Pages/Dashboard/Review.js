import React, { useState } from "react";
import { useForm } from "react-hook-form";
import swal from "sweetalert";
import useAuth from "../../../Hooks/useAuth";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import Rating from "react-rating";

const Review = () => {
  const { user } = useAuth();
  const [rate, setRate] = useState(0)
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    data.rating = rate;
    fetch("https://calm-gorge-61039.herokuapp.com/review", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          swal("Thank You", "Your Review Has been saved", "success");
          reset();
        }
      });
    console.log(data);
    reset();
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
        

        <Rating
          emptySymbol={<AiOutlineStar style={{ color: "goldenrod", fontSize: '2rem' }} />}
          fullSymbol={<AiFillStar style={{ color: "goldenrod", fontSize: '2rem' }} />}
          initialRating={0}
          onChange={(rate) => setRate(rate)}
          className="text-center my-2"
        />

        <input
          className="form-control mb-5  bg-primary text-white"
          type="submit"
        />
      </form>
    </div>
  );
};

export default Review;
