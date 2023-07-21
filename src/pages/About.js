import React from 'react'
import BannerArea from './common/BannerArea';
import AboutVideoArea from './common/aboutPrivate/AboutVideoArea';
import * as AiIcons from 'react-icons/ai';
import FeatureArea from './common/FeatureArea';
import TestimoniaArea from './common/TestimoniaArea';
import CalltoArea from './common/CalltoArea';
import BlogArea from './common/BlogArea';
import BrandsArea from './common/BrandsArea';
import FooterArea from './common/FooterArea';

function About() {
  return (
    <div className='aboutStyle'>
        <BannerArea
          titlePages='About Us'
          linkRoot='Home'
          arrowBanner= {<AiIcons.AiOutlineArrowRight/>}
          linkPage='About Us'
          
        />
        <AboutVideoArea/>
        <FeatureArea/>
        <TestimoniaArea/>
        <CalltoArea/>
        <BlogArea/>
        <BrandsArea/>
        <FooterArea/>
    </div>
  )
}

export default About
