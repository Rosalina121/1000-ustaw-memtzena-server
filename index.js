const fs = require('fs');

const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000

let ustawy = [];
let availableUstawy = [];
// console.log(ustawy)

loadData()

app.use(cors())

app.get('/ustawa/:id', (req, res) => {
    const ustawa = ustawy.find(v => v.number === req.params.id)
    console.log(ustawa)
    res.send(ustawa)
})

app.get('/ustawa', (req, res) => {
    const ustawa = availableUstawy[availableUstawy.length * Math.random() | 0]
    console.log("Ustawa get!", ustawa)
    res.send(ustawa)
})

app.get('/available', (req, res) => {
    res.send({availableUstawy: availableUstawy})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

function loadData() {
    let data = fs.readFileSync('ustawy.json')
    ustawy = JSON.parse(data).ustawy
    availableUstawy = ustawy.filter(u => u.title !== "")
    console.log(availableUstawy)
}