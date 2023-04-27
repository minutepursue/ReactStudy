const express = require('express')
var cors = require('cors')

var favicon = require('serve-favicon')
var path = require('path')

const app = express()
const port = 3000

app.use(cors())
app.use(favicon(path.join(__dirname, '', 'favicon.ico')))

const domeggook_url = 'https://domeggook.com/ssl/api'

let domeggook_data = {
  'ver': "4.1",
  'mode': "getItemList",
  'aid': "20510fee5308ad18be75ee39914d1f37",
  'market': "dome",
  'om': "json",
  'ca': '01_01_00_00_00'
}

domeggook_data = '?'+Object.entries(domeggook_data).map(e => e.join('=')).join('&')

app.get('/', (req, res) => {
  // res.send('Hello !')

let domeggook_list;

  fetch(domeggook_url+domeggook_data)
  .then(response => {
    return response.json();
  })
  .then(data => {
    console.log(data.domeggook);
    domeggook_list=data.domeggook;
  })
  .catch((error) => console.log("error:", error))
  
  res.json(domeggook_list);

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