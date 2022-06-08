import React from 'react'
import styled from 'styled-components'
import {Icons} from './Icons'
import {FaShippingFast,FaLock,FaRedo} from 'react-icons/fa'
import {BsHeadset} from 'react-icons/bs'

const Section=styled.section`
margin-right:1%;
display: grid;
grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
    gap:1rem;
`;
const Icon=styled.div`

  display: flex;
    align-items: center;
    gap:1rem;
   color:#27ae60 !important;
`;
const I=styled.i`
font-size: 2rem; 
 color:#27ae60 !important;
`
const Content = styled.div`
  flex: 1 1 30rem;
`;
const H3=styled.h3`
font-size: 1rem;
color:#444;
padding-bottom: .5rem;

`;
const P=styled.p`
font-size:.75rem;
 color:#666;
`


console.log("icon:",Icons)
export default function ShoppingContainer() {
  return (
    <Section>

    <Icon>
        <I><FaShippingFast/></I>
        <Content>
            <H3>ارسال رایگان</H3>
            <P>سفارش بالای 100 هزار تومان</P>
        </Content>
    </Icon>

    <Icon>
        <I> <FaLock/></I>
        <Content>
            <H3>پرداخت امن</H3>
            <P>100 پرداخت مطمئن</P>
        </Content>
    </Icon>

    <Icon>
        <I> <FaRedo/></I>
        <Content>
            <H3>بازگشت آسان</H3>
            <P>10 روز مهلت بازگشت</P>
        </Content>
    </Icon>

    <Icon>
        <I><BsHeadset/></I>
        <Content>
            <H3>پشتیبانی 7/24</H3>
            <P>در هر زمان با ما تماس بگیرید</P>
        </Content>
    </Icon>

</Section>
   
  )
}
