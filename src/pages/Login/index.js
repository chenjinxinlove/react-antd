/**
 * Created by chen on 2017/6/5.
 */
import './login.less';
import React,  { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
const FormItem = Form.Item;

class LoginForm extends Component {
  submitForm = () => {

  }


  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="login_page">

        <section className="form_contianer fillcontain animated bounceInDown" >
          <div className="manage_tip">
            <p>后台管理系统</p>
          </div>
          <Form onsubmit={this.submitForm}>
            <FormItem>
              {getFieldDecorator('userName', {
                rules: [{ required: true, message: '请输入用户名!' }],
              })(
                <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="用户名" />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: '请输入密码!' }],
              })(
                <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="密码" />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('remember', {
                valuePropName: 'checked',
                initialValue: true,
              })(
                <Checkbox>记住我</Checkbox>
              )}
              <a className="login-form-forgot" href="" style={{float: 'right'}}>忘记密码</a>
              <Button type="primary" htmlType="submit" className="login-form-button" style={{width: '100%'}}>
                登录
              </Button>
              或 <a href="">没有注册过的，自动注册！</a>
            </FormItem>
          </Form>
        </section>
      </div>
    )
  }
}

const Login = Form.create()(LoginForm);

export default Login;
