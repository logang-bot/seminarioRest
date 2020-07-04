const router=require('express').Router()
const {user} = require('../controllers')

//rutas para user 
router.get('/user', user.index)
router.post('/user/signUp', user.signUp)
router.post('/user/logIn', user.logIn)
router.put('/user/edit',user.update)
router.delete('/user/delete',user.delete)

//rutas para restaurant
router.get('/res', user.index)
router.get('/res/list', user.signUp)
router.post('/res/create', user.logIn)
router.put('/res/edit/:id',user.update)
router.delete('/res/delete/:id',user.delete)
router.patch('/res/editProp/:id',user.update)

//rutas para menu
router.get('/menu/list/:idRes', user.index)
router.post('/menu/create/:idRes', user.signUp)
router.put('/menu/edit/:id',user.update)
router.delete('/user/delete/:id',user.delete)

//rutas para orden
router.get('/orden/list', user.index)
router.post('/orden/create', user.signUp)
router.put('/orden/edit/:id',user.update)
router.delete('/orden/delete/:id',user.delete)

router.get('/',(req,res)=>{
    res.status(200).json({mensaje: 'hola'});
})
module.exports = router


