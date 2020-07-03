const express = require('express');
const app= express();

require('./database')
app.set('port',process.env.PORT || 8000);
app.listen(app.get("port"),()=>{
    console.log(`servidor corriendo en el puerto ${app.get("port")} `);
});