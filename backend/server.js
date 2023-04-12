const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const PORT = 8000


app.use(express.json())

//database 

const food = {
item1 : 'chinese ', 
item2 : 'korean'
}





app.get('/', (req,res)=> {
res.send ("Hello")
})


app.get()

app.listen(PORT, () => {
  console.log('Hello! Port is active ')
})

