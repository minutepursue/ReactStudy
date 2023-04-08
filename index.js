const express = require('express')
var cors = require('cors')

var favicon = require('serve-favicon')
var path = require('path')

const app = express()
const port = 3000

app.use(cors())
app.use(favicon(path.join(__dirname, '', 'favicon.ico')))

app.get('/', (req, res) => {
  res.send('Hello !')
})

app.get('/sound/:name', (req, res) => {

    const {name} = req.params
    console.log(name)

  res.json({'sound':'멍멍'})
})

app.get('/cat', (req, res) => {
    res.json({'sound':'야옹'})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})