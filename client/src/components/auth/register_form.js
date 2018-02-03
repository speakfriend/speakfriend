import { h, Component } from "preact";
import Button from "../button/index";

const RegisterForm = (props) => {
  const { email, password, username, swapForm, submitRegistration, updateRegisterForm } = props;
  return (
    <form
      class="flex flex-column mv5 w-70 center"
      onSubmit={submitRegistration}
      >
      <div class="flex flex-column mb4">
        <label for="Email">Email address *</label>
        <input
          class="pa2"
          id="email"
          type="text"
          value={email}
          onChange={updateRegisterForm}
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
          onChange={updateRegisterForm}
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
          onChange={updateRegisterForm}
          placeholder="password"
          />
      </div>

      <Button class="mb4">Register</Button>
      <div> Already have an account? <a href="#" onClick={swapForm}> Login ↪ </a></div>
    </form>
  );
};

export default RegisterForm
