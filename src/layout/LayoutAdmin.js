import React from "react";
import HeaderAdmin from "./Header/HeaderAdmin";
import Footer from "./Footer/Footer";
const LayoutAdmin = ({ children }) => {
  return (
    <>
      <HeaderAdmin />
      {children}
      <Footer />
    </>
  );
};
export default LayoutAdmin;
