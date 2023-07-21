import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../../css/Components.css';


export default function BannerArea({titlePages, buttonBanner, detailBanner, linkPage, arrowBanner, linkRoot}) {
    var temp = '';
    if(titlePages === 'Precise concept design for stylish living')
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
                        <h1 className="text-banner-title">{titlePages}</h1>
                        <p className="text-banner-detail">{detailBanner}</p>
                        {
                            buttonBanner === 'get start' 
                                ? <button className="header-bnt mt-10 primary-bnt" onClick = {()=>{}}>{buttonBanner}</button> : ''
                        
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
