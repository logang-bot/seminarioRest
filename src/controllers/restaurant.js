const ctrl  = {}
const {restaurant} = require('../models')

ctrl.create = (req,res)=>{
    const newRes = new restaurant(req.body)
    const errors=[]
    if(!newRes.nombre)errors.push({text: "el nombre es requerido"})
    if(!newRes.calle)errors.push({text: "la calle es necesaria"})
    if(!newRes.telefono)errors.push({text: "el telefono es requerido"})
    if(!newRes.log)errors.push({text: "la ubicacion es requerida"})
    if(!newRes.lat)errors.push({text: "la ubicacion es requerida"})
    
    if(errors.length>0) res.status(501).json(errors)
    else{
        const rest = restaurant.findOne({nombre: req.body.nombre})
        if(rest) res.send('el nombre ya esta en uso')
        else{
            
        }
    }
}