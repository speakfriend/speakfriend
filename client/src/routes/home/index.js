import { h, Component } from "preact";
import style from "./style";
import Button from "../../components/button/index.js";
import { POST } from "../../network";

const defaultSubmissionForm = {
 email:  "",
 name:   "",
 topics: "",
 bio:    ""
}

export default class Home extends Component {
  state = {
    faqOpen: false,
    submissionForm: defaultSubmissionForm,
    errors: {}
  };

  toggleFaq = () => {
    this.setState({ faqOpen: !this.state.faqOpen });
  };

  updateForm = e => {
    this.setState({
      submissionForm: {
        ...this.state.submissionForm,
        [e.target.id]: e.target.value
      }
    });
  };

  submitForm = async e => {
    e.preventDefault();

    const { errors, isValid } = this.validateForm(this.state.submissionForm)
    if (!isValid) {
      this.setState({ errors })
      return;
    }

    const rdata = await POST("speaker-submission", this.state.submissionForm);
    this.setState({submissionForm: defaultSubmissionForm, errors: {}})
  };

  validateForm = values => {
    const errors = Object.keys(values).reduce((acc, curr) => {
      if (values[curr] === '') {
        acc[curr] = 'This field is required'
      }
      return acc
    }, {})

    return { errors: errors, isValid: Object.keys(errors).length === 0 }
  }

  // -- Sub views --

  // displays the FAQ questions when faqOpen is true.
  faqView = () => (
    <section class="bg-near-white bb bt b--light-gray mv4 pa4">
      <div class="w-70 center">
        <p class="i">
          Hi, welcome to the Toronto tech community's speaker portal! We want to make it super easy for speakers and organizers to find each other, so we put together this handy form.
        </p>

        <p>
          <div>Q: Who sees this information? </div>
          <div>
            A: Only organizers from Toronto technical organizations see the information you add here. Organizers for Toronto JS, Clojure TO, Functional TO, Polyhack, and Papers We Love TO currently have access.
          </div>
        </p>

        <div>Q: I'm an organizer and we'd love to use this?!</div>
        <div>
          A: Great, reach out to us and let's talk! Email dann@torontojs.com and we'll set up a conversation to vet you and get you onboard.
        </div>
      </div>
    </section>
  );

  submissionFormView = () => {
    const { errors, submissionForm } = this.state;
    const { email, name, topics, bio } = submissionForm;
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
          {errors.email && <span class={style.inputError}>{errors.email}</span>}
        </div>

        <div class="flex flex-column mb4">
          <label for="name">What is your name? *</label>
          <input
            class="pa2"
            id="name"
            type="text"
            value={name}
            onChange={this.updateForm}
            placeholder="Name"
          />
          {errors.name && <span class={style.inputError}>{errors.name}</span>}
        </div>

        <div class="flex flex-column mb4">
          <label for="topics">
            One or more topics you'd like to talk about *
          </label>
          <input
            class="pa2"
            id="topics"
            type="text"
            placeholder="Topics"
            onChange={this.updateForm}
            value={topics}
          />
          {errors.topics && <span class={style.inputError}>{errors.topics}</span>}
        </div>

        <div class="flex flex-column mb4">
          <label for="bio">Your Bio *</label>
          <textarea
            class="pa2"
            id="bio"
            onChange={this.updateForm}
            value={bio}
            placeholder="Bio"
          />
          {errors.bio && <span class={style.inputError}>{errors.bio}</span>}
        </div>

        <Button class="mv2">Submit</Button>
      </form>
    );
  };

  // --

  render() {
    return (
      <div class={style.home}>
        {/* SECTION: Big hero Copy Text + buttons */}
        <header class="bg-blue washed-yellow">
          <div class="hero w-80 pa4 pv6 ml3">
            <div class="f-subheadline lh-title b">
              Welcome to
              <span class="i"> Speak Friend:</span>
            </div>
            <div class="f-subheadline lh-title b i mt4 bg-navy dib washed-yellow pa2">
              Toronto
            </div>
            <h3 class="f2 lh-copy">
              A portal for connecting speakers, mentors, and friends.
            </h3>
            <Button class="mr4">I'm looking to give a talk! 🎤 </Button>
            <Button>I can host talks! 🏫</Button>
          </div>
        </header>

        {/* SPACER */}
        <div class="w-100 bg-grey bb b--black-05 bw3" />

        {/* SECTION: Form Submission */}
        <section class="pv4 center">
          <h1 class="f1 lh-title tc">I'd like to give a talk!</h1>
          <p class="w-50 center tc">
            Awesome. Feel free to read our
            {" "}
            <a onClick={() => this.toggleFaq()}>FAQ</a>
            {" "}
            before submitting your info.
          </p>

          {this.state.faqOpen && this.faqView()}
          {this.submissionFormView()}

        </section>

      </div>
    );
  }
}
