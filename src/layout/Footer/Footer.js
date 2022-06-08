import React from 'react'
import Grid from '@mui/material/Grid';
import styled from 'styled-components';
import Styles from './Footer.module.css'
import { Link } from 'react-router-dom';
import {PATHS} from '../../config/routes.config'
import {FiArrowRight} from 'react-icons/fi'
import {FaPhone,FaEnvelope,FaFacebook,FaTwitter,FaInstagram,FaLinkedinIn,FaPinterest} from 'react-icons/fa'

const Div = styled.div`
   direction:rtl;
  background:#27ae60;
   display: flex;
  justify-content: center;
  align-items: center;
  margin-top:2%;
`;
const H2=styled.h2`
margin-bottom:3%;
`;
const Span=styled.span`
background:#27ae60;
font-size:2rem;
color:#fff;
margin:0 .5%
`;

export default function Footer() {
  return (
    <>
    <Div>
    <Grid container >
        <Grid item xs={12} sm={12} md={4} sx={{p:3}} color='#fff'>
        <H2>درباره شهر کتاب</H2>
        <p>در فرصت‌های اندک میان هیاهوی روزانه، زمانی که می‌شود استراحت کوتاهی کرد، یک فنجان چای نوشید و به موسیقی دلخواه خود گوش کرد. زمانیست که می‌شود در فضای مجازی گشتی زد، اخبار روز را مرور کرد و بر روی عکس‌ها و حرف‌های دوستان نظر داد. زمانیست که می‌توان وارد این فروشگاه شد، کتابی سفارش داد و در فاصله‌ای کوتاه آن را تحویل گرفت. حال دیگر این نوای موسیقی و عطر چای شماست که به فروشگاه کتاب ما حال و هوایی دیگر می‌دهد.</p>

        </Grid>
        <Grid item xs={12} sm={12} md={4} color='#fff'sx={{p:3}}>
        <H2>
        راهنمای استفاده
        </H2>
        <Grid sx={{p:3, lineHeight:2}} color='#fff'>
        <FiArrowRight/><Link to={PATHS.LOGIN} className={Styles.link}>  حساب کاربری </Link><br/>
        <FiArrowRight/><Link to={PATHS.CART} className={Styles.link}>  اقلام سفارش داده شده </Link><br/>
        <FiArrowRight/> <Link to={PATHS.HOME} className={Styles.link}>قوانین </Link><br/>
        <FiArrowRight/> <Link to={PATHS.HOME} className={Styles.link}>  روش پرداخت </Link><br/>
        <FiArrowRight/>  <Link to={PATHS.HOME} className={Styles.link}> دیگر سرویس ها </Link><br/>
        </Grid>
            
           
        
        </Grid>
        <Grid item xs={12} sm={12} md={4} sx={{p:2,lineHeight:2}}color='#fff'>
        <H2> تماس با ما </H2>
            <span > <FaPhone/> 123-456-789+</span><br/>
            <span> <FaPhone/> 111-222-333+ </span><br/>
            <span> <FaEnvelope/> admin@netcopy.ir </span><br/>
        </Grid>

      </Grid>
     
      </Div>
      <Grid xs={12} sx={{background:'#27ae60',textAlign:'center'}}>
      <Span ><FaFacebook/></Span>
        <Span ><FaTwitter/></Span>
        <Span > <FaInstagram/></Span>
        <Span ><FaLinkedinIn/></Span>
        <Span ><FaPinterest/></Span>
      </Grid>
      
      </>
  )
}
