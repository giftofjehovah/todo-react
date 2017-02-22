const quotes = {
  get: getQuote
}

async function getQuote (beforeAction, successAction, errorAction) {
  beforeAction()
  const query = window.fetch('https://quotes.rest/qod')
    .then(res => res.json())
    .then(data => [null, data.contents.quotes[0].quote])
    .catch(err => [err])

  const [error, result] = await query
  if (error) return errorAction(error)
  successAction(result)
}

export default quotes
