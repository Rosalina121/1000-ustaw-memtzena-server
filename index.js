const fs = require('fs');

const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000

let ustawy;


// console.log(ustawy)

app.use(cors())



app.get('/ustawa/:id', (req, res) => {
    let data = fs.readFileSync('ustawy.json')
    ustawy = JSON.parse(data).ustawy
    const ustawa = ustawy.find(v => v.number === req.params.id)
    console.log(ustawa)
    res.send(ustawa)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})