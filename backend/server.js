const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const PORT = 8000


app.use(express.json())

//database 

const food = {

}



app.get('/', (req,res)=> {
res.send ("Hello")
})


app.listen(PORT, () => {
  console.log('Hello! Port is active ')
})

