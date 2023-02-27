import React from 'react'
import { Carousel } from "react-responsive-carousel"
const Banner = () => {



  return (
    <div className="py-2">
      <Carousel showArrows={true}>
        <img src="http://localhost/galaxy/wp-content/uploads/2023/02/Samsung_Galaxy_S23_Pre-Order_Banners-S23.webp"/>
        <img src="http://localhost/galaxy/wp-content/uploads/2023/02/Samsung_Galaxy_S23_Pre-Order_Banners-S23.webp"/>      
        <img src="http://localhost/galaxy/wp-content/uploads/2023/02/Samsung_Galaxy_S23_Pre-Order_Banners-S23.webp"/>

      </Carousel>
    </div>
  )
}

export default Banner