const express = require('express')
const fetch = require('node-fetch')

const app = express()

app.use('/', (req, res) => {
  const url = `https://pokeapi.co/api/v2${req.url}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      res.json(data)
    })
    .catch((error) => {
      console.error('Error:', error)
      res.status(500).json({ error: 'Internal Server Error' })
    })
})

app.listen(8000, () => {
  console.log('Proxy server is running on http://localhost:8000');
})