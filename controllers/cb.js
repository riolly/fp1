const { Restaurant, Cabang, Review, User } = require('../models/index')

class Controller{

    static findAll(req,res){
        let idRs = req.params.restaurant_id
        let dataCb ;
        Cabang.findAll( { where: { RestaurantId : idRs } } )
        .then(data=>{
            dataCb = data
            return Restaurant.findOne({ where: { id : idRs } })
        })
        .then(dataRs=>{
            res.render('cb',{dataCb,dataRs})
        })
        .catch(err=>{
            res.send(err)
        })
    }

    static lihatReview(req,res){
        let idRs = req.params.restaurant_id
        let dataCb ;
        Cabang.findAll( { where: { RestaurantId : idRs } } )
        .then(data=>{
            dataCb = data
            return Restaurant.findOne({ where: { id : idRs } })
        })
        .then(dataRs=>{
            // res.send(datacb)
            res.render('cbreview',{dataCb,dataRs})
        })
        .catch(err=>{
            res.send(err)
        })
    }

    static findOne(req,res){
        let id = req.params.cabang_id
        Cabang.findOne ( {  where: { id: id }, include: [ { model: Review } ] } )
        .then(data=>{
            res.send(data)
        })
        .catch(err=>{
            res.send(err)
        })
    }

    static list(req,res){
        let id = req.params.restaurant_id

        Restaurant.findOne({  where: { id: id }, include: [ { model: Cabang } ]})
        .then(data=>{
            res.render('cblist', {data})
        })
        .catch(err=>{
            res.send(err)
        })
    }


    static add(req,res){
        let id = req.params.restaurant_id
        let error = req.query.error

        Restaurant.findOne({  where: { id: id }})
        .then(data=>{
            res.render('cbadd' , {data,error})
        })
        .catch(err=>{
            res.send(err)
        })

    }


    static adding(req,res){
        let body = req.body
        let id = req.params.restaurant_id

        body.RestaurantId = id,
        body.cabang = body.cabang,
        body.no_telp = body.no_telp,
        body.alamat = body.alamat
        body.createdAt = new Date()
        body.updatedAt = new Date()

        console.log(body)
        Cabang.create(body)
            .then(()=>{
                res.redirect(`/restaurant/${id}/cabang/list`)
            })
            .catch((err)=>{
                res.send(err)
            })

    }

    static edit(req,res){
        let idCb = req.params.cabang_id
        let error = req.query.error

        Cabang.findOne({  where: { id: idCb }})
        .then(data=>{
            res.render('cbedit' , {data,error})
        })
        .catch(err=>{
            res.send(err)
        })

    }


    static editing(req,res){
        let body = req.body
        let id = req.params.restaurant_id

        body.RestaurantId = id,
        body.cabang = body.cabang,
        body.no_telp = body.no_telp,
        body.alamat = body.alamat
        body.createdAt = new Date()
        body.updatedAt = new Date()

        console.log(body)
        Cabang.update(body,{where:{ id : req.params.cabang_id}})
        .then(()=>{
            res.redirect(`/restaurant/${id}/cabang/list`)
        })
        .catch((err)=>{
            res.send(err)
        })

       
    }

    static delete (req,res){

        Cabang.destroy({where:{ id:req.params.cabang_id}})
        .then(()=>{
            res.redirect(`/restaurant/${req.params.restaurant_id}/cabang/list`)
        })

    }

    

    static toReview(req,res){
        let idRs = req.params.restaurant_id
        let idCb = req.params.cabang_id
        
        res.redirect(`/restaurant/${idRs}/cabang/${idCb}/addreview`)
    }

}

module.exports=Controller