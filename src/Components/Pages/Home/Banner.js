import { CCarousel, CCarouselCaption, CCarouselItem, CImage } from '@coreui/react';
import React from 'react';
import cycle1 from './img/cycle1.jpg'
import cycle2 from './img/cycle2.jpg'
import cycle3 from './img/cycle3.jpg'
const Banner = () => {
    return (
        <div>
           <CCarousel controls indicators>
                <CCarouselItem>
                    <CImage className="d-block w-100" src={cycle1} alt="slide 1" />
                    <CCarouselCaption className="d-none d-md-block">
                    <h5>First slide label</h5>
                    <p>Some representative placeholder content for the first slide.</p>
                    </CCarouselCaption>
                </CCarouselItem>
                <CCarouselItem>
                    <CImage className="d-block w-100" src={cycle2} alt="slide 2" />
                    <CCarouselCaption className="d-none d-md-block">
                    <h5>Second slide label</h5>
                    <p>Some representative placeholder content for the first slide.</p>
                    </CCarouselCaption>
                </CCarouselItem>
                <CCarouselItem>
                    <CImage className="d-block w-100" src={cycle3} alt="slide 3" />
                    <CCarouselCaption className="d-none d-md-block">
                    <h5>Third slide label</h5>
                    <p>Some representative placeholder content for the first slide.</p>
                    </CCarouselCaption>
                </CCarouselItem>
                </CCarousel> 
        </div>
    );
};

export default Banner;