import React,{useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  clearCart,
  decreaseCart,
  getTotals,
  removeFromCart,
} from "../../redux/action/cartSlice";
import {PATHS} from '../../config/routes.config'
import Styles from './cart.module.css'
import LayoutUser from '../../layout/LayoutUser';
import { Link,useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import getOneProducts from '../../api/getAll/getOneProduct';

function Cart() {

  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();
const navigate = useNavigate()
  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);
  
  const handleAddToCart = (product) => {
    console.log(product);
if(product.count > product.cartQuantity){
  dispatch(addToCart(product));
}else{
  toast.error("محصول موجودی ندارد", {position: "bottom-left",})
}
    
  };
  const handleDecreaseCart = (product) => {
    dispatch(decreaseCart(product));
  };
  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product));
  };
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  function HandleCart(){
    navigate(PATHS.BUY)
  }
  return (
<LayoutUser>
  <ToastContainer/> 
    <div className={Styles.cartcontainer}>
    <h2>سبد خرید</h2>
    {cart.cartItems.length === 0 ? (
      <div className={Styles.cartempty}>
        <p>سبد خرید شما خالی می باشد</p>
        <div className="start-shopping">
          <Link to={PATHS.HOME}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-arrow-left"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
              />
            </svg>
            <span>رفتن به صفحه اصلی</span>
          </Link>
        </div>
      </div>
    ) : (
      <div>
        <div className={Styles.titles}>
          <h3 className={Styles.producttitle}>محصول</h3>
          <h3 className={Styles.price}>قیمت</h3>
          <h3 className={Styles.quantity}>تعداد</h3>
          <h3 className={Styles.total}>قیمت کل</h3>
        </div>
        <div className={Styles.cartitems}>
          {cart.cartItems &&
            cart.cartItems.map((cartItem) => (
              <div className={Styles.cartitem} key={cartItem.id}>
                <div className={Styles.cartproduct}>
                  <img src={`http://localhost:3002/files/${cartItem.thumbnail}`} alt={cartItem.name} />
                  <div>
                  <Link to={`/Detail/${cartItem.id}`}>
                  <h3>{cartItem.name}</h3>
                      </Link>
                    
                    <p>{cartItem.desc}</p>
                    <button onClick={() => handleRemoveFromCart(cartItem)}>
                      حذف
                    </button>
                  </div>
                </div>
                <div className={Styles.cartproductprice}>{cartItem.price}</div>
                <div className={Styles.cartproductquantity}>
                  <button onClick={() => handleDecreaseCart(cartItem)}>
                    -
                  </button>
                  <div className={Styles.count}>{cartItem.cartQuantity}</div>
                  <button onClick={() => handleAddToCart(cartItem)}>+</button>
                </div>
                <div className={Styles.cartproducttotalprice}>
                  {cartItem.price * cartItem.cartQuantity} تومان
                </div>
              </div>
            ))}
        </div>
        <div className={Styles.cartsummary}>
          <button className={Styles.clearbtn} onClick={() => handleClearCart()}>
           حذف سبد خرید
          </button>
          <div className={Styles.cartcheckout}>
            <div className={Styles.subtotal}>
              <span>قیمت نهایی</span>
              <span className={Styles.amount}>{cart.cartTotalAmount} تومان</span>
            </div>
            <p>مالیات بر ارزش افزوده</p>
            <button onClick={HandleCart}>نهایی کردن خرید</button>
            <div className={Styles.continueshopping}>
              <Link to={PATHS.HOME}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-arrow-left"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                  />
                </svg>
                <span>ادامه خرید</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    )}
  </div>
  </LayoutUser>
  )
}

export {Cart}