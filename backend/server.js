const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const PORT = 8000


app.use(express.json())


const foodRouter = require('./routes/food')


app.use('/api/food', foodRouter)

app.get('/', (req,res)=> {
res.send ("Hello")
})


app.get()

app.listen(PORT, () => {
  console.log('Hello! Port is active ')
})

