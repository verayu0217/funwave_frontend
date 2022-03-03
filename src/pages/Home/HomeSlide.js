import React from 'react';
import "./HomeSlide.scss";
import "../Home/Home.scss";
import { useState } from "react";
import Slider from "react-slick";

import { RiArrowRightCircleFill } from 'react-icons/ri';
import { RiArrowLeftCircleFill } from 'react-icons/ri';

import HomeInfoCard from './HomeInfoCard.js';
import { useParams, useNavigate, Link } from "react-router-dom";



function HomeSlide(props) {

    const { cardInfoData, setCardInfoData } = props;

const NextArrow = ({ onClick }) => {
    return (
    <div className="arrowCard nextCard" onClick={onClick}>
        <RiArrowRightCircleFill />
    </div>
    );
};

const PrevArrow = ({ onClick }) => {
    return (
    <div className="arrowCard prevCard" onClick={onClick}>
        <RiArrowLeftCircleFill />
    </div>
    );
};

const [cardIndex, setCardIndex] = useState(0);

const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setCardIndex(next),
};

return (
    <>
    <div className="App">
            <Slider {...settings}>
                {cardInfoData.map((cardInfoDataItem, idx) => {
                        return (
                        <React.Fragment key={idx}>

                        <div className={idx === cardIndex ? "slideHome activeSlideHome" : "slideHomeCover slideHome"} key = {idx}>
                            <Link to={`/information/${cardInfoDataItem.info_no}`} style={{textDecoration: 'none', color: '#333333'}}>
                            <div className="imgHome">
                                <HomeInfoCard cardInfoDataItem={cardInfoDataItem}/>
                            </div>
                            </Link>
                        </div>

                        </React.Fragment>
                        );
                })}
            </Slider>
    </div>
    
    </>
);
}

export default HomeSlide;