const { Restaurant, Cabang, Review, User } = require('../models/index')

class Controller{

    static findAll(req,res){
        let user = req.session.user
        Restaurant.findAll({include : {model : Cabang }})
        .then(data=>{
            res.render('rs',{data,user})
        })
        .catch(err=>{
            res.send(err)
        })
    }

}

module.exports=Controller