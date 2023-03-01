import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const Banner = () => {
 
 
  const responsive = {
    0: { items: 1 ,},
    568: { items: 1 },
    1024: { items: 1 },
    };

    const items = [
      
      <div className="item" data-value="1">
      <img src="https://cdn.mos.cms.futurecdn.net/xz7tsxrUbTfFnXfiaUbZSL-480-80.jpg" />
      </div>,
      <div className="item" data-value="2">
      <img src="http://wpnextecommerce.byethost10.com/wp-content/uploads/2023/03/Samsung_Galaxy_S23_Pre-Order_Banners-S23.webp" />
      </div>,
      <div className="item" data-value="3">
      <img src="http://wpnextecommerce.byethost10.com/wp-content/uploads/2023/03/VALENTINE_WEB_BANNER_P1-01.webp" />
      </div>,,
  ];
  return (
    <div className="py-2 px-4">
      <AliceCarousel
      autoHeight="false"
      disableDotsControls
      disableButtonsControls
        autoPlayInterval ="2000"
        animationDuration = "1000"
        infinite={true}
        autoPlay={true}
        items={items}
        responsive={responsive}
        controlsStrategy="alternate"
    />
    
    </div>
  )

}

export default Banner