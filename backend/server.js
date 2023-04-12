const express = require('express')
const morgan = require('morgan')

const app = express()
const bodyParser = require('body-parser')
const PORT = 8000


app.use(express.json()) //req.body
app.use(morgan('dev'))

const foodRouter = require('./routes/food')


app.use('/api/food', foodRouter)

app.get('/', (req,res)=> {
res.send ("Hello")
})

app.listen(PORT, () => {
  console.log('Hello! Port is active ')
})

