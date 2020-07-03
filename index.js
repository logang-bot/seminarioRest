const app= require('./src/server/config')

/*
esta configuracion esta en el archivo databsee.js, no lo trackeamos por comodidad 
const mongoose  =require('mongoose')

mongoose.connect('mongodb://172.27.0.2:27017/bdrestau').then(db=>console.log('db running :)'))//cambiar direccion ip
.catch(err=>(console.error(err)))*/

require('./databasee')

app.listen(app.get("port"),()=>{
    console.log(`servidor corriendo en el puerto ${app.get("port")} `);
});