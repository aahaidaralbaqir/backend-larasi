const models = require("../models")
const Favorite = models.favorite

exports.addFavorite = (req,res) => {
    Favorite.create({
      user_id : req.user.user_id,
      webtoon_id : req.body.webtoon_id
    }).then(result => {
      res.status(200).json({
        message : "succes",
        data : result
      })
    }).catch(err => {
      res.status(400).json({
        message : "failed",
        data : err
      })
    })
}

exports.deleteFavorite  = (req,res) => {
    Favorite.destroy({
      where : { id : req.params.favorite_id }
    })
    .then(result => {
      res.status(200).json({
        message : "success",
        data : result
      })
    }).catch(err => res.status(400).json({
      message : "failed",
      data : err
    }))
  }