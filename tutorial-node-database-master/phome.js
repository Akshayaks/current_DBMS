const express = require('express')
const bodyParser = require('body-parser')
const pstore = require('./pstore')
const papp = express()
papp.use(express.static('public1'))
papp.use(bodyParser.json())
papp.post('/createIntern', (req, res) => {
  pstore
    .createIntern({
      id: req.body.id,
      title: req.body.title,
      field: req.body.field,
      description: req.body.description
    })
    .then(() => res.sendStatus(200))
})

papp.listen(7000, () => {
  console.log('Server running on http://localhost:7000')
})
