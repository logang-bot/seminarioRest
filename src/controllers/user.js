const ctrl  = {}
const {user} = require('../models')
const restaurant = require('../models/restaurant')

ctrl.index = async (req,res)=>{
    const usrs  = await user.find({})
    res.status(200).json(usrs)
}

ctrl.signUp = async (req,res)=>{
    const{name, email, password, confirm_password} = req.body
    const errors=[]
    if(!name)errors.push({text: "el nombre es requerido"})
    if(!email)errors.push({text: "el email es necesario"})
    if(!password)errors.push({text: "password requerido"})
    if(password != confirm_password)errors.push({text: "el password no coincide"})

    if(errors.length>0) res.status(501).json(errors)
    else{
        const usr = await user.findOne({email: req.body.email})
        if(usr) res.send('el email ya esta en uso')
        else{
            const newuser  = await new user({name, email, password})
            newuser.password = await newuser.encrypt(password)
            await newuser.save()
            res.send('estas registrado')
            console.log(newuser)
        }
    }
}
ctrl.logIn= (req,res)=>{
    const{name, email, password, confirm_password} = req.body

}
ctrl.update= (req,res)=>{
    if(!req.body.content){
        return res.status(400).send({
            message: "contenido no puede ser enviado"
        })
    }
    user.findByIdAndUpdate(req.params.userId,{
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        restaurant: req.body.restaurant
    },{new: true}) //metodo para retornar el documento modificado
    .then(user =>{
        if(!user){
            return res.status(404).send({
                message: "usuario no encontrado con el id " +req.params.userId
            });
        }
        res.send(user);
    }).catch(err =>{
        return res.status(500).send({
            message: "error actualizando datos con el ID"
        })
    });



}

ctrl.delete= (req,res)=>{
    user.findByIdAndRemove(req.params.userId)
    .then(user => {
        if(!user){
            return res.status(404).send({
                message: "usuario no encontrado con el id" +req.params.userId
            })
        }
    }).catch(err =>{
        return res.status(500).send({
            message: "no se pudo eliminar con el id" + req.params.userId
        })
    })
}


module.exports = ctrl