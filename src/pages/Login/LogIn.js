import React, { useState } from "react";


import styled from "styled-components";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setToken } from "../../redux/action/TokenSlice";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

import { IS_LOGGED_IN, ACCESS_TOKEN } from "../../config/variable.config";
import LOGIN from "../../config/url.config";
import { PATHS } from "../../config/routes.config";
import http from "../../services/HttpService";
import image from './blog-3.jpg'
const Loginstyle = styled("div")`
background-image: url('${image}') !important;
  background-size:cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 100vh;
  margin: 0!important;
  padding-top:15%
  
 
`;
const Field = styled('div')`
  min-height: 50px;
  position: relative;
  width: 100%;
  margin-top: 30px;

`
const Form=styled('form')`
  position: relative;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  max-width: 400px;
 margin:0 auto;
  padding: 45px;
  text-align: center;

  input {
    outline: 0;
    background: #f2f2f2;
    width: 100%;
    border: 0;
    border-radius: 5px;
    margin: 0 0 15px;
    padding: 15px;
    box-sizing: border-box;
    font-size: 1.2rem;
    font-family: "Comfortaa", cursive;
    &:focus {
      background: #dbdbdb;
    }
  }
  button {
    font-family: "Comfortaa", cursive;
    text-transform: uppercase;
    outline: 0;
    background: #4b6cb7;
    width: 100%;
    border: 0;
    border-radius: 5px;
    padding: 15px;
    color: #ffffff;
    font-size: 14px;
    -webkit-transition: all 0.3 ease;
    transition: all 0.3 ease;
    cursor: pointer;
    margin-bottom: 18px;
    &:active {
      background: #395591;
    }
  }
  span {
    color :#65657b;
    font-size: 25px;
    left: 15%;
    line-height: 14px;
    position: absolute;
    transform-origin: 0 50%;
    transition: transform 200ms, color 200ms;
    top: 41%;
    z-index: 2;
  }
  a {
    color: white;
    width: 100%;
    display: block;
    text-align: left;
    text-decoration: none;
  }
  `;
  const Error=styled('p')`
  color: #dc2f55;
  font-size: 14px;
  padding-left: 10px;
  margin: 4px 0 6px 0;
` 
  


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
  // const onSubmit =async (data) => {
  //   localStorage.removeItem(ACCESS_TOKEN)
  //   let response = await ApiAdmin.login(data)
  //   localStorage.setItem(ACCESS_TOKEN, response.data.token)
  //   dispatch(setlogin(true))
  //   //console.log(response.data.token);
  //   navigate(PATHS.DASHBOARD)
  // }

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      http
        .post("/auth/login", values)
        .then((res) => {
          if (res.status == 200) {
            dispatch(setToken(res.data.token));
           navigate(PATHS.DASHBOARD, { replace: false });
          }
        })
        .catch(() => {
          alert("نام کاربری یا رمز عبور اشتباه می باشد");
        });
    },
  });
  return (
    <Loginstyle>
      <Field >
        <Form onSubmit={formik.handleSubmit}>
          <div>
            <input
              name="username"
              type="text"
              placeholder="نام کاربری*"
              onChange={formik.handleChange}
              value={formik.values.username}
            />
            {formik.touched.username && formik.errors.username ? (
              <Error>{formik.errors.username}</Error>
            ) : null}
          </div>
          <div>
            <input
              name="password"
              type={passwordVisibility ? "password" : "text"}
              placeholder="کلمه عبور*"
              onChange={formik.handleChange}
              value={formik.values.password}
            />

            <span >
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
              <Error >{formik.errors.password}</Error>
            ) : null}
          </div>
          <button type="submit">ورود</button>
          <Link to={PATHS.HOME}>بازگشت به صفحه اصلی</Link>
        </Form>
      </Field>
    </Loginstyle>
  );
};
export { LogIn };
