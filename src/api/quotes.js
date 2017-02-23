export async function get (successDispatch, errorDispatch) {
  const query = window.fetch('https://quotes.rest/qod')
    .then(res => res.json())
    .then(data => [null, data.contents.quotes[0].quote])
    .catch(err => [err])

  const [error, result] = await query
  if (error) return errorDispatch(error)
  return successDispatch(result)
}
