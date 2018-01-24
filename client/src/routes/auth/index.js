import { h, Component } from "preact";
import style from "./style";
import Button from "../../components/button/index.js";
import { POST } from "../../network";


export default class Auth extends Component {
  state = {
    loginForm: {
      email: "",
      username: "",
      password: ""
    }
  };


  updateForm = e => {
    this.setState({
      loginForm: {
        ...this.state.loginForm,
        [e.target.id]: e.target.value
      }
    });
  };

  submitForm = async e => {
    e.preventDefault();

    const { errors, isValid } = this.validateForm(this.state.loginForm)
    if (!isValid) {
      this.setState({ errors })
      return;
    }

    // TODO SET THIS
    const rdata = await POST("speaker-submission", this.state.submissionForm);
    this.setState({submissionForm: defaultSubmissionForm, errors: {}})
  };


  // TODO: reimplement brennen's hard work but for login / register
  validateForm = values => {
    const errors = Object.keys(values).reduce((acc, curr) => {
      if (values[curr] === '') {
        acc[curr] = 'This field is required'
      }
      return acc
    }, {})

    return { errors: errors, isValid: Object.keys(errors).length === 0 }
  }


  loginForm = () => {
    const {email, password, username} = this.state.loginForm;
    return (
      <form class="flex flex-column mv5 w-50 center" onSubmit={this.submitForm}>
        <div class="flex flex-column mb4">
          <label for="Email">Email address *</label>
          <input
            class="pa2"
            id="email"
            type="text"
            value={email}
            onChange={this.updateForm}
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
            onChange={this.updateForm}
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
            onChange={this.updateForm}
            placeholder="password"
          />
        </div>

        <Button class="mv2">Submit</Button>
      </form>
    );
  };


  render() {
    return (
      <div>
        {this.loginForm()}
      </div>
    );
  }
}
