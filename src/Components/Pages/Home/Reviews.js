import React, { useEffect, useState } from 'react';
import ItemsCarousel from 'react-items-carousel';
import {BiStar} from 'react-icons/bi'
import Rating from 'react-rating';
import person from './user.png'
const Reviews = () => {
    const [reviews, setReviews] = useState([])
    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const chevronWidth = 40;
    useEffect(() => {
        fetch('https://calm-gorge-61039.herokuapp.com/review')
        .then(res => res.json())
        .then(data => setReviews(data))
    }, [])
  return (
    <div style={{ padding: `0 ${chevronWidth}px` }}>
      <ItemsCarousel
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={2}
        gutter={20}
        leftChevron={<button>{'<'}</button>}
        rightChevron={<button>{'>'}</button>}
        outsideChevron
        chevronWidth={chevronWidth}
      >
        {
            reviews.map(review => <div>
                <div className="text-center flex items-center justify-center" style={{boxShadow: 'rgba(10px,10px,10px,0.3)'}} >
            <div style={{ height: 400, width: 450, background: '#FFF' }}>
            <img  style={{width:'150px', borderRadius: '50%'}} src={person} alt="" />
            <h2>{review.name}</h2>
            <Rating initialRating={review.rating}
   readonly/>
            <p> {review.review} </p>
            </div>
        </div>
            </div>)
        }
      </ItemsCarousel>
    </div>
  );
};

export default Reviews;