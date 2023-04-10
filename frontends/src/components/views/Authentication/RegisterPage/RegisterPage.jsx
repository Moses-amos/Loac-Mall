import React from "react";
import moment from "moment";
import { Formik } from 'formik';
import * as Yup from 'yup';
import { registerUser } from "../../../../_actions/user_actions";
import { useDispatch } from "react-redux";
import LogoIcon from '../../../CroppedLogo/croppedlogo.png'

import {
Form,
Button,
} from 'antd';
import Navbar from "../../Main/00Components/Navbar/Navbar";

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
    <div style={{ width: '100%',height: '100%', padding: '20px 40px 90px 40px', display: 'flex'}}>
      <div style={{borderRadius: '10px', width: '750px', height: '520px'}}>
      <div style={{ width: '100%', height: '520px', padding: '10px', borderRadius: '10px', background: 'orange', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <img 
     style={{ width: '320px', height: '320px', borderRadius: '10px'}}
      src={LogoIcon} 

      alt=""/>
      </div>
        </div>
      <div style={{  marginLeft: '20px',padding: '15px 50px 0px 50px', boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.35)', border: '2px solid #00BFFF', borderRadius: '10px',
       display: 'flex', alignItem: 'center', justifyContent: 'center'}}>     
        <Form style={{ minWidth: '100%' }} {...formItemLayout} onSubmit={handleSubmit}>
        <div style={{ display: 'flex', alignItem: 'center', justifyContent: 'center'}}><span style={{ fontFamily: '"Roboto"', fontSize: '25px', fontWeight: '700'}}>Sign Up</span> </div>
{/* 
          <div style={{ marginBottom: '-20px'}}>
          <Form.Item  required >
          <span style={{ paddingRight: '30px', fontWeight: 'bolder', fontSize: '15px'}}>Name:</span>
          <input id="name" style={{ width: '250px', height: '30px', position: 'relative', fontSize: '13px', color: '#656481',
           outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', paddingLeft: '5px'}} 
           placeholder="Enter your name" type="text" value={values.name} onChange={handleChange}
            onBlur={handleBlur} className={ errors.name && touched.name ? 'text-input error' : 'text-input' } />
        </Form.Item>
          </div> */}

          {/* <div style={{ marginBottom: '-20px'}}>
        <Form.Item required>
        <span style={{ paddingRight: '30px', fontWeight: 'bolder', fontSize: '15px'}}>Last Name:</span>
          <input id="lastName" placeholder="Enter your Last Name" type="text" value={values.lastName}
          style={{ width: '250px', height: '30px', position: 'relative', fontSize: '13px', color: '#656481',
          outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', paddingLeft: '5px'}} 
            onChange={handleChange} onBlur={handleBlur} className={ errors.lastName && touched.lastName
            ? 'text-input error' : 'text-input' } />
        </Form.Item>
          </div> */}

        {/*  <div style={{ marginBottom: '-20px'}}>
          <Form.Item required >
          <span style={{ paddingRight: '30px', fontWeight: 'bolder', fontSize: '15px'}}>Email:</span>
          <input id="email" placeholder="Enter your Email" type="email" value={values.email} onChange={handleChange}
          style={{ width: '250px', height: '30px', position: 'relative', fontSize: '13px', color: '#656481',
          outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', paddingLeft: '5px'}}
            onBlur={handleBlur} className={ errors.email && touched.email ? 'text-input error' : 'text-input' } />
           {errors.email && touched.email && (
          <div  className="input-feedback" style={{ paddingLeft: '30px', fontSize: 'bolder', color: 'red'}}>{errors.email}</div>
          )} 
        </Form.Item>
          </div>*/}
          
          <Form.Item required >
          <div>
            <div>
                <span style={{ fontWeight: '700', fontSize: '15px', color: '#202124'}}>Email Address</span>
            </div>
            <div style={{ marginTop: '-5px'}}>
            <input id="email" placeholder="Enter your email address" type="text" value={values.email} onChange={handleChange}
          style={{ width: '420px', height: '35px', position: 'relative', fontSize: '14px', color: '#202124', background: '#fff',
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
          style={{ width: '420px', height: '35px', position: 'relative', fontSize: '14px', color: '#202124', background: '#fff',
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
                <span style={{ fontWeight: '700', fontSize: '15px', color: '#202124'}}>Confirm Password</span>
            </div>
            <div style={{ marginTop: '-5px'}}>
            <input id="confirmPassword" placeholder="Enter your confirmPassword" type="password" value={values.confirmPassword} onChange={handleChange}
          style={{ width: '420px', height: '35px', position: 'relative', fontSize: '14px', color: '#202124', background: '#fff',
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

         {/*  <div style={{ marginBottom: '-20px'}}>
          <Form.Item required >
            <span style={{ paddingRight: '30px', fontWeight: 'bolder', fontSize: '15px'}}>Password</span>
          <input id="password" placeholder="Enter your password" type="password" value={values.password}
          style={{ width: '250px', height: '30px', position: 'relative', fontSize: '13px', color: '#656481',
          outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', paddingLeft: '5px'}}
            onChange={handleChange} onBlur={handleBlur} className={ errors.password && touched.password
            ? 'text-input error' : 'text-input' } />
          {errors.password && touched.password && (
          <div className="input-feedback">{errors.password}</div>
          )} 
        </Form.Item>
          </div>*/}
         {/*  <Form.Item required hasFeedback>
          <span style={{ paddingRight: '30px', fontWeight: 'bolder', fontSize: '15px'}}>Confirm Password:</span>
          <input id="confirmPassword" placeholder="Enter your confirmPassword" type="password"
            style={{ width: '250px', height: '30px', position: 'relative', fontSize: '13px', color: '#656481',
            outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', paddingLeft: '5px'}}
            value={values.confirmPassword} onChange={handleChange} onBlur={handleBlur} className={
            errors.confirmPassword && touched.confirmPassword ? 'text-input error' : 'text-input' } />
          {errors.confirmPassword && touched.confirmPassword && (
          <div className="input-feedback">{errors.confirmPassword}</div>
          )} 
        </Form.Item>*/}

          <Form.Item {...tailFormItemLayout}>
          <div style={{ marginLeft: '-132px', marginTop: '15px'}}>
      <Button onClick={handleSubmit} type="primary" disabled={isSubmitting} className='Submit-upload-button'>Register</Button>
  </div>
        </Form.Item>

        <div style={{ marginTop: '10px', display: 'flex'}}>
              <div >
                <span style={{ fontWeight: '700', fontSize: '15px', textDecoration: 'none', color: '#656481'}}>Already have :</span>
              </div>
              <div style={{marginLeft: '10px'}}>
                  <a style={{ fontWeight: '700', fontSize: '15px', textDecoration: 'none', color: '#1380e7'}} href="/login">Account ?</a>
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

export default RegisterPage