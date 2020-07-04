const helper = {}
helper.isAuth = (req,res,next)=>{
    if(req.isAuthenticated()){
        console.log('done')
        return next()
    }
    console.log('no estas logueado')
    res.send('no estas logueado')
}

module.exports = helper