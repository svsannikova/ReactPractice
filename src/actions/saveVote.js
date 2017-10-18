export function saveVote(json) {
  const body = {
    choiceId: json.body,
    pollId: json.id,
  }
  console.log(body)
  var url = [['http://localhost:3000/polls', json.id].join('/'), 'vote'].join(
    '/'
  )
  console.log(url)
  return fetch(url, {
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
