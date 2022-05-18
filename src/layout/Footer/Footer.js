import React from 'react'
import Grid from '@mui/material/Grid';
import styled from 'styled-components';
const Div = styled.div`
   direction:rtl;
  background:#d8b4fe;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top:2%;
`;
export default function Footer() {
  return (
    <Div>
    <Grid container >
        <Grid item xs={5} sx={{p:3}}>
        <h4>درباره شهر کتاب</h4>
        <p>در فرصت‌های اندک میان هیاهوی روزانه، زمانی که می‌شود استراحت کوتاهی کرد، یک فنجان چای نوشید و به موسیقی دلخواه خود گوش کرد. زمانیست که می‌شود در فضای مجازی گشتی زد، اخبار روز را مرور کرد و بر روی عکس‌ها و حرف‌های دوستان نظر داد. زمانیست که می‌توان وارد این فروشگاه شد، کتابی سفارش داد و در فاصله‌ای کوتاه آن را تحویل گرفت. حال دیگر این نوای موسیقی و عطر چای شماست که به فروشگاه کتاب ما حال و هوایی دیگر می‌دهد.</p>

        </Grid>
        <Grid item xs={3} sx={{p:3}}>
        <h4>
        راهنمای استفاده
        </h4>
        
        </Grid>
        <Grid item xs={4} sx={{p:2}}>
        <h4> تماس با ما </h4>
        </Grid>
      </Grid>
      </Div>
  )
}
