import { h, Component } from "preact";
import style from "./style";
import Button from "../../components/button/index.js";
import { POST } from "../../network";
import AuthBox from "../../components/auth/index.js";

// Form defaults (move to component eventually)

const defaultRegisterForm = {
  email: "",
  username: "",
  password: ""
}


const defaultLoginForm = {
  email: "",
  password: ""
}


export default class Auth extends Component {
  state = {
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

  // nice bit of duplication to remove here on next refactor
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
    this.setState({registerForm: defaultRegisterForm})
  };


  submitLogin = async e => {
    // TODO form errors not implemented yet
    e.preventDefault();
    const rdata = await POST("auth/login", this.state.loginForm);
    this.setState({loginForm: defaultLoginForm})
  };


  render() {
    return (
      <div class="flex flex-auto">
        <AuthBox />
      </div>
    );
  }
}


