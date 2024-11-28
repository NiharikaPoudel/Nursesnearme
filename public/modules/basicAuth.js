function authUser(req,res,next){
    if(req.session.user = null){ 
        res.redirect('/login')
    }
}  