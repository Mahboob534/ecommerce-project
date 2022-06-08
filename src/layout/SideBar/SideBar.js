import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';


const Nav = styled.div`
direction:rtl;
  background: #27ae60;
  display: flex;
  justify-content: flex-start;
  margin-left:-5%;
 
`;

const SidebarNav = styled.nav`
 direction:rtl;
  background: #27ae60;
  width: 200px;
  height: 100vh;
  display: flex;
  justify-content: center;
  top:18;
  `;

const SidebarWrap = styled.div`
  width: 100%;
  height:100vh
`;

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(true);

  
  return (
    <>
    <Nav>
    <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
           
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
          </SidebarWrap>
        </SidebarNav>
    </Nav>
        
  
    </>
  );
};

export default Sidebar;
