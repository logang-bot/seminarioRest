const mongoose  =require('mongoose')

mongoose.connect('mongodb://172.27.0.2:27017/bdrestau').then(db=>console.log('db running :)'))
.catch(err=>(console.error(err)))