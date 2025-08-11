const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/countries', (req, res) => {
  res.send(
    {
      "countries": [
        {
          "name": "Allemagne",
          "countryCode": "DEU"
        },
        {
          "name": "Angleterre",
          "countryCode": "GB"
        },
        {
          "name": "France",
          "countryCode": "FR"
        },
      ]
    }
  )
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})