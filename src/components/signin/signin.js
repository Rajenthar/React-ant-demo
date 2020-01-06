import React from "react";
import { Form, Icon, Input, Button, Checkbox, message } from 'antd';
import '../../index.css'
import Signin from '../signin/signin'

class NormalSigninForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        message.loading("Now you are logging in", 2.5)
        .then(()=>{
                message.success("You are now logged in");
        });
        console.log('Received values of form: ', values);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
    <article class="mw5 center bg-white shadow-5 br3 pa3 pa4-ns mv3 ba b--black-10">
      <Form onSubmit={this.handleSubmit} className="login-form">
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('confirmPassword', {
            rules: [{ required: true, message: 'Please confirm your Password!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="confirmPassword"
              placeholder="Confirm Password"
            />,
          )}
        </Form.Item>
        {/* <Form.Item>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(<Checkbox>Remember me</Checkbox>)}
          <a className="login-form-forgot" href="">
            Forgot password
          </a>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
          Or <a href="Signin">register now!</a>
        </Form.Item> */}
      </Form>
    </article>
    );
  }
}

const Signin1 = Form.create({ name: 'normal_signin' })(NormalSigninForm);

// ReactDOM.render(<WrappedNormalLoginForm />, mountNode);
export default Signin1;