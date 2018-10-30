const express = require('express')
const bodyParser = require('body-parser')
const sstore = require('./sstore')
const sapp = express()
sapp.use(express.static('public2'))
sapp.use(bodyParser.json())
sapp.post('/searchIntern', (req, res) => {
  sstore
    .searchIntern({
      field: req.body.field
    })
    .then(() => res.sendStatus(200))
})

sapp.listen(7500, () => {
  console.log('Server running on http://localhost:7500')
})
