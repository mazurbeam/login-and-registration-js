const mongoose = require('mongoose')
const User = mongoose.model('User')

module.exports = {
  index: (req,res)=>{
    res.render('index')
  },
  register: (req,res)=>{
    if(req.body.password == req.body.confirm_password){
      user = new User(req.body)
    }

    )
  }
}
