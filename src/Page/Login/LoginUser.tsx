import { createBrowserHistory } from "@remix-run/router";
import { Button, Form, Input } from "antd";
import { FC, Fragment } from "react";

const onFinish = (values: any) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};

export const LoginUser: FC = () => {
  const history = createBrowserHistory();
  return (
    <Fragment>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{
          maxWidth: 600,
          height: 600,
          display: "block",
          margin: " 20px auto",
        }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button
            type="primary"
            htmlType="submit"
            onClick={() => {
              history.go(-1);
            }}
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Fragment>
  );
};
