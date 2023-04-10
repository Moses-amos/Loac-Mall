import React from 'react'
import { Form, Input, Button } from 'antd';
import Icon from '@ant-design/icons';

function ResetPassword() {
return (
<>
  <div className="app">
    <form style={{ width: '350px' }}>

      <Form.Item required>
        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
        placeholder="Enter your email"
        type="email"
        />
      </Form.Item>

      <Form.Item>
        <div>
          <Button type="primary" htmlType="submit" className="login-form-button" style={{ minWidth: '100%' }}>
            Send
          </Button>
        </div>
      </Form.Item>
    </form>
  </div>
</>
);
}

export default ResetPassword