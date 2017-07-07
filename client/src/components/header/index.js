import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';

export default class Header extends Component {
  render() {
    return (
      <header class={style.header}>
        <div class={style.wrapper}>
          <h1>Speak Friend</h1>
          <nav>
            <Link activeClassName={style.active} href="/">
              Home
            </Link>
            <Link activeClassName={style.active} href="/seek">
              Find Speakers
            </Link>
            <a href="https://github.com/speakfriend/speakfriend/" target="_blank">
              Contribute
            </a>
          </nav>
        </div>
      </header>
    );
  }
}
