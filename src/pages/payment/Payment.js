import React, { useEffect, useState } from "react";
import Styles from "./payment.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import LayoutUser from "../../layout/LayoutUser";
import { Button } from "@mui/material";
import { PATHS } from "../../config/routes.config";
import { VscError, GiConfirmed } from "../../assets/images/icons/index";
import getOneProducts from "../../api/getAll/getOneProduct";
import updateOneProduct from "../../api/putAll/updateOneProduct";
import addOrder from "../../api/postAll/addOrder";
import { setOrders } from "../../redux/action/orederSlice";
import { clearCart } from "../../redux/action/cartSlice";


function Payment() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const customDispatch = useDispatch();
  const orderInformation = JSON.parse(localStorage.getItem("orders"));
  const [product, setProduct] = useState([]);
  //console.log(orderInformation);

  useEffect(() => {
    (async () => {
      try {
        if (searchParams.get("status") == "success") {
          await handleUpdateProduct();
          addOrderFunc() 
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, [searchParams]);

  // useEffect(()=>{
  //   if(searchParams.get('status') == 'success'){
  //     getData()

  //     updateOneProduct(item.id, data).then((response) => {
  //         if(response.status == 200) {
  //           addOrder(orderInformation).then((response) => {
  //                 if(response.status == 201) {
  //                     customDispatch(setOrders(""));
  //                     customDispatch(clearCart());
  //                 }
  //                   });
  //                 }
  //             });
  //         }
  //     })
  // })
  //   }
  // }, []);

  console.log(product);

  async function handleUpdateProduct() {
    orderInformation.orderItems.map(async (item) => {
      const product = await getOneProducts(item.id);
      const data = product.data;
      data[0].count = Number(data[0].count) - item.quantity;
      updateOneProduct(item.id, data[0]);
    });
  }
  function addOrderFunc() {
    addOrder(orderInformation).then((response) => {
      if (response.status == 201) {
        customDispatch(setOrders(""));
        localStorage.removeItem("order")
        customDispatch(clearCart());
      }
    });
  }
  return (
    <LayoutUser>
      <div className="content">
        {searchParams.get("status") == "success" ? (
          <div className={Styles.paymentSuccess}>
            <GiConfirmed />
            <h1>پرداخت با موفقیت انجام شد</h1>
            <p>با تشکر از شما برای خرید . سفارش شما با موفقیت انجام شد.</p>
            <Button
              borderRadius
              text="بازگشت به صفحه اصلی"
              type="success"
              size="small"
              click={() => navigate("/")}
            />
          </div>
        ) : (
          <div className={Styles.paymentFailure}>
            <VscError />
            <h1>پرداخت با موفقیت انجام نشد</h1>
            <p>
              هنگام انجام عملیات پرداخت به مشکلی برخورد کردید. لطفا دوباره تلاش
              کنید یا با مدیر سایت تماس بگیرید.
            </p>
            <Button
              borderRadius
              text="مشاهده سبد خرید"
              type="dark"
              size="small"
              click={() => {
                navigate(PATHS.BASKET);
              }}
            />
          </div>
        )}
      </div>
    </LayoutUser>
  );
}

export { Payment };
