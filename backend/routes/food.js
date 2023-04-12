
const express = require('express');
const router = express.Router();

const food = {
  item1 : 'chinese', 
  item2 : 'korean'
  }

  
  router.get('/', (req,res) => {
    const arr = Object.values(food)
    res.json(arr)
  })


  module.exports = router;