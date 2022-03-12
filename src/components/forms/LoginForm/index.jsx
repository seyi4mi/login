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
    </div>
  );
}

export default LoginForm;
