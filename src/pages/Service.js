import React from 'react'
import * as AiIcons from 'react-icons/ai';
import BannerArea from './common/BannerArea';
import BrandsArea from './common/BrandsArea';
import CalltoArea from './common/CalltoArea';
import FeatureArea from './common/FeatureArea';
import ServiceArea from './common/ServiceArea';
import FooterArea from './common/FooterArea';

function Service() {
  return (
    <div className='serviceStyle'>
      <BannerArea
        checkTitleHome={false}
        titlePages = 'Services'
        linkRoot = 'Home'
        arrowBanner = {<AiIcons.AiOutlineArrowRight/>}
        linkPage = 'Services'
      />
      <ServiceArea/>
      <FeatureArea/>
      <CalltoArea/>
      <BrandsArea/>
      <FooterArea/>
    </div>

  
  )
}
export default Service