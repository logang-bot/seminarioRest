const router=require('express').Router()
const {user} = require('../controllers')

router.get('/user', user.index)
router.post('/user/signUp', user.signUp)






router.get('/',(req,res)=>{
    res.status(200).json({mensaje: 'hola'});
})
module.exports = router


