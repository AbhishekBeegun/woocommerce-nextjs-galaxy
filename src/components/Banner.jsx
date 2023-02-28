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
      <img src="https://www.euronics.co.uk/medias/lg-brand-page-hero-image?context=bWFzdGVyfGltYWdlc3w0NjQ5MTh8aW1hZ2UvanBlZ3xpbWFnZXMvaDM3L2hhMi84OTQxMDg5OTgwNDQ2LmpwZ3wyNGExNmRiYTk1NTI0NmZhYzk1ZTMzYmFmMDQwMTk4MTdkYWY2ZjUzMTI4YTVmYTY3NmY5N2E2YjQ0NzI3YjFi" />
      </div>,
      <div className="item" data-value="3">
      <img src="https://www.skyworth.net/content/dam/skyworth/global/about-us/BrandBanner_PC.jpg" />
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