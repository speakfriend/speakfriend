import { h, Component } from "preact";
import s from "./style";

export default class Home extends Component {
  render() {
    return (
      <div class={s.home}>

        {/* Welcome Text Copy */}
        <div class={s.welcome_text}>
          <h3>Hello! 👋</h3>
          <p>Speak, Friend connects people who want to speak on a topic with people and organizations seeking speakers for events.</p>
          <p>If you are looking to speak at conferences, workshops, meetups, etc--this tool might be able to help. Submit a proposal using our form and tag it so event runners may see it.</p>
          <p>Are you an event organizer looking for speakers? You can use the other half of Speak, Friend to post openings for speakers.</p>
        </div>

        {/* Submission Form */}
        <div class={ s.submission_form }>

          {/* TODO: move to a component with proper styling */}
          {/* TODO: setup controlled inputs */}
          <input type="text" />
          <input type="text" />
          <textarea />
          <button>Submit</button>
        </div>

      </div>
    );
  }
}
