import React, { useEffect, useState } from "react";
import ItemsCarousel from "react-items-carousel";
import {
  AiFillStar,
  AiOutlineStar,
  AiFillLeftCircle,
  AiFillRightCircle,
} from "react-icons/ai";
import Rating from "react-rating";
import person from "./user.png";
import { CCol, CContainer, CRow } from "@coreui/react";
const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  
  useEffect(() => {
    fetch("https://calm-gorge-61039.herokuapp.com/review")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div className="container">
      <h2 className="text-center text-success my-5">WHAT OUR CUSTOMER SAYS</h2>
      <ItemsCarousel
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={1}
        infiniteLoop={true}
        gutter={30}
        leftChevron={<AiFillLeftCircle fontSize={35} />}
        rightChevron={<AiFillRightCircle fontSize={35} />}
        
        
      >
        {reviews.map((review) => (
        <CContainer className='text-center'>
          <CRow>
            <CCol style={{padding:'0 40px'}}>
              <div>
                  <img
                  style={{ width: "150px", borderRadius: "50%" }}
                  src={person}
                  alt=""
                  />
              </div>
              <h2>{review.name}</h2>
              <Rating
                emptySymbol={<AiOutlineStar style={{ color: "goldenrod" }} />}
                fullSymbol={<AiFillStar style={{ color: "goldenrod" }} />}
                initialRating={review.rating}
                readonly
                />
              <p>{review.review}</p>
            </CCol>
          </CRow>
        </CContainer>
        ))}
      </ItemsCarousel>
    </div>
  );
};

export default Reviews;




