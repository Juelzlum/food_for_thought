
const express = require('express');
const router = express.Router();

const food = {
  item1 : 'chinese', 
  item2 : 'korean',
  item3 : 'italian'
  }

  
  router.get('', (req,res) => {
    const arr = Object.values(food)
    res.json(arr)
  })


  module.exports = router;