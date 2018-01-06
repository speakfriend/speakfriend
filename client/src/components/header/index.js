import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';

export default class Header extends Component {
  render() {
    return (
      <header class={`${style.header} bg-near-white bb b--light-gray`}>
        <h1 class="f4 avenir fw4">Speak Friend!</h1>
        <nav>
          <Link activeClassName={style.active} href="/">Home</Link>
          <a href="https://github.com/speakfriend/speakfriend/" target="_blank">Contribute </a>
        </nav>
      </header>
    );
  }
}
