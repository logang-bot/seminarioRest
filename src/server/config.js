const express  = require('express')
const multer  = require('multer')
const morgan  = require('morgan')
const passport  = require('passport')
const session  = require('express-session')
const routes = require('../routes')
const path = require('path')



const app =express()

require('../config/passport')

app.set('port',process.env.PORT || 8000);


app.use(morgan('dev'))
app.use(multer({
    dest: path.join(__dirname, '../public/upload/temp')
}).single('Image'))

app.use(express.urlencoded ({extended: false}))

app.use(session({
    secret: 'secretoapp',
    resave: true,
    saveUninitialized: true
}))
app.use(passport.initialize())
app.use(passport.session())

app.use("/",routes)

//static 

app.use('/public', express.static(path.join(__dirname, '../public')))


module.exports = app

