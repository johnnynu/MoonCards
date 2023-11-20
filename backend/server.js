const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`)
})

const axios = require('axios')

axios
  .get('http://localhost:4000/api/cards') // replace with your server's actual URL
  .then((response) => {
    console.log(response.data)
  })
  .catch((error) => {
    console.error(error.message)
  })
