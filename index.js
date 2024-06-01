const express = require('express')
const cors = require('cors')
const myAppetizers = require('./controllers/appetizers.js')
const entrees = require('./controllers/entrees.js')
const desserts = require('./controllers/desserts.js')
const PORT = process.env.PORT || 3001

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.listen(PORT, () => console.log(`Server running on ${PORT}`))

app.get('/', (request, response) => {
    response.send({ msg: 'Server Running' })
  })

app.get('/appetizers', myAppetizers.getAppetizers)
app.get('/appetizers/:id', myAppetizers.getAppetizer)
app.get('/entrees', entrees.getEntrees)
app.get('/entrees/:id', entrees.getEntree)
app.get('/desserts', desserts.getDesserts)
app.get('/desserts/:id', desserts.getDessert)