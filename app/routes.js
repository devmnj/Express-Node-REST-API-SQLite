const express = require('express');
const router = new express.Router;
const Donator =require('./data/donator')

router.get('/',(req,res)=>{
  res.send('Working')
})
router.get('/donators',Donator.getAllDonators)
router.post('/donator',Donator.createDonator)
router.get('/donator/:id',Donator.findById)
router.put('/donator/update/:id',Donator.findByIdAndUpdate)
router.delete('/donator/del/:id',Donator.findByIdAndDelete)
router.get('/donators/:loc',Donator.findByLocation)
module.exports=router
