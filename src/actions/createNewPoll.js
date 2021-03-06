export function savePoll(text) {
  const body = text
  return fetch('http://localhost:3000/polls', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    mode: 'cors',
    cache: 'default',
    body: JSON.stringify(body),
  }).catch(err => {
    console.log(err.body)
  })
}
