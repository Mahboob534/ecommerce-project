import React from "react";
import styled from "styled-components";
import img1 from "../../assets/images/book-1.png";
import img2 from "../../assets/images/book-2.png";
import img3 from "../../assets/images/book-3.png";
import img4 from "../../assets/images/book-4.png";
import img5 from "../../assets/images/book-5.png";
import img6 from "../../assets/images/book-6.png";
import stand from "../../assets/images/stand.png";
import banner from "../../assets/images/banner-bg.jpg";
import Button from "@mui/material/Button";
import { Navigation, Pagination, Autoplay } from 'swiper';
import "swiper/css";

import { Swiper, SwiperSlide } from "swiper/react";
const Section = styled.div`
  direction: rtl;
  background: url(${banner}) no-repeat;
  background-size: content;
  background-position: center;
  
`;
const Row = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 1.5rem;
`;
const Content = styled.div`
  flex: 1 1 30rem;
`;
const BookSlider = styled.div`
  flex: 1 1 20rem;
  text-align: center;
  margin-top: 2rem;
`;

const Slide = styled.img`
  height: 10rem;
  &:hover {
    transform: scale(0.9);
  }
`;
const Image = styled.img`
  width: 100%;
  margin-top: -2rem;
`;
const H3 = styled.h3`
  color: #444;
  margin-top: 8%;
  margin-right: 3rem;
  font-size: 1.5rem;
`;
const P = styled.p`
  color: #666;
  margin-right: 2rem;
  font-size: 0.95rem;
  line-height: 2;
  padding: 1rem 0;
`;

export default function Carousel() {
  return (
    <Section>
      <Row>
        <Content>
          <H3>تا 75٪ تخفیف</H3>
          <P>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است{" "}
          </P>
          <Button
            variant="contained"
            sx={{ mr: 2, fontFamily: " IRANSans-web", textAlign: "center" }}
          >
            اکنون خرید کنید
          </Button>
        </Content>

        <BookSlider className="swiper">
          <Swiper
          styles={{width:'100%',height:"100%"}}
          centeredSlides={true}
          autoplay={{delay:1000}}

          loop={true}
      
        modules={[ Autoplay]}
          
            slidesPerView={3}
           
          
          >
            
              <SwiperSlide>
                <Slide src={img1} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <Slide src={img2} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <Slide src={img3} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <Slide src={img4} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <Slide src={img5} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <Slide src={img6} alt="" />
              </SwiperSlide>
            
            <Image src={stand} alt="" />
          </Swiper>
        </BookSlider>
      </Row>
    </Section>
  );
}
