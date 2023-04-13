
const express = require('express');
const router = express.Router();

const foods = {
  item1 : 'chinese', 
  item2 : 'korean',
  item3 : 'italian'
  }

  
  router.get('', (req,res) => {
    const arr = Object.values(foods)
    res.json(arr)
  })

  router.get('./foodId', (req,res) => {
    const foodId = req.params.foodId
    const food = foods[foodId]
    res.json(food)
  })

  module.exports = router;