const { Restaurant, Cabang, Review, User } = require('../models/index')
const bcrypt = require('bcrypt')

class Controller{

    static login (req, res) {
        // res.send('uda masuk login nih')
        let temp;
        User.findOne ({
          where: {
            username: req.body.username
          }
        })
        .then ((data)=>{
            temp = data
            const password = req.body.password
            return bcrypt.compare(password, data.password)
        .then(pass => {
            req.session.user = {
              id : temp.id,
              name : temp.name,
              birth : temp.birth,
              email : temp.email,
              username: temp.username
              
            }
            console.log('berhasil')
            res.redirect('/')
          });
        })
        .catch (err =>{
            console.log(err)
          res.redirect (`/login?err=${err.message}`)
        })
      }

    static registerForm(req, res) {
      res.render('user-form', {msg: [req.query.msg]});
    }

    static register(req, res) {
      // res.send(req.body);
      User.create({
        name : req.body.name,
        birth : req.body.birth,
        email : req.body.email,
        username: req.body.username,
        password: req.body.password
      })
      .then(() => res.redirect('/login?msg=Register berhasil. Silahkan login'))
      .catch(err => {
        const errMsg = [];
        if (err.errors) {
          for (const msg of err.errors){
            errMsg.push(msg.message);
          }
        }
        res.render('user-form', {msg: errMsg})
      })
    }
}

module.exports=Controller