import React from 'react'
import * as AiIcons from 'react-icons/ai';
import BannerArea from './common/BannerArea'
import BrandsArea from './common/BrandsArea';
import FooterArea from './common/FooterArea';
import GalleryArea from './common/GalleryArea'


function Project() {
  return (
    <div className='serviceStyle'>

      <BannerArea
        checkTitleHome={false}
        titlePages='Projects'
        linkRoot='Home'
        arrowBanner={<AiIcons.AiOutlineArrowRight/>}
        linkPage='Projects'
      />
      <GalleryArea/>
      <BrandsArea/>
      <FooterArea/>
    </div>
  )
}
export default Project