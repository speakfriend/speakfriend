import { h, Component } from 'preact';
import s from './style';
import config from '../../config';

export default class Home extends Component {
  state = {
    speaker_name: '',
    speaker_email: '',
    speaker_description: '', // TODO: better name - speaker_topic? topic_description?
  };

  updateFormField = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  collectSubmissionFormPayload = () => {
    const { speaker_name, speaker_email, speaker_description } = this.state;
    return JSON.stringify({
      name: speaker_name,
      email: speaker_email,
      description: speaker_description,
    });
  };

  submitPitch = e => {
    fetch(config.API + "/submissions", {
      method: 'POST',
      body: this.collectSubmissionFormPayload(),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(function(res) {
        return res.json();
      })
      .then(function(data) {
        console.log(JSON.stringify(data));
      });
  };

  render() {
    console.log(this.collectSubmissionFormPayload())
    return (
      <div class={s.home}>
        {/* Welcome Text Copy */}
        {/* NOTE: this might  look good in an ANTd type "card" */}
        <div class={s.welcome_text}>
          <h3>Hello! 👋</h3>
          <p>
            Speak, Friend connects people who want to speak on a topic with people and organizations
            seeking speakers for events.
          </p>
          <p>
            If you are looking to speak at conferences, workshops, meetups, etc--this tool might be
            able to help. Submit a proposal using our form and tag it so event runners may see it.
          </p>
          <p>
            Are you an event organizer looking for speakers? You can use the other half of Speak,
            Friend to post openings for speakers.
          </p>
        </div>

        {/* Submission Form */}
        <div class={s.submission_form}>
          <input
            type="text"
            name="speaker_name"
            onChange={this.updateFormField}
          placeholder="Name"
            value={this.state.speaker_name}
          />
          <input
            type="email"
            name="speaker_email"
          placeholder="Email"
            onChange={this.updateFormField}
            value={this.state.speaker_email}
          />
          <textarea
            name="speaker_description"
            onChange={this.updateFormField}
            value={this.state.speaker_description}
          placeholder="Describe the topic you are interested in speaking on."

          />
          <button onClick={this.submitPitch}>Submit</button>
        </div>
      </div>
    );
  }
}
