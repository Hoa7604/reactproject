import React from 'react'
import * as AiIcons from 'react-icons/ai';
import BannerArea from './common/BannerArea';
import ContactArea from './common/contactPrivate/ContactArea';
import FooterArea from './common/FooterArea';


function Contact() {
  return (
    <div className='serviceStyle'>
      <BannerArea
        checkTitleHome = {false}
        titlePages='Contact Us'
        linkRoot='Home'
        arrowBanner={<AiIcons.AiOutlineArrowRight/>}
        linkPage='Contact Us'
      />
      <ContactArea/>
      <FooterArea/>
    </div>
  )
}
export default Contact