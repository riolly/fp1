const { Restaurant, Cabang, Review, User } = require('../models/index')

class Controller{

    static findAll(req,res){
        Review.findAll({
            order: [['updatedAt', 'ASC']]})
        .then(data=>{
            res.render('reviews', {data})
        })
        .catch(err=>{
            res.send(err)
        })
    }

    static toReview(req,res){
        let idRs = req.params.restaurant_id
        let idCb = req.params.cabang_id
        let error = req.query.error
        let session = req.session.user
        let jumlah = 0;
        let mean = 0;

        Review.findAll({
            where:{CabangId:idCb},
            include : [{model : User },{model : Cabang}]
        })
        .then(data=>{
            for(var i = 0 ; i < data.length ; i++){
                jumlah += Number(data[i].rating)
            }
            mean = jumlah/data.length
            
            if(data.length == 0){
                mean = "Belum ada"
                console.log (mean)
            } else {
            mean = mean = jumlah/data.length
            }
    
            res.render('rwlist',{data,error,session,mean,idCb,idRs})
        })
        .catch(err=>{
            res.send(err)
        })
    }

    static checkAddReview(req,res){
        let idRs = req.params.restaurant_id
        let idCb = req.params.cabang_id
        let session = req.session.user
        let idUs = session.id
      
        let condition = true
        Review.findAll({where:{CabangId:idCb}})
        .then(data=>{
            for(var i = 0 ; i < data.length ; i ++){
                if(Number(data[i].UserId) == Number(idUs)){
                    condition = false
                }
            }
            console.log(condition)
            if(condition == false){
            res.redirect(`/restaurant/${idRs}/cabang/reviews/${idCb}`)
            }
            res.redirect(`/review/info/${idRs}/${idCb}/add/user/${idUs}/adding`)
        })
    
        .catch(err=>{
            res.send(error)
        })

    }

    static add(req,res){
        let idRs = req.params.restaurant_id
        let idCb = req.params.cabang_id
        let session = req.session.user


        res.render('rwadd',{session,idRs,idCb})
    }

    static adding(req,res){
        let session = req.session.user
        let idRs = req.params.restaurant_id
        let idCb = req.params.cabang_id
        let idUs = session.id
        let body = req.body

        body.CabangId = idCb
        body.UserId = idUs
        body.review = body.review
        body.rating = body.rating
        body.createdAt = new Date()
        body.updatedAt = new Date()

        Review.create(body)
        .then(()=>{
            res.redirect(`/restaurant/${idRs}/cabang/reviews/${idCb}`)
        })
        .catch(err=>{
            res.send(err)
        })
    }

    static edit(req,res){
        let idRs = req.params.restaurant_id
        let idCb = req.params.cabang_id
        let idUs = req.params.user_id
        let session = req.session.user

        if(Number(idUs) !== session.id){
            res.redirect(`/restaurant/${idRs}/cabang/reviews/${idCb}`)
        }

        Review.findOne({where : { CabangId:idCb , UserId : idUs}} )
        .then(data=>{
            res.render('rwedit',{data , session , idRs})   
        })
        .catch(err=>{
            res.send(err)
        })
    }

    

    static change(req,res){
        let session = req.session.user
        let idRs = req.params.restaurant_id
        let idCb = req.params.cabang_id
        let idUs = session.id
        let body = req.body

        body.CabangId = idCb
        body.UserId = idUs
        body.review = body.review
        body.rating = body.rating
        body.createdAt = new Date()
        body.updatedAt = new Date()

        Review.update(body,{where : { CabangId:idCb , UserId : idUs}})
        .then(()=>{
            res.redirect(`/restaurant/${idRs}/cabang/reviews/${idCb}`)
        })
        .catch(err=>{
            res.send(err)
        })
    }
    

}

module.exports=Controller