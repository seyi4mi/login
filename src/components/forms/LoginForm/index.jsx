import React from "react";
import "./index.css";
import { Form, Input, Button } from "antd";

function LoginForm() {
  const onFinish = (e) => {
    console.log(e);
  };
  const onFinishFailed = (error) => {
    console.log(error);
  };

  return (
    <div className="form">
      <div className="formContainer">
        <img
          width={130}
          src="https://imgs.search.brave.com/JeoPWN1ioE26YmEwMsGByYklCD4VPPGdI9pOVPqICNg/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/cG5na2V5LmNvbS9w/bmcvZnVsbC8yMDgt/MjA4OTEzNF9yY2Nn/LWxvZ28tcmVkZWVt/ZWQtY2hyaXN0aWFu/LWNodXJjaC1sb2dv/LnBuZw"
          alt=""
        />
        <h2 className="loginHeader">User Login</h2>
        <Form
          autoComplete="off"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          labelCol={{ span: 7 }}
          wrapperCol={{ span: 30 }}
        >
          <Form.Item
            name="Username"
            label="Username"
            style={{ color: "white" }}
            rules={[
              { required: true, message: "Please enter your name" },
              { whitespace: true },
              { min: 3 },
            ]}
            hasFeedback
          >
            <Input placeholder="Type your name" />
          </Form.Item>

          <Form.Item
            name="email"
            label="Email"
            rules={[
              { required: true, message: "Please enter your email" },
              { type: "email", message: "Please enter a Valid Email" },
            ]}
            hasFeedback
          >
            <Input placeholder="Type your email" />
          </Form.Item>

          <Form.Item
            name="Password"
            label="Password"
            rules={[{ required: true }, { min: 6 }]}
            hasFeedback
          >
            <Input.Password placeholder="Type your password" />
          </Form.Item>

          <Form.Item>
            <Button block type="primary" htmlType="submit">
              LOGIN
            </Button>
          </Form.Item>
        </Form>
      </div>
      <p className="rccgMotto">
        “Jesus Christ the same yesterday, and today, and forever” - Hebrews 13:8
      </p>
    </div>
  );
}

export default LoginForm;
