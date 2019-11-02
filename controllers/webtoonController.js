const models = require('../models');
const User  = models.user
const Webtoon = models.webtoon
const Episode = models.episode
const Favorite = models.favorite
const Sequelize = require('sequelize')
const Op = Sequelize.Op;


module.exports = {
  findAllwebtoons : (req,res) => {
   if(Object.entries(req.query).length >= 1) {
       if(req.query.hasOwnProperty('is_favorite') && req.query.isFavorite !== ""){
        Webtoon.findAll({
          attributes : {
            exclude : ['created_by']
          },
          include : [
            {
              model : Episode,
              as : 'episodes',
            },
            {
              model : User,
              as : 'isFavorite',
              attributes : ['id'],
              through : {
                model : Favorite,
              },
            }
          ]
        }).then(result => {
          let data = JSON.parse(JSON.stringify(result))
          for(let i = 0; i < data.length; i++ ){
            data[i].favorite = false
            data[i].favorite_id = null
            data[i].isFavorite.map((item) => {
              if(item.id == req.user.user_id) {
                data[i].favorite = true
                data[i].favorite_id = item.favorites.id
              }
            })
          }
          res.status(200).json({
            message : "success",
            data
          })
        })
        .catch(err => {
          res.status(400).json({
            message : "failed",
            data : err
          })
        })
      }else{
        if(req.query.title !== "") {
          Webtoon.findAll({
            where  : {
              title : { [Op.like] : `%${req.query.title}%` }
            }
          }).then(result => res.json({
            status : 200,
            message : 'succes',
            data : result
          }))
         }else{
           res.status(200).json({
             status : 200,
             message : 'success',
             data : []
           })
         }
        }
      }else{
        Webtoon.findAll({
          attributes : {
            exclude : ['created_by']
          },
          include : [
            {
              model : User,
              as : 'isFavorite',
              attributes : ['id'],
              through : {
                model : Favorite
              }
            }
          ]
        }).then(result => {
          let data = JSON.parse(JSON.stringify(result))
          for(let i = 0; i < data.length; i++ ){
            data[i].favorite = false
            data[i].isFavorite.map((item) => {
              if(item.id == req.user.user_id) {
                data[i].favorite = true
              }
            })
          }
          res.status(200).json({
            message : "success",
            data
          })
        })
        .catch(err => console.log(err))
      }
 },
 findAllWebtoonsByUser : (req,res) => {
    let {user_id} = req.params
    Webtoon.findAll({
      where : {
          created_by : user_id
        },
      include : [{
        model : Episode,
        as : 'episodes'
      }]
   }).then(webtoons =>
     res.json({
       status:200,
       message:'success',
       data: webtoons
     })
   )
 },
 createWebtoon : (req,res) => {
   Webtoon.create({
     title : req.body.title,
     genre : req.body.genre,
     image : req.file.path,
     created_by : req.user.user_id
   }).then(webtoon => {
     res.send({
       status : 200,
       message : 'success',
       data : webtoon
     })
   }).catch(err => {
    res.status(400).json({
      message : "failed",
      data : err
    })
   })
 },

 deleteWebtoon : (req,res) => {
   let { webtoon_id } = req.params
   Webtoon
    .destroy({
     where : {
       id : webtoon_id
     }
   })
   .then( webtoon =>
    res.status(200).json({
     status : 200,
     message : 'success',
   }))
   .catch(err => {
    res.status(400).json({
      message : "failed",
      data : err
    })
   })
 },

 updateWebtoon : async (req,res) => {
  const validate = await Webtoon.findOne({
    where: { id: req.params.webtoon_id },
  });
  if (validate.created_by !== req.user.user_id) {
    return res.status(401).json({ error: 'Access Denied!' });
  }
   let data = {
     title : req.body.title,
     genre : req.body.genre,
     image :  req.file ? req.file.path : validate.image,
   }
   Webtoon.update(
     data,
     {where : {id : req.params.webtoon_id}}
   ).then(webtoon => {
     res.json({
       status : 200,
       message : "success"
     })
   }).catch(err => {
    res.status(400).json({
      message : "failed",
      data : err
    })
   })
 },

 episode : (req,res) => {
   let { id } = req.params
   Episode.findAll({
     where: {
       webtoon_id : id
     }
   }).then(episodes=>
     res.status(200).json({
       message : 'success',
       data : episodes
     })
   ).catch(err => {
    res.status(400).json({
      message : "failed",
      data : err
    })
   })
 }

}
