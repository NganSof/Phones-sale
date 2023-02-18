import { Button, Form, Input } from "antd";
import { FC, Fragment } from "react";
import { useNavigate } from "react-router-dom";

const onFinish = (e: any) => {
  localStorage.setItem("login", JSON.stringify(e));
};

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};

export const LoginUser: FC = () => {
  let navigate = useNavigate();
  return (
    <Fragment>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{
          padding: 20,
          margin: 20,
        }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          style={{ paddingRight: "25%" }}
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          style={{ paddingRight: "25%" }}
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          wrapperCol={{ offset: 8, span: 16 }}
          style={{ paddingRight: "25%" }}
        >
          <Button
            type="primary"
            htmlType="submit"
            onClick={() => {
              navigate(-1);
            }}
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Fragment>
  );
};
