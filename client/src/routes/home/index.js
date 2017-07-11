import { h, Component } from 'preact';

import s from './style';
import config from '../../config';
import { fetch_post, updateFormField } from '../../functions';

/* TODO: Fix imports to only import css for component: Might be importing all of antd's CSS */
import { Button, Card, Input } from 'antd';
const { TextArea } = Input;

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.updateFormField = updateFormField.bind(this);
  }

  state = {
    name: '',
    email: '',
    description: '',
  };

  submitPitch = e => {
    fetch_post('/submissions', {
      name: this.state.name,
      email: this.state.email,
      description: this.state.description,
    });

    // TODO: This could be in the submit pitch on success callback
    this.setState({
      name: '',
      email: '',
      description: '',
    });

    // TODO: flash a success message on submit. OR: generate a link to a "speakers uuid page - a unique page for viewing their pitch from a link."
  };

  render() {
    return (
      <main class={s.home}>
        {/* Welcome Text Copy */}
        <section class={s.welcome_text}>
          <Card>
            <h3>Hello! 👋</h3>
            <p>
              Speak, Friend connects people who want to speak on a topic with people and
              organizations seeking speakers for events.
            </p>
            <p>
              If you are looking to speak at conferences, workshops, meetups, etc--this tool might
              be able to help. Submit a proposal using our form and tag it so event runners may see
              it.
            </p>
            <p>
              Are you an event organizer looking for speakers? You can use the other half of Speak,
              Friend to post openings for speakers.
            </p>
          </Card>
        </section>

        {/* Submission Form */}
        <section class={s.submission_form}>
          <Card bodyStyle={{ display: 'flex', flexDirection: 'column' }}>
            {' '}{/* TODO: replace with class */}
            <Input
              type="text"
              name="name"
              onChange={this.updateFormField}
              placeholder="Name"
              value={this.state.name}
            />
            <Input
              type="email"
              name="email"
              placeholder="Email"
              onChange={this.updateFormField}
              value={this.state.email}
            />
            <Input
              type="textarea"
              name="description"
              onChange={this.updateFormField}
              value={this.state.description}
              placeholder="Describe the topic you are interested in speaking on."
            />
            <Button type="primary" onClick={this.submitPitch} style={{ alignSelf: 'flex-start' }}>
              Submit
            </Button>
          </Card>
        </section>
      </main>
    );
  }
}
