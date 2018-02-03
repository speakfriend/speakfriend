import { h, Component } from "preact";
import Button from "../button/index";

const LoginForm = (props) => {
  const { email, password, updateLoginForm, submitLogin, swapForm } = props
  return (
    <form
      class="flex flex-column mv5 w-70 center"
      onSubmit={submitLogin}
      >
      <div class="flex flex-column mb4">
        <label for="Username">Email address *</label>
        <input
          class="pa2"
          id="email"
          type="text"
          value={email}
          onChange={updateLoginForm}
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
          onChange={updateLoginForm}
          placeholder="password"
          />
      </div>

      <Button class="mb4">Login</Button>

      <div> Don't have an account? <a href="#" onClick={swapForm}> Register ↪</a></div>
    </form>
  );
};

export default LoginForm
