export function savePoll(text) {
  const body = text
  console.log(body)
  return fetch('http://localhost:3000/polls', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    mode: 'cors',
    cache: 'default',
    body: JSON.stringify(body),
  })
    .then(r => {
      return r.json()
    })
    .then(t => {
      console.log(t)
      return t
    })
    .catch(err => {
      console.log(err.body)
    })
}
