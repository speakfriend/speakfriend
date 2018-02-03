import { h, Component } from "preact";
import Button from "../button/index";

const RegisterForm = (props) => {
  const { email, password, username, swapForm, submitRegistration, updateLoginForm } = props;
  return (
    <form
      class="flex flex-column mv5 w-70 center"
      onSubmit={this.submitRegistration}
      >
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

      <div> Don't have an account? <a href="#" onClick={swapForm}> Register</a></div>

    </form>
  );
};

export default RegisterForm
