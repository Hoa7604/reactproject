import React from 'react'
import BannerArea from './common/BannerArea';
import FeatureArea from './common/FeatureArea';
import GalleryArea from './common/GalleryArea';
import ServiceArea from './common/ServiceArea';
import TestimoniaArea from './common/TestimoniaArea';
import CalltoArea from './common/CalltoArea';
import BlogArea from './common/BlogArea';
import BrandsArea from './common/BrandsArea';
import FooterArea from './common/FooterArea';

function Home() {

  return (
    <div className='homeStyle'>
        <BannerArea
          titlePages = 'Precise concept design for stylish living' 
          detailBanner = 'If you are looking at blank cassettes on the web, you may be very confused at the difference in price. You may see some for as low as $.17 each. You may be saying to yourself.'
          buttonBanner = 'get start'
        />
        <ServiceArea/>
        <GalleryArea/>
        <FeatureArea/>
        <TestimoniaArea/>
        <CalltoArea/>
        <BlogArea/>
        <BrandsArea/>
        <FooterArea/>
    </div>
  )
}

export default Home
