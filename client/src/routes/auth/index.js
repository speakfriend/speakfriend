import { h, Component } from "preact";
import style from "./style";
import Button from "../../components/button/index.js";
import { POST } from "../../network";

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

  // move to component along with loginForm
  registerForm = () => {
    const {email, password, username} = this.state.registerForm;
    return (
      <form class="flex flex-column mv5 w-50 center" onSubmit={this.submitRegistration}>
        <div class="flex flex-column mb4">
          <label for="Email">Email address *</label>
          <input
            class="pa2"
            id="email"
            type="text"
            value={email}
            onChange={this.updateRegisterForm}
            placeholder="Email"
          />
        </div>

        <div class="flex flex-column mb4">
          <label for="username">username*</label>
          <input
            class="pa2"
            id="username"
            type="text"
            value={username}
            onChange={this.updateRegisterForm}
            placeholder="username"
          />
        </div>


        <div class="flex flex-column mb4">
          <label for="password">Password*</label>
          <input
            class="pa2"
            id="password"
            type="password"
            value={password}
            onChange={this.updateRegisterForm}
            placeholder="password"
          />
        </div>

        <Button class="mv2">Submit</Button>
      </form>
    );
  };


  loginForm = () => {
    const {email, password} = this.state.loginForm;
    return (
      <form class="flex flex-column mv5 w-50 center" onSubmit={this.submitLogin}>
        <div class="flex flex-column mb4">
          <label for="Username">Email address *</label>
          <input
            class="pa2"
            id="email"
            type="text"
            value={email}
            onChange={this.updateLoginForm}
            placeholder="Email"
          />
        </div>

        <div class="flex flex-column mb4">
          <label for="password">Password*</label>
          <input
            class="pa2"
            id="password"
            type="password"
            value={password}
            onChange={this.updateLoginForm}
            placeholder="password"
          />
        </div>

        <Button class="mv2">Login</Button>
      </form>
    );
  };

  render() {
    return (
      <div class="pt4">
        <h1> REGISTER FORM </h1>
        {this.registerForm()}


        <hr class="pt4"></hr>
        <h1> LOGIN FORM </h1>
        {this.loginForm()}
      </div>
    );
  }
}


