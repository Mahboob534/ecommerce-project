import React, { useState } from "react";

import Styles from './login.module.css';


import { useFormik } from "formik";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setlogin } from "../../redux/action/AdminSlice";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

import { IS_LOGGED_IN,ACCESS_TOKEN } from "../../config/variable.config";
import LOGIN from "../../config/url.config";
import { PATHS } from "../../config/routes.config";
import {ApiAdmin} from '../../api/api'


const validate = (values) => {
  const errors = {};
  if (!values.username) {
    errors.username = "فیلد نام کاربری را نمی تواند خالی باشد";
  }
  if (!values.password) {
    errors.password = "پسورد نمی تواند خالی باشد";
  }

  return errors;
};

const LogIn = () => {
  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const [iconEye, setIconEye] = useState("eye");
  const dispatch = useDispatch();
  const handlePasswordVisibility = () => {
    if (iconEye === "eye") {
      setIconEye("eye-off");
      setPasswordVisibility(!passwordVisibility);
    } else if (iconEye === "eye-off") {
      setIconEye("eye");
      setPasswordVisibility(!passwordVisibility);
    }
  };

  const navigate = useNavigate();
  const onSubmit =async (data) => {
    localStorage.removeItem(ACCESS_TOKEN)
    let response = await ApiAdmin.login(data)
    localStorage.setItem(ACCESS_TOKEN, response.data.token)
    dispatch(setlogin(true))
    console.log(response.data.token);
    navigate(PATHS.DASHBOARD)
  }

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validate,
    onSubmit

  //axios
      //   .post('http://localhost:3002/auth/login',values)
      //   .then((res) => {
      //     if (res.status == 200) {
      //      dispatch(setlogin(true))
      //      localStorage.setItem(ACCESS_TOKEN,res.data.token)
      //       navigate('/Dashboard',{replace:false})
      //     }
      //   })
      //   .catch(() => {
      //     alert("با این نام کاربری کاربری ثبت نشده");
      //   });

      
    
  });
  return (
    <div>
      <div className={Styles.field}>
        <form className={Styles.formHolder} onSubmit={formik.handleSubmit}>
          <div className={Styles.field}>
            <input
            className={Styles.inputlogin}
              name="username"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.username}
            />
            <label className={Styles.labelLogin} htmlFor="name">*نام کاربری </label>
            {formik.touched.username && formik.errors.username ? (
              <p className={Styles.error}>{formik.errors.username}</p>
            ) : null}
          </div>
          <div className={Styles.field}>
            <input
             className={Styles.inputlogin}
              name="password"
              type={passwordVisibility ? "password" : "text"}
              onChange={formik.handleChange}
              value={formik.values.password}
            />
            <label className={Styles.labelLogin} htmlFor="password">پسورد*</label>
            <span className={Styles.span}>
              {iconEye == "eye" ? (
                <FaRegEye
                  icon={["fa", "FaRegEye"]}
                  onClick={handlePasswordVisibility}
                />
              ) : (
                <FaRegEyeSlash
                  icon={["fa", "FaRegEye"]}
                  onClick={handlePasswordVisibility}
                />
              )}
            </span>

            {formik.touched.password && formik.errors.password ? (
              <p className={Styles.error}>{formik.errors.password}</p>
            ) : null}
          </div>
          <button  type="submit"  className={Styles.button}>ورود</button>
          <Link
           className={Styles.backLink}
            to={PATHS.HOME}
          >
            بازگشت به صفحه اصلی
          </Link>
        </form>
      </div>
    </div>
  );
};
export { LogIn };
