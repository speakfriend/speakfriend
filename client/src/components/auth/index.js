// component that displays login / register form.
import { h, Component } from "preact";
import Button from "../button/index";
import LoginForm from "./login_form";
import RegisterForm from "./register_form";
import style from "./style.css";

const defaultRegisterForm = {
  email: "",
  username: "",
  password: ""
};

const defaultLoginForm = {
  email: "",
  password: ""
};

export default class AuthBox extends Component {
  state = {
    loginView: true,
    registerForm: defaultRegisterForm,
    loginForm: defaultLoginForm
  };

  updateRegisterForm = e => {
    this.setState({
      registerForm: {
        ...this.state.registerForm,
        [e.target.id]: e.target.value
      }
    });
  };

  updateLoginForm = e => {
    this.setState({
      loginForm: {
        ...this.state.loginForm,
        [e.target.id]: e.target.value
      }
    });
  };

  submitRegistration = async e => {
    // TODO form errors not implemented yet
    e.preventDefault();
    const rdata = await POST("auth/register", this.state.registerForm);
    this.setState({ registerForm: defaultRegisterForm });
  };

  submitLogin = async e => {
    // TODO form errors not implemented yet
    e.preventDefault();
    const rdata = await POST("auth/login", this.state.loginForm);
    this.setState({ loginForm: defaultLoginForm });
  };

  swapForm = () => {
    this.setState({
      loginView: !this.state.loginView
    });
  };

  render() {
    const currentView = () =>
      (this.state.loginView
        ? <LoginForm
            email={this.state.loginForm.email}
            password={this.state.loginForm.password}
            updateLoginForm={this.updateLoginForm}
            submitLogin={this.submitLogin}
            swapForm={this.swapForm}
          />
        : <RegisterForm
            email={this.state.registerForm.email}
            password={this.state.registerForm.password}
            updateRegisterForm={this.updateRegisterForm}
            submitRegister={this.submitRegister}
            swapForm={this.swapForm}
          />);

    return <div class={style.authbox}>{currentView()}</div>;
  }
}
