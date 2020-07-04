const router=require('express').Router()









router.get('/',(req,res)=>{
    res.status(200).json({mensaje: 'hola'});
})
module.exports = router


