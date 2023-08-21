import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../../css/Components.css';


export default function BannerArea({
    checkTitleHome,
    titlePages,
    buttonBanner, 
    detailBanner, 
    linkPage, 
    arrowBanner, 
    linkRoot, 
    breakLineTitlePages, 
    breakLineDetailBanner
}) {
    var temp = '';
    if(checkTitleHome === true)
    {
        temp = 'wrap-banner-content-644';
    }else{
        temp = 'wrap-banner-content-300';
    }

    return(
        <section className="banner-area">
            <div className="overplay"></div>
             <Container>
                 <div className={temp} >
                    <div className="row-bn-area">
                        <div className="text-banner-title">
                            <h1 className='style-title'>{titlePages}</h1>
                            <h1 className='style-title'>{breakLineTitlePages}</h1>
                        </div>
                        {/* {reChange} */}
                        <div className="text-banner-detail">
                            <p className='style-detail' >{detailBanner}</p>
                            <p className='style-detail'>{breakLineDetailBanner}</p>l
                        </div>
                        {
                            buttonBanner === 
                            'get start' ? <button className="header-bnt mt-10 primary-bnt" onClick = {()=>{}}>{buttonBanner}</button> : ''
                        
                        }

                        <div className="link-banner">
                            <Link  className="link-root">{linkRoot}</Link>
                            <p className="arrow-banner">{arrowBanner}</p>
                            <Link  className="link-page">{linkPage}</Link>
                        </div>
                    </div>
                 </div>
            </Container>
        </section>
       
    )
};
