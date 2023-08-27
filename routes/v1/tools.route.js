const express = require('express');
const { getTools, saveATool } = require('../../controllers/tools.controller');
const router = express.Router()

  router.route('/')
  .get(getTools)
  .post(saveATool)
  
  router.route('/:id').get((req,res)=>{
    res.json({
      name:'sahadat arefin shuvo',
      roll:88,
      age:5,
      dis:'hello'
    })

  })

  module.exports = router;