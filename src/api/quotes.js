const quotes = {
  get: () => window.fetch('https://quotes.rest/qod').then(res => res.json())
}

export default quotes
