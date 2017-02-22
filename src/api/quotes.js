const quotes = {
  get: getQuote
}

async function getQuote (beforeAction, successAction, errorAction) {
  beforeAction()
  const query = window.fetch('https://quotes.rest/qod')
  let result
  try {
    result = await query.then(res => res.json()).then(data => data.contents.quotes[0].quote)
    successAction(result)
  } catch (e) {
    errorAction(e)
  }
  return result
}

export default quotes
