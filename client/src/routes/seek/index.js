/****** TODOS AND NOTES *****
  DESCRIPTION: Give hosts the tools to find speakers for their next event

  TODO: Require Authorization for this page
  TODO: Form validation
*/

import { h, Component } from 'preact';
import s from './style';
import config from '../../config';
import { updateFormField, fetch_get, fetch_post } from '../../functions';
import { Button, Card, Input, Table } from 'antd';

// unfortunate moment junk required for the date picker
// TODO: I don't think all of these are required
import moment from 'moment';
import enUS from 'antd/lib/date-picker/locale/en_US';
import 'moment/locale/en-ca';

moment.locale('en-ca');

export default class Seek extends Component {
  constructor(props) {
    super(props);
    this.updateFormField = updateFormField.bind(this);
  }

  state = {
    name: '',
    brief: '',
    details: '',
  };

  componentDidMount() {
    fetch_get('/submissions', d => this.setState({ speakers: d }));
  }

  submitSpot = e => {
    fetch_post('/spots', {
      event: this.state.name,
      brief: this.state.brief,
      details: this.state.details,
    });
  };

  // prettier-ignore
  renderSpeakerList = () => {
    // TODO: clean this up + make a nicer empty state (with cool illustration)
    if (this.state.speakers === undefined || this.state.speakers.length === 0){
      return <div style={{textAlign: 'center'}}>No Speakers Found!</div>
    }


    // table columns
    const columns = [{
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: text => <a href="#">{text}</a>,
    },{
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    }]

    const data = this.state.speakers.map((s, i) => {
      return {
        key: i,
        name: s.name,
        email: s.email,
        description: s.description
      }
    })

    return <Table
             columns={columns}
             dataSource={data}
             expandedRowRender={record => <p> {record.description}</p>}
    />
  }

  render() {
    return (
      <main class={s.seek}>
        {/* section 1: Hosts submit the next open spot they have */}
        <section class={s.spots}>
          <Card bodyStyle={{ display: 'flex', flexDirection: 'column' }}>
            <h2>Submit an Open Spot</h2>

            <Input placeholder="Event name" name="name" onChange={this.updateFormField} />

            {/* TODO: find a better solution for dates; The Date picker for antd is buggy */}
            <Input placeholder="Date / Time of Event" name="date" onChange={this.updateFormField} />

            <Input
              placeholder="Brief description of what you're looking for"
              name="brief"
              onChange={this.updateFormField}
            />
            <Input
              type="textarea"
              placeholder="Any other details a potential speaker should know."
              name="details"
              onChange={this.updateFormField}
            />

            <Button type="primary" onClick={this.submitSpot} style={{ alignSelf: 'flex-start' }}>
              {' '}Submit{' '}
            </Button>
          </Card>
        </section>

        {/* section 2: Browser submitted speakers based on topic / interest */}
        <section class={s.speakerlist}>
          {/* TODO: replace inline styles with class */}
          <Card bodyStyle={{ display: 'flex', flexDirection: 'column' }}>
            <h2 style={{ padding: '1rem 0' }}>Available Speakers</h2>
            {this.renderSpeakerList()}
          </Card>
        </section>
      </main>
    );
  }
}
