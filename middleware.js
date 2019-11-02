const jwt = require('jsonwebtoken');

  exports.authentication = async (req,res,next) => {
    const bearerHeader = await req.headers['authorization']
    if(typeof bearerHeader !== "undefined") {
      const bearer = await bearerHeader.split(' ')
      const bearerToken = await bearer[1]
      req.token = await bearerToken
      
     jwt.verify(req.token, 'my-secret-key', (err, auth) => {
        if (err) {
          res.status(400).send({
            message: "invalid token"
          });
        }
        else {
          req.user = auth;
          next();
        }
      })

    }else{
      res.status(400).send({
        message : 'forbidden'
      })
    }
  }


  exports.authorized = (req,res,next) => {
    if(req.user.user_id == req.params.user_id) {
      next()
    }else{
      res
        .status(404)
        .json({
          message : "you try hacking my website"
        })
    }
  }
