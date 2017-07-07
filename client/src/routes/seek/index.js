/****** TODOS AND NOTES *****
  DESCRIPTION: Give hosts the tools to find speakers for their next event

  TODO: should speakers be shown here in a list at all? IF so:
  TODO: Componentize speaker list / speaker single
  TODO: Require Authorization for this page
  TODO: Form validation
*/

import { h, Component } from 'preact';
import s from './style';
import config from '../../config';
import { updateFormField, fetch_get, fetch_post } from '../../functions';

export default class Seek extends Component {
  constructor(props){
    super(props)
    this.updateFormField = updateFormField.bind(this)
  }

  state = {
    event_name: '',
    event_brief: '',
    event_details: '',
  };

  componentDidMount() {
    fetch_get('/submissions', d => this.setState({ speakers: d }));
  }

  submitSpot = e => {
    fetch_post('/spots', {
      event: this.state.event_name,
      brief: this.state.event_brief,
      details: this.state.event_details,
    });
  };

  renderSpeakerList = () => {
    if (!this.state.speakers) return null;
    return this.state.speakers.map(s =>
      <ul>
        <li>
          {s.name}
        </li>
        <li>
          {s.email}
        </li>
        <li>
          {s.description}
        </li>
      </ul>
    );
  };

  render() {
    return (
      <section class={s.seek}>
        {/* section 1: Browser submitted speakers based on topic / interest */}
        <div class={s.speakerlist}>
          {this.renderSpeakerList()}
        </div>

        {/* section 2: Hosts submit the next open spot they have */}
        <div class={s.spots}>
          <input placeholder="Event name" name="event_name" onChange={this.updateFormField} />
          <input
            placeholder="Brief description of what you're looking for"
            name="event_brief"
            onChange={this.updateFormField}
          />
          <textarea
            placeholder="Any other details a potential speaker should know."
            name="event_details"
            onChange={this.updateFormField}
          />
          <button onClick={this.submitSpot}>Submit</button>
        </div>
      </section>
    );
  }
}
