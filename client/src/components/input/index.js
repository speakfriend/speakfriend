import { h } from 'preact';
import { Link } from 'preact-router/match';

export default ({
  Container = props => <div class="flex flex-column mb4" {...props} />,
  id = 'someLabel',
  label = '',
  labelComponent = <label for={id}>{label}</label>,
  handleChange = e => console.log(e),
  error = false,
  errorStyle = {},
  errorComponent = error && <span class={style.inputError}>{error}</span>,
  ...props,
}) => (
  <Container>
    {labelComponent}
    <input
      type="text"
      onChange={handleChange}
      {...props}
    />
    {errorComponent}
  </Container>
);
