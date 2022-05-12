import React, { useState, useEffect } from "react";
// import { Formik } from "formik";
import { useFormik } from "formik";
import axios from "axios";
import style from "../../assets/styles/style.css";

import { Link,useNavigate } from "react-router-dom";
import { PATHS } from "../../config/routes.config";
import {loginUser} from '../../services/LoginService'

//import * as api from '../../api/api.api'

// import Input from "../../componentes/Input/Input";
// import Label from "../../componentes/Label/Label";
// import Button from "../../componentes/Button/Button"

import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

import {BASE_URL, ACCESS_TOKEN, IS_LOGGED_IN } from "../../config/variable.config";
import { useDispatch } from "react-redux";
import {login} from '../../redux/action/AdminSlice'

const validate = (values) => {
  const errors ={};
  if (!values.name) {
    errors.name = "فیلد نام کاربری را نمی تواند خالی باشد";
  } 
  if (!values.password) {
    errors.password = "پسورد نمی تواند خالی باشد" ;
  }

  return errors;
}

const LogIn = () => {
 
  const [userInfo, setUserInfo] = useState({"username" : "admin", "password":"admin"});
   useEffect(() => {
  //   axios
  //     .post("/auth/login",userInfo)
  //     .then((res) =>{ 
  //     navigate(PATHS.DASHBOARD)
  //     setUserInfo(res.data)});
  axios.get('http://localhost:3002/whoami')
  .then(res=>setUserInfo(res.data))
  .catch(error=>console.log(error))


  }, []);
  

//console.log(userInfo);
  
  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const [iconEye, setIconEye] = useState("eye");
  const dispatch = useDispatch()
  const handlePasswordVisibility = () => {
    if (iconEye === "eye") {
      setIconEye("eye-off");
      setPasswordVisibility(!passwordVisibility);
    } else if (iconEye === "eye-off") {
      setIconEye("eye");
      setPasswordVisibility(!passwordVisibility);
    }
  };
  const navigate = useNavigate()

 
  const formik = useFormik({
    initialValues: {
     username: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      if(values.username === userInfo.username && values.password === userInfo.password){
       
        dispatch(login(true))
        navigate(PATHS.DASHBOARD)
      }
  
  
      // try{
      //   const  {data}= await loginUser(values)
      //   console.log({data});
      //  navigate(PATHS.DASHBOARD)
        
      // }
      // catch(e){
      //   alert("با این نام کاربری کاربری ثبت نشده")
      // }
      // if(values.username == userInfo.username && values.password == userInfo.password){
      //   IS_LOGGED_IN ="true"
      //   //Dispatch(login(true))
      //   navigate(PATHS.DASHBOARD ,{replace : true} )}
      
    },
   });

  return (
    <div>
      <div className="feild">
        <form className="formHolder" onSubmit={formik.handleSubmit}>
          <div className="field">
            <input
              name="username"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.username}
            />
            <label htmlFor="name">*نام کاربری </label>
            {formik.touched.username && formik.errors.username ? (
              <p className="error">{formik.errors.username}</p>
            ) : null}
          </div>
          <div className="field">
            <input
              name="password"
              type={passwordVisibility ? "password" : "text"}
              onChange={formik.handleChange}
              value={formik.values.password}
            />
            <label htmlFor="password">پسورد*</label>
            <span className="span">
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
              <p className="error">{formik.errors.password}</p>
            ) : null}
          </div>
          <button type="submit">ورود</button>
          <Link
            style={{
              marginRight:'1%',
              textDecoration: "none",
             
              width: "100px",
              textAlign: "center",
              height: "40px",
              paddingTop: "6px",
              marginBottom: "6px",
              borderRadius: "6px",
              color: "white",
            }}
            to={PATHS.HOME}
          >
          
            بازگشت به صفحه اصلی
          </Link>
        </form>
      </div>
    </div>
  );
}
export {LogIn};

// function LogIn() {
//   return (
//     <Formik
//       initialValues={{ email: "",password:"" }}
//       onSubmit={(values, actions) => {
//         setTimeout(() => {
//           alert(JSON.stringify(values, null, 2));
//           actions.setSubmitting(false);
//         }, 1000);
//       }}
//     >
//       {(props) => (
//         <div className="field">
//         <form  className="formHolder" onSubmit={props.handleSubmit}>
//           <div className="field">
//             <Input
//               name={"email"}
//               type={"email"}
//               onChange={props.handleChange}
//               onBlur={props.handleBlur}
//               value={props.values.email}
//             />
//             <Label forLabel={"email"} title={"پست الکترونیک"} />
//             {props.errors.email && (
//               <div className="error" id="feedback">{props.errors.email}</div>
//             )}
//             </div>
//             <div className="field">
//             <Input
//               name={"password"}
//               type={"password"}
//               onChange={props.handleChange}
//               onBlur={props.handleBlur}
//               value={props.values.password}
//             />
//             <Label forLabel={"password"} title={"کلمه عبور "} />
//             {props.errors.email && (
//               <div className="error" id="feedback">{props.errors.password}</div>
//             )}
//             </div>
//             <Button title={"ورود"} />

//         </form>
//         </div>
//       )}
//     </Formik>
//   );
// }

