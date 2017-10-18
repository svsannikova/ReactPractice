export function getPoll(id) {
  return fetch(['http://localhost:3000/polls', id].join('/'), {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    mode: 'cors',
    cache: 'default',
  }).catch(err => {
    console.log(err.body)
  })
}
