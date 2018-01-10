/**
 * Network Functions and Globals.
 * TODO: handle status errors and whatever.
 */

export const api = "http://localhost:3001/api";

export function POST(url, payload) {
  console.log("outgoing payload is", payload)
  return fetch(`${api}/${url}`, {
    method: "post",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  })
    .then(function(response) {
      console.log(response);
      return response.json();
    })
    .then(function(data) {
      console.log(data);
      return data;
    });
}
