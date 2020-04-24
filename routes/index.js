const route = require('express').Router();
const rsController = require('../controllers/rs')
const cbController = require('../controllers/cb')
const rwController = require('../controllers/rw')
const usController = require('../controllers/us')


route.get('/',(req,res)=>{
    res.render('home')
})

const cekLogin = function (req, res, next){
  if(!req.session.user){
    res.redirect('/login')
  } else {
    next()
  }
}




route.get('/login', (req, res) =>{
  res.render ('login', {err:req.query.err})
})

route.post('/login',usController.login)

route.get('/restaurants',cekLogin,rsController.findAll)

route.get('/restaurant/:restaurant_id/cabang',cekLogin,cbController.findAll)
route.get('/restaurant/:restaurant_id/cabang/list',cekLogin,cbController.list)
route.get('/restaurant/:restaurant_id/cabang/list/add',cekLogin,cbController.add)
route.post('/restaurant/:restaurant_id/cabang/list/add',cekLogin,cbController.adding)
route.get('/restaurant/:restaurant_id/cabang/list/:cabang_id/edit',cekLogin,cbController.edit)
route.post('/restaurant/:restaurant_id/cabang/list/:cabang_id/edit',cekLogin,cbController.editing)
route.get('/restaurant/:restaurant_id/cabang/list/:cabang_id/delete',cekLogin,cbController.delete)

route.get('/reviews',cekLogin,rwController.findAll)
route.get('/restaurant/:restaurant_id/cabang/reviews',cekLogin,cbController.lihatReview)

route.get('/restaurant/:restaurant_id/cabang/reviews/:cabang_id',cekLogin,rwController.toReview)
route.get('/review/info/:restaurant_id/:cabang_id/:user_id/edit',cekLogin,rwController.edit)
route.post('/review/info/:restaurant_id/:cabang_id/:user_id/change',cekLogin,rwController.change)
route.get('/review/info/:restaurant_id/:cabang_id/add/user/:user_id',cekLogin,rwController.checkAddReview)
route.get('/review/info/:restaurant_id/:cabang_id/add/user/:user_id/adding',cekLogin,rwController.add)
route.post('/review/info/:restaurant_id/:cabang_id/add/user/:user_id/adding',cekLogin,rwController.adding)
// route.get('/restaurant/:restaurant_id/cabang/:cabang_id/addreview',cekLogin,rwController.toReview)

route.get('/user/register',usController.registerForm)
route.post('/user/register',usController.register)



module.exports=route