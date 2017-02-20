const quotes = {
  get: () => window.fetch('http://quotes.rest/qod').then(res => res.json())
}

export default quotes
