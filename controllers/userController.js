const bcyrpt = require('bcrypt')
const jwt = require("jsonwebtoken")
const models = require('../models')
const User  = models.user
const saltRounds  = 10

module.exports = {
  register : (req,res) => {
    let {email,password} = req.body
    bcyrpt.genSalt(saltRounds, function(err, salt) {
      bcyrpt.hash(password, salt, function(err, hash) {
        User.create({
          email,
          password: hash
        }).then(user => {
           const token = jwt.sign({ user_id : user.id }, 'my-secret-key')
          res.send({
            message : 'success',
            token
          })
        })
      })
  })
},

  login : (req,res) => {
    let {email,password} = req.body
    User.findOne({
      where: {
        email
      }
    }).then(user => {
      if(!user) {
        res.status(400).send({
          message : "wrong email"
        })
      }else{
        bcyrpt.compare(password,user.password).then(result => {
          if(result){
            const token = jwt.sign({ user_id : user.id }, 'my-secret-key')
            res
             .status(200)
             .send({
              username : user.name,
              "access_token" : token
            })
          }else{
            res
             .status(400)
             .send({
               message : 'Wrong password and'
             })
          }
        })
      }

    });
  }
}
