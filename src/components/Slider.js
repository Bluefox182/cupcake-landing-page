import React, { useRef, useState } from 'react';
import styled from 'styled-components';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

//Images
import slider01 from '../assets/img/hero01.jpg';
import slider02 from '../assets/img/hero02.jpg';
import slider03 from '../assets/img/hero03.jpg';
import slider04 from '../assets/img/hero04.jpg';
import slider05 from '../assets/img/hero05.jpg';

import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper';

function Slider() {
  return (
    <StyledSlider>
      <Swiper
        spaceBetween={30}
        effect={'fade'}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        className='mySwiper'
      >
        <SwiperSlide>
          <div className='Hero-Image '>
            <div className='Hero-Text'>
              <h1>We Create Delicious Memories</h1>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='Hero-Image2 '>
            <div className='Hero-Text'>
              <h1>We Create Delicious Memories</h1>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='Hero-Image3 '>
            <div className='Hero-Text'>
              <h1>We Create Delicious Memories</h1>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='Hero-Image4 '>
            <div className='Hero-Text'>
              <h1>We Create Delicious Memories</h1>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='Hero-Image5 '>
            <div className='Hero-Text'>
              <h1>We Create Delicious Memories</h1>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </StyledSlider>
  );
}

export default Slider;

const StyledSlider = styled.div`
  html,
  body {
    position: relative;
    height: 100%;
  }

  body {
    background: #eee;
    font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
    font-size: 14px;
    color: #000;
    margin: 0;
    padding: 0;
  }

  .swiper {
    width: 100%;
    height: 60vh;
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .swiper {
    margin-left: auto;
    margin-right: auto;
  }

  .Hero-Text {
    h1 {
      font-family: 'Pacifico', cursive;
      color: #ffffff;
      font-weight: 700;
      font-size: 65px;
      text-shadow: 0 0 10px #354259;
      text-align: center;
      justify-content: center;
      display: flex;
      flex-wrap: wrap;
      height: 60vh;
      align-items: center;
      overflow: hidden;
    }
    @media (max-width: 768px) {
      h1 {
        font-size: 44px;
      }
    }
  }

  .Hero-Image,
  .Hero-Image2,
  .Hero-Image3,
  .Hero-Image4,
  .Hero-Image5 {
    background-image: url(${slider01});
    /* background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url(${slider01}); */
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 60vh;
    width: 100%;
    @media (max-width: 768px) {
    }
  }
  .Hero-Image2 {
    background-image: url(${slider05});
  }
  .Hero-Image3 {
    background-image: url(${slider03});
  }
  .Hero-Image4 {
    background-image: url(${slider04});
  }
  .Hero-Image5 {
    background-image: url(${slider02});
  }

  .swiper-button-next,
  .swiper-button-prev {
    color: #ef9f9f;
    &:hover {
      transform: scale(1.2);
    }
  }

  .swiper-pagination-bullet {
    background: #354259;
  }
`;
