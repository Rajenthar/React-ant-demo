// import React from "react";
// import { Form, Icon, Input, Button, Checkbox, message } from 'antd';
// import '../../index.css'
// import Signin from '../signin/signin'

// class NormalLoginForm extends React.Component {
//   handleSubmit = e => {
//     e.preventDefault();
//     this.props.form.validateFields((err, values) => {
//       if (!err) {
//         message.loading("Now you are logging in", 2.5)
//         .then(()=>{
//                 message.success("You are now logged in");
//         });
//         console.log('Received values of form: ', values);
//       }
//     });
//   };

//   render() {
//     const { getFieldDecorator } = this.props.form;
//     return (
//     <article class="mw5 center bg-white shadow-5 br3 pa3 pa4-ns mv3 ba b--black-10">
//       <Form onSubmit={this.handleSubmit} className="login-form">
//         <Form.Item>
//           {getFieldDecorator('username', {
//             rules: [{ required: true, message: 'Please input your username!' }],
//           })(
//             <Input
//               prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
//               placeholder="Username"
//             />,
//           )}
//         </Form.Item>
//         <Form.Item>
//           {getFieldDecorator('password', {
//             rules: [{ required: true, message: 'Please input your Password!' }],
//           })(
//             <Input
//               prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
//               type="password"
//               placeholder="Password"
//             />,
//           )}
//         </Form.Item>
//         <Form.Item>
//           {getFieldDecorator('remember', {
//             valuePropName: 'checked',
//             initialValue: true,
//           })(<Checkbox>Remember me</Checkbox>)}
//           <a className="login-form-forgot" href="">
//             Forgot password
//           </a>
//           <Button type="primary" htmlType="submit" className="login-form-button">
//             Log in
//           </Button>
//           Or <a href="Signin">register now!</a>
//         </Form.Item>
//       </Form>
//     </article>
//     );
//   }
// }

// const Login = Form.create({ name: 'normal_login' })(NormalLoginForm);

// // ReactDOM.render(<WrappedNormalLoginForm />, mountNode);
// export default Login;



import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ViewBooking from '../viewBooking/viewBooking';
import HomePage from '../homepage/homepage'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {username: '', password: '', isAuthenticated: false, open: false};
    }

    handleChange = (event) => {    
      this.setState({[event.target.name] : event.target.value});    
  }  

  login = () => {    
    const user = {userName: this.state.username, password: this.state.password};    
    fetch("http://localhost:1111/" + 'login', {    
        method: 'POST',    
        body: JSON.stringify(user)    
    })    
        .then(res => {    
            const jwtToken = res.headers.get('Authorization');    
            if (jwtToken !== null) {    
                sessionStorage.setItem("jwt", jwtToken);    
                this.setState({isAuthenticated: true});    
            }    
            else {    
                this.setState({open: true});    
            }    
        })    
        .catch(err => console.error(err))    
}; 


    render() {    
      if (this.state.isAuthenticated === true) {    
          return (<HomePage />)    
      }    
      else {    
          return (    
              <div id="login">    
                  <h3 className="text-center text-white pt-5">Login form</h3>    
                  <div className="container">    
                      <div id="login-row" className="row justify-content-center align-items-center">    
                      <div id="login-column" className="col-md-6">    
                       <div id="login-box" className="col-md-12">    
                      <div className="form-group">    
                          <input type="text" name="username" onChange={this.handleChange}  className="form-control" placeholder="username" />    
                      </div>    
                      <div className="form-group">    
                          <input type="password" name="password" onChange={this.handleChange}  className="form-control" placeholder="password" />    
                      </div>    
                           <input type="submit" name="submit" onClick={this.login}  className="btn btn-info btn-md" value="Login"/>    
                       </div>    
                      </div>    
                      </div>    
              </div>    
              </div>    
      
   );} }  
}

export default Login;  