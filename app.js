const express = require('express');
const app = express()
const session = require('express-session')
const port = 3000
const route = require('./routes/index.js')


app.set('view engine','ejs')
app.use(express.urlencoded({extended:true}))

app.use(session({
    secret: 'asd warrior',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
  }))
app.use('/',route)
app.listen (port,(err,res)=>{
    console.log(`running on port ${port}`)
})
