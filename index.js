const fs = require('fs');

const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000

let ustawy;

let data = fs.readFileSync('ustawy.json')
ustawy = JSON.parse(data).ustawy
console.log(ustawy)

app.use(cors())


app.get('/ustawa/:id', (req, res) => {
    const ustawa = ustawy.find(v => v.number === req.params.id)
    console.log(ustawa)
    res.send(ustawa)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// for (let x = 1; x <= 1000; x++) {
//     ustawy.push({number: x.toString(), title: "", description: ""})
// }
// let dataX = JSON.stringify({ustawy: ustawy})
// fs.writeFileSync('ustawy2.json', dataX)