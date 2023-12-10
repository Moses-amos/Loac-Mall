import React from "react";
import moment from "moment";
import "../Style/General.css";
import './registerpage.css'
import '../../Fulfillment/MainOperations/UploadProducts/productsupload.css'
import { Formik } from 'formik';
import * as Yup from 'yup';
import { registerUser } from "../../../../_actions/user_actions";
import { useDispatch } from "react-redux";

import {
Form,
Button,
} from 'antd';
import Navbar from "../../Main/00Components/Navbar/Navbar";
import MobileNav from "../../Main/00Components/Navbar/MobileNav";

const formItemLayout = {
labelCol: {
xs: { span: 24 },
sm: { span: 8 },
},
wrapperCol: {
xs: { span: 24 },
sm: { span: 16 },
},
};
const tailFormItemLayout = {
wrapperCol: {
xs: {
span: 24,
offset: 0,
},
sm: {
span: 16,
offset: 8,
},
},
};

function RegisterPage(props) {
const dispatch = useDispatch();
return (
  <>
  <MobileNav />
  <Navbar />
  <Formik initialValues={{
        email: '',
        password: '',
        confirmPassword: ''
      }} validationSchema={Yup.object().shape({ email: Yup.string() .email('Email is invalid') .required('Email is required'), password: Yup.string() .min(6, 'Password must be at least 6 characters' ) .required('Password is required'), confirmPassword: Yup.string() .oneOf([Yup.ref('password'), null], 'Passwords must match' )
    .required('Confirm Password is required') })} onSubmit={(values, { setSubmitting })=> {
    setTimeout(() => {

    let dataToSubmit = {
    email: values.email,
    password: values.password,
    image: `http://gravatar.com/avatar/${moment().unix()}?d=identicon`
    };

    dispatch(registerUser(dataToSubmit)).then(response => {
    if (response.payload.success) {
    props.history.push("/confirm");
    } else {
    alert(response.payload.err.errmsg)
    }
    })

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
    <div className="Registerpage_container">
      <div className="Registerpage_logo_container">
      <div style={{ width: '100%', height: '520px', borderRadius: '15px',background: '#333', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <img 
              style={{ width: '100%', height: '100%', borderRadius: '15px'}}
              src='https://pbs.twimg.com/media/F7r8wTuW4AA7TBu?format=jpg&name=large' 
              alt=""/>
      </div>
        </div>
      <div className="Registerpage_Account_box">     
        <Form style={{ minWidth: '100%' }} {...formItemLayout} onSubmit={handleSubmit}>
        <div style={{ display: 'flex', alignItem: 'center', justifyContent: 'center'}}><span style={{ fontSize: '28px', fontWeight: '900', color: '#fff'}}>Sign Up</span> </div>

          <Form.Item required >
          <div>
            <div>
                <span style={{ fontWeight: '600', fontSize: '17xp', color: '#fff'}}>Email Address</span>
            </div>
            <div style={{ marginTop: '-5px'}}>
            <input id="email" placeholder="Enter your email address" type="text" value={values.email} onChange={handleChange}
          style={{ width: '350px', height: '35px', position: 'relative', fontSize: '14px', color: '#333', background: '#fff',
          outline: '1px solid #74767c', fontWeight: '600', border: 'none', borderRadius: '2px', paddingLeft: '10px'}}
            onBlur={handleBlur} className={ errors.email && touched.email ? 'text-input error' : 'text-input' } />
          {errors.email && touched.email && (
          <div  className="input-feedback" style={{ fontSize: '500', color: 'red'}}>{errors.email}</div>
          )}
            </div>
          </div>
        </Form.Item>

        <Form.Item required >
          <div>
            <div>
                <span style={{ fontWeight: '600', fontSize: '17xp', color: '#fff'}}>Password</span>
            </div>
            <div style={{ marginTop: '-5px'}}>
            <input id="password" placeholder="Enter your password" type="password" value={values.password} onChange={handleChange}
          style={{ width: '350px', height: '35px', position: 'relative', fontSize: '14px', color: '#333', background: '#fff',
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

        <Form.Item required >
          <div>
            <div>
                <span style={{ fontWeight: '600', fontSize: '17xp', color: '#fff'}}>Confirm Password</span>
            </div>
            <div style={{ marginTop: '-5px'}}>
            <input id="confirmPassword" placeholder="Enter your confirmPassword" type="password" value={values.confirmPassword} onChange={handleChange}
          style={{ width: '350px', height: '35px', position: 'relative', fontSize: '14px', color: '#333', background: '#fff',
          outline: '1px solid #74767c', fontWeight: '600', border: 'none', borderRadius: '2px', paddingLeft: '10px'}}
            onBlur={handleBlur} 
            className={
              errors.confirmPassword && touched.confirmPassword ? 'text-input error' : 'text-input'
              } />
              {errors.confirmPassword && touched.confirmPassword && (
                <div className="input-feedback">{errors.confirmPassword}</div>
              )}
            </div>
          </div>
        </Form.Item>

          <Form.Item >
          <div style={{ marginTop: '15px'}}>
      <Button onClick={handleSubmit} type="primary" disabled={isSubmitting} className='Register-button_box'>Register</Button>
  </div>
        </Form.Item>

        <div style={{ marginTop: '10px', display: 'flex'}}>
              <div >
                <span style={{ fontWeight: '600', fontSize: '15px', textDecoration: 'underline', color: '#fff'}}>Already have an Account ?:</span>
              </div>
              <div style={{marginLeft: '10px'}}>
                  <a style={{ fontWeight: '600', fontSize: '15px', textDecoration: 'none', color: '#1380e7'}} href="/login">Sign In</a>
              </div>
        </div>
      </Form>

      </div>

    </div>
    );
    }}
  </Formik>
  </>
);
};

export default RegisterPage;