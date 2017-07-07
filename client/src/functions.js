import config from './config';

/* *********************************** */
// Useful functions to use around the project
// Don't forget to add docstrings!
/* *********************************** */


/**
* Used to update a form's state using controlled inputs
* NOTE: you MUST name your form field (inputs, text areas etc)
* to have the same `name=` attr as key they are given
* in the react state object.
*/
export function updateFormField(e) {
  this.setState({
    [e.target.name]: e.target.value,
  });
}

/**
* Wrapper for GET requests
*/
export function fetch_get(endpoint, cb) {
  fetch(config.API + endpoint).then(res => res.json()).then(data => cb(data));
}

/**
* Wrapper for POST requests
*/
export function fetch_post(endpoint, body, cb) {
  fetch(config.API + endpoint, {
    headers: { 'Content-Type': 'application/json' },
    method: 'POST',
    body: JSON.stringify(body),
  })
    .then(res => res.json())
    .then(d => {
      cb && cb(d);
    });
}
