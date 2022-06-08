import React from 'react'
import styled from 'styled-components';
const Menu = styled.div`
direction:rtl;
background:#27ae60;
 &:active
  position:fixed;
 top:0; left:0; right:0;
 z-index: 1000; 
 
`;
const navbar=styled.nav`
text-align: center;

`
const Link=styled.a`
color:#fff;
  display: inline-block;
  padding:.90rem;
  font-size: 0.95rem;
  text-decoration:none;
  &:hover {
    background:#219150;

  }
`















export default function header() {
  return (
    <Menu>
    <navbar>
        <Link href="#home">خانه</Link>
        <Link href="#featured">ویژه</Link>
        <Link href="#arrivals">جدیدها</Link>
        <Link href="#reviews">نظرات</Link>
        <Link href="#blogs">وبلاگ</Link>
    </navbar>
</Menu>
  )
}
