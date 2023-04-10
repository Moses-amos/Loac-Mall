import React, { useState } from "react";
import "../Style/General.css"

import { withRouter } from "react-router-dom";
import { loginUser } from "../../../../_actions/user_actions";
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Form, Button } from 'antd';
import { useDispatch } from "react-redux";
import Navbar from "../../Main/00Components/Navbar/Navbar";
import LogoIcon from '../../../CroppedLogo/croppedlogo.png'


function LoginPage(props) {
const dispatch = useDispatch();
const rememberMeChecked = localStorage.getItem("rememberMe") ? true : false;

const [formErrorMessage, setFormErrorMessage] = useState('')
const [rememberMe, setRememberMe] = useState(rememberMeChecked)

const handleRememberMe = () => {
setRememberMe(!rememberMe)
};

const initialEmail = localStorage.getItem("rememberMe") ? localStorage.getItem("rememberMe") : '';

return (
<>
<Navbar />
  <Formik initialValues={{
        email: initialEmail,
        password: '',
      }} validationSchema={Yup.object().shape({ email: Yup.string() .email('Email is invalid') .required('Email is required'), password: Yup.string() .min(6, 'Password must be at least 6 characters' ) .required('Password is required'), })} onSubmit={(values, { setSubmitting })=> {
    setTimeout(() => {
    let dataToSubmit = {
    email: values.email,
    password: values.password
    };

    dispatch(loginUser(dataToSubmit))
    .then(response => {
    if (response.payload.loginSuccess) {
    window.localStorage.setItem('userId', response.payload.userId);
    if (rememberMe === true) {
    window.localStorage.setItem('rememberMe', values.id);
    } else {
    localStorage.removeItem('rememberMe');
    }
    props.history.push("/reroute");
    } else {
    setFormErrorMessage('Check out your Account or Password again')
    }
    })
    .catch(err => {
    setFormErrorMessage('Check out your Account or Password again')
    setTimeout(() => {
    setFormErrorMessage("")
    }, 3000);
    });
    setSubmitting(false);
    }, 500);
    }}
    >
    {props => {
    const {
    values,
    touched,
    errors,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    } = props;
    return (
    <div style={{ width: '100%', heigth: '100%',padding: '20px 40px 90px 40px', display: 'flex'}}>
      <div style={{borderRadius: '10px', width: '800px', height: '520px'}}>
      <div style={{ width: '100%', height: '520px', padding: '10px', borderRadius: '10px', background: 'orange', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <img 
     style={{ width: '320px', height: '320px', borderRadius: '10px'}}
      src={LogoIcon} 

      alt=""/>
              </div>
        </div>
      <div style={{ padding: '60px 50px 0px 50px', boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.35)', border: '2px solid #00BFFF', borderRadius: '10px', marginLeft: '20px'}}>
              <div style={{ display: 'flex', alignItem: 'center', 
              justifyContent: 'center', marginBottom: '15px'}}>
                <span style={{ fontSize: '25px', fontWeight: '700',fontFamily: '"Roboto"'}}>Login Account</span> </div>
      <form onSubmit={handleSubmit} style={{ width: '350px' }}>

        <Form.Item required >
          <div>
            <div>
                <span style={{ fontWeight: '700', fontSize: '15px', color: '#202124'}}>Email Address</span>
            </div>
            <div style={{ marginTop: '-5px'}}>
            <input id="email" placeholder="Enter your email address" type="text" value={values.email} onChange={handleChange}
          style={{ width: '350px', height: '35px', position: 'relative', fontSize: '14px', color: '#202124', background: '#fff',
          outline: '1px solid #74767c', fontWeight: '600', border: 'none', borderRadius: '2px', paddingLeft: '10px'}}
            onBlur={handleBlur} className={ errors.email && touched.email ? 'text-input error' : 'text-input' } />
          {errors.email && touched.email && (
          <div  className="input-feedback" style={{ fontSize: '700', color: 'red'}}>{errors.email}</div>
          )}
            </div>
          </div>
        </Form.Item>

        <Form.Item required >
          <div>
            <div>
                <span style={{ fontWeight: '700', fontSize: '15px', color: '#202124'}}>Password</span>
            </div>
            <div style={{ marginTop: '-5px'}}>
            <input id="password" placeholder="Enter your password" type="password" value={values.password} onChange={handleChange}
          style={{ width: '350px', height: '35px', position: 'relative', fontSize: '14px', color: '#202124', background: '#fff',
          outline: '1px solid #74767c', fontWeight: '600', border: 'none', borderRadius: '2px', paddingLeft: '10px'}}
            onBlur={handleBlur} 
            className={
              errors.password && touched.password ? 'text-input error' : 'text-input'
              } />
              {errors.password && touched.password && (
                <div className="input-feedback">{errors.password}</div>
              )}
            </div>
          </div>
        </Form.Item>

        {/* <Form.Item required>
          <Input id="password" prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.16)' }} />}
          placeholder="Enter your password"
          type="password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          
          />
          {errors.password && touched.password && (
          <div className="input-feedback">{errors.password}</div>
          )}
        </Form.Item> */}

        {formErrorMessage && (
        <label>
          <p
            style={{ color: '#ff0000bf', fontSize: '0.7rem', border: '1px solid', padding: '1rem', borderRadius: '10px' }}>
            {formErrorMessage}</p>
        </label>
        )}

        <Form.Item>
          <div style={{ display: 'block'}}>
            {/* <div>
                        <Checkbox id="rememberMe" onChange={handleRememberMe} checked={rememberMe}>Remember me</Checkbox>

            </div> */}
          {/* <div>
            <a className="login-form-forgot" href="/reset_user" style={{ float: 'right' }}>
            forgot password
          </a>
          </div> */}
          <div style={{ marginTop: '20px'}}>
            <Button type="primary" htmlType="submit" className="login-form-button" style={{ minWidth: '100%' , borderRadius: '5px',
             height: '45px', fontSize: '15px', fontWeight: '700'}}
              disabled={isSubmitting} onSubmit={handleSubmit}>
              Login
            </Button>
          </div>
                    {/* <div style={{ marginTop: '-10px'}}>
      <button style={{ cursor: 'pointer'}} disabled={isSubmitting} onSubmit={handleSubmit} type="primary" className='Submit-upload-button'>Login</button>
            </div> */}
            <div style={{ marginTop: '20px', display: 'flex'}}>
              <div >
                <span style={{ fontWeight: '700', fontSize: '15px', textDecoration: 'none', color: '#656481'}}>Don't have a Loac Account ?:</span>
              </div>
              <div style={{ marginLeft: '10px'}}>
                  <a style={{ fontWeight: '700', fontSize: '15px', textDecoration: 'none', color: '#1380e7'}} href="/register">Register</a>
              </div>
        </div>
          </div>
        </Form.Item>
      </form>
      </div>
    </div>
    );
    }}
  </Formik>
</>
);
}

export default withRouter(LoginPage);