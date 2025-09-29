const express = require('express');
const router = express.Router();
const knex = require('../utils/db');

// list products
router.get('/', async (req,res)=>{
  try{
    const products = await knex('products').select('*').limit(200);
    res.json(products);
  }catch(e){
    console.error(e);
    res.status(500).json({error:'server error'});
  }
});

router.get('/:id', async (req,res)=>{
  try{
    const p = await knex('products').where({id: req.params.id}).first();
    if(!p) return res.status(404).json({error:'Not found'});
    res.json(p);
  }catch(e){
    console.error(e);
    res.status(500).json({error:'server error'});
  }
});

module.exports = router;
