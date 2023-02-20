import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
const Banner = () => {

  return (
    <div className="py-2">
    <Carousel infiniteLoop showArrows={false} showIndicators={false} swipeable={true}>
      <div className="w-full bg-slate-400 h-[30vh]">
  
        
      </div>
      <div className="w-full bg-red-400 h-[30vh]">
      
      </div>
      <div className="w-full bg-yellow-400 h-[30vh]">
     
      </div>

    </Carousel>
    </div>
  )
}

export default Banner