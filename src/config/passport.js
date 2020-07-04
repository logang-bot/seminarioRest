const passport  =require('passport')
const localStrategy = require('passport-local').Strategy
const{user}= require('../models')
const {findById} = require('../models/user')

passport.use(new localStrategy({
    usernameField: 'email'
}, async (email,password,done)=>{
    const userr  = await user.findOne({email})
    if(!userr){
        console.log('el email no esta registrado')
        return done(null,false)
    }
    else{
        const match = await userr.match(password)
        if(match){
            console.log('estas logueado')
            return done(null, userr)
        }
        else{
            console.log('password incorrecto')
            return done(null, false)
        }
    }
}))

passport.serializeUser((userr, done)=>{
    done (null, userr.id)
})

passport.deserializeUser((id,done)=>{
    user.findById(id, (err,user)=>{
        done(err,user)
    })
})

module.exports = passport